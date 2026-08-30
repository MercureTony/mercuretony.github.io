// English paths that also have a French page under /fr. Everything else is
// English-only, so the switcher offers no French link for it and the nav keeps
// pointing at the English route.
export const TRANSLATED_ROUTES = ["/resume", "/interests", "/writings", "/readings"];

const ARTICLE_PATH = /^\/writings\/([^/]+)$/;

export type Locale = "en" | "fr";

export function getLocale(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Maps any pathname onto its English equivalent: /fr/writings -> /writings. */
export function stripLocale(pathname: string): string {
  if (pathname === "/fr") return "/";
  return pathname.startsWith("/fr/") ? pathname.slice("/fr".length) : pathname;
}

/**
 * Articles are translated one at a time, so which ones have a French version is
 * read off the content directory at build time and handed down from the layout
 * rather than hard-coded here.
 */
export function hasFrenchVersion(englishPath: string, translatedArticleSlugs: string[] = []) {
  if (TRANSLATED_ROUTES.includes(englishPath)) return true;

  const article = englishPath.match(ARTICLE_PATH);
  return article ? translatedArticleSlugs.includes(article[1]) : false;
}

/** Keeps the reader in their chosen language wherever a translation exists. */
export function localizedHref(
  englishPath: string,
  locale: Locale,
  translatedArticleSlugs: string[] = [],
): string {
  return locale === "fr" && hasFrenchVersion(englishPath, translatedArticleSlugs)
    ? `/fr${englishPath}`
    : englishPath;
}
