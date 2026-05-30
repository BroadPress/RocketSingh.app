"use client";

import Script from "next/script";

const BOOK_FORM_URL =
  "https://airtable.com/embed/appcaAplIBD3UYYKu/pagGjlqbGeChOCMY3/form";

export default function BookFormEmbed() {
  return (
    <>
      {/* Mobile: fill remaining screen, scroll inside iframe — avoids page white gap */}
      <div className="md:hidden h-[calc(100dvh-17rem-env(safe-area-inset-bottom))] min-h-[320px] w-full overflow-hidden">
        <iframe
          className="block h-full w-full min-w-0 border-0"
          src={BOOK_FORM_URL}
          frameBorder={0}
          scrolling="yes"
          style={{ background: "#F8F9FB", border: "none" }}
          title="Book a RocketSingh in Chennai"
        />
      </div>

      {/* Desktop: unchanged */}
      <iframe
        className="airtable-embed hidden md:block w-full h-[1333px] lg:h-[1400px]"
        src={BOOK_FORM_URL}
        frameBorder={0}
        scrolling="no"
        style={{ background: "#F8F9FB", border: "none" }}
        title="Book a RocketSingh in Chennai"
      />
      <Script
        src="https://static.airtable.com/js/embed/embed_sdk.js"
        strategy="lazyOnload"
      />
    </>
  );
}
