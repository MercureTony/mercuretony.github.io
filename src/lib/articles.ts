import fs from "fs";
import path from "path";
import { routing } from "@/i18n/routing";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

function localeDir(locale: string): string {
  const safe = routing.locales.includes(locale as (typeof routing.locales)[number])
    ? locale
    : routing.defaultLocale;
  return path.join(ARTICLES_DIR, safe);
}

// The English directory defines the canonical set of article slugs.
export function getArticleSlugs(): string[] {
  const dir = path.join(ARTICLES_DIR, routing.defaultLocale);
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}

// Read an article for a locale, falling back to the default locale when a
// translation does not exist yet.
export function readArticle(
  slug: string,
  locale: string
): { content: string; locale: string } {
  const localizedPath = path.join(localeDir(locale), `${slug}.mdx`);
  if (fs.existsSync(localizedPath)) {
    return { content: fs.readFileSync(localizedPath, "utf8"), locale };
  }
  const fallbackPath = path.join(
    ARTICLES_DIR,
    routing.defaultLocale,
    `${slug}.mdx`
  );
  return {
    content: fs.readFileSync(fallbackPath, "utf8"),
    locale: routing.defaultLocale,
  };
}
