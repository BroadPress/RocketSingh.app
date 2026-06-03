import { put } from "@vercel/blob";

const TTL_MS = 10 * 60 * 1000;
const MAX_BYTES = 5 * 1024 * 1024;

type StagedFile = {
  bytes: Buffer;
  contentType: string;
  filename: string;
  expiresAt: number;
};

const cache = new Map<string, StagedFile>();

function pruneExpired() {
  const now = Date.now();
  for (const [id, entry] of cache) {
    if (entry.expiresAt <= now) cache.delete(id);
  }
}

function releaseStagedFile(id: string) {
  cache.delete(id);
}

function scheduleRelease(id: string, delayMs = 300_000) {
  setTimeout(() => releaseStagedFile(id), delayMs);
}

export function stageFile(
  bytes: Buffer,
  contentType: string,
  filename: string,
): string {
  pruneExpired();
  const id = crypto.randomUUID();
  cache.set(id, {
    bytes,
    contentType,
    filename,
    expiresAt: Date.now() + TTL_MS,
  });
  return id;
}

export function getStagedFile(id: string): StagedFile | undefined {
  const entry = cache.get(id);
  if (!entry) return undefined;
  if (entry.expiresAt <= Date.now()) {
    cache.delete(id);
    return undefined;
  }
  return entry;
}

function mimeTypeForFile(file: File): string {
  if (file.type) return file.type;
  const ext = file.name.split(".").pop()?.toLowerCase();
  const map: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    heic: "image/heic",
    heif: "image/heif",
    pdf: "application/pdf",
  };
  return map[ext ?? ""] ?? "application/octet-stream";
}

function assertFileSize(file: File): void {
  if (file.size > MAX_BYTES) {
    throw new Error(
      `${file.name} is too large (max ${MAX_BYTES / (1024 * 1024)} MB per file)`,
    );
  }
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "_").slice(0, 120) || "upload";
}

/** Vercel Blob (persistent public URL) — required for serverless photo uploads. */
export function hasVercelBlobStorage(): boolean {
  return Boolean(process.env["BLOB_READ_WRITE_TOKEN"]?.trim());
}

async function publishViaVercelBlob(file: File): Promise<string> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const pathname = `bookings/${Date.now()}-${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
  const blob = await put(pathname, bytes, {
    access: "public",
    contentType: mimeTypeForFile(file),
    addRandomSuffix: false,
  });
  return blob.url;
}

function getPublicOrigin(request: Request): string {
  const fromEnv = process.env["NEXT_PUBLIC_SITE_URL"]?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  if (host && !host.includes("localhost") && !host.startsWith("127.0.0.1")) {
    return `${proto}://${host}`;
  }

  const vercelUrl = process.env["VERCEL_URL"];
  if (vercelUrl) return `https://${vercelUrl}`;

  return new URL(request.url).origin;
}

function isPublicOrigin(origin: string): boolean {
  try {
    const { hostname } = new URL(origin);
    return hostname !== "localhost" && hostname !== "127.0.0.1";
  } catch {
    return false;
  }
}

function canSelfHostAttachments(request: Request): boolean {
  if (hasVercelBlobStorage()) return true;
  if (process.env["VERCEL_URL"]) return true;
  if (isPublicOrigin(new URL(request.url).origin)) return true;

  const configuredOrigin = process.env["NEXT_PUBLIC_SITE_URL"]?.replace(
    /\/$/,
    "",
  );
  if (!configuredOrigin || !isPublicOrigin(configuredOrigin)) return false;

  const host = new URL(request.url).hostname;
  return host === "localhost" || host === "127.0.0.1";
}

async function publishViaMemoryRoute(
  file: File,
  request: Request,
): Promise<string> {
  const origin = getPublicOrigin(request);
  const bytes = Buffer.from(await file.arrayBuffer());
  const id = stageFile(bytes, mimeTypeForFile(file), file.name);
  scheduleRelease(id);
  return `${origin}/api/attachments/${id}`;
}

/**
 * Returns HTTPS URLs Airtable can fetch for the "Add photos/ picture" attachment field.
 * Prefers Vercel Blob on production (in-memory staging breaks across serverless instances).
 */
export async function publishFilesForAirtable(
  files: File[],
  request: Request,
): Promise<string[]> {
  if (!canSelfHostAttachments(request)) {
    throw new Error(
      "Photo uploads on localhost need a public URL. Run `npx ngrok http 3000`, " +
        "add NEXT_PUBLIC_SITE_URL=<that-url> to .env.local, restart `npm run dev`, " +
        "then submit again. On Vercel, connect a Blob store so BLOB_READ_WRITE_TOKEN is set.",
    );
  }

  if (process.env["VERCEL"] === "1" && !hasVercelBlobStorage()) {
    throw new Error(
      "Photo uploads require Vercel Blob on production. " +
        "In the Vercel dashboard → Storage → create a Blob store and link it to this project, then redeploy.",
    );
  }

  const urls: string[] = [];

  for (const file of files) {
    assertFileSize(file);

    if (hasVercelBlobStorage()) {
      try {
        urls.push(await publishViaVercelBlob(file));
        continue;
      } catch (blobErr) {
        const msg =
          blobErr instanceof Error ? blobErr.message : String(blobErr);
        throw new Error(
          `Could not upload ${file.name} to storage (${msg}). ` +
            "In Vercel → Storage, connect a Blob store to this project and redeploy.",
        );
      }
    }

    urls.push(await publishViaMemoryRoute(file, request));
  }

  return urls;
}
