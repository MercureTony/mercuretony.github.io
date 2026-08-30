// English paths that also have a French page under /fr. Everything else is
// English-only, so the switcher offers no French link for it and the nav keeps
// pointing at the English route.
export const TRANSLATED_ROUTES = ["/resume", "/interests", "/writings", "/readings"];

export type Locale = "en" | "fr";

export function getLocale(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Maps any pathname onto its English equivalent: /fr/writings -> /writings. */
export function stripLocale(pathname: string): string {
  if (pathname === "/fr") return "/";
  return pathname.startsWith("/fr/") ? pathname.slice("/fr".length) : pathname;
}

export function hasFrenchVersion(englishPath: string): boolean {
  return TRANSLATED_ROUTES.includes(englishPath);
}

/** Keeps the reader in their chosen language wherever a translation exists. */
export function localizedHref(englishPath: string, locale: Locale): string {
  return locale === "fr" && hasFrenchVersion(englishPath) ? `/fr${englishPath}` : englishPath;
}
