// The essays' frontmatter, read at build time. Server only.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { ArticleMeta } from "@/data/moments";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

/** Newest first. Dates are the frontmatter's YYYY-MM-DD strings. */
export function getArticles(): ArticleMeta[] {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const { data } = matter(fs.readFileSync(path.join(ARTICLES_DIR, fileName), "utf8"));
      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: String(data.title),
        date: String(data.date),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
