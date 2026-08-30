import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Locale } from "@/lib/i18n";

const CONTENT_DIRS: Record<Locale, string> = {
  en: "src/content/articles",
  fr: "src/content/articles-fr",
};

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

function contentDir(locale: Locale) {
  return path.join(process.cwd(), CONTENT_DIRS[locale]);
}

/** Newest first, which is the order every listing and the prev/next nav expect. */
export function getPosts(locale: Locale): PostMeta[] {
  return fs
    .readdirSync(contentDir(locale))
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const { data } = matter(
        fs.readFileSync(path.join(contentDir(locale), fileName), "utf8"),
      );

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        summary: data.summary,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(locale: Locale, slug: string) {
  const filePath = path.join(contentDir(locale), `${slug}.mdx`);
  return matter(fs.readFileSync(filePath, "utf8"));
}

/** Slugs that exist in both languages, so the switcher can offer an article link. */
export function getTranslatedSlugs(): string[] {
  const english = new Set(getPosts("en").map((post) => post.slug));
  return getPosts("fr")
    .map((post) => post.slug)
    .filter((slug) => english.has(slug))
    .sort();
}
