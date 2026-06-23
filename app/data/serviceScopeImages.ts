/** Scope card images live at /public/services/scope/{slug}/1.jpg, 2.jpg, 3.jpg */

export type ScopeImageSet = {
  assessment: string;
  delivery: string;
  qualityCheck: string;
};

const scopeBase = (slug: string, file: string) => `/services/scope/${slug}/${file}`;

export function getScopeImages(slug: string): ScopeImageSet {
  return {
    assessment: scopeBase(slug, "1.jpg"),
    delivery: scopeBase(slug, "2.jpg"),
    qualityCheck: scopeBase(slug, "3.jpg"),
  };
}
