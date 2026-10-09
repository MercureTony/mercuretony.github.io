// Builds the concordance at build time by reading the articles, so a new
// essay that writes "Psalm 23:1" gets its dot on the next deploy. Server only.
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { findReferences, position, referenceKey, type Reference } from "./scripture";
import { slugify } from "./slug";

export interface Citation {
  ref: Reference;
  key: string;
  article: { slug: string; title: string; date: string };
  heading?: { text: string; id: string };
  /** The verse as the essay quotes it, or the sentence around the reference. */
  quote?: string;
}

/** One dot on the line: every citation of one chapter. */
export interface ChapterMark {
  book: string;
  chapter: number;
  position: number;
  citations: Citation[];
}

const ARTICLES_DIR = path.join(process.cwd(), "src/content/articles");

function stripMarkup(text: string): string {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** "> quote" and the bare "> " lines inside a blockquote, with the marker gone. */
function unquote(line: string): string {
  return line.replace(/^\s*>\s?/, "");
}

/** Paragraphs, with blockquotes kept whole across their "> " lines. */
function blocks(markdown: string): { text: string; heading?: { text: string; id: string } }[] {
  const out: { text: string; heading?: { text: string; id: string } }[] = [];
  let heading: { text: string; id: string } | undefined;
  let current: string[] = [];

  const flush = () => {
    if (current.length) out.push({ text: stripMarkup(current.join(" ")), heading });
    current = [];
  };

  for (const line of markdown.split("\n")) {
    const title = line.match(/^#{2,3}\s+(.+)$/);
    if (title) {
      flush();
      const text = stripMarkup(title[1]);
      heading = { text, id: slugify(text) };
      continue;
    }
    if (line.trim() === "") {
      flush();
      continue;
    }
    current.push(unquote(line));
  }
  flush();
  return out;
}

function nearestQuote(text: string, at: number): string | undefined {
  let best: { quote: string; distance: number } | undefined;
  // Straight quotes, curly quotes, and the « guillemets » the French-leaning essays use.
  for (const match of Array.from(text.matchAll(/[“"«]\s*([^“”"«»]{12,}?)\s*[”"»]/g))) {
    if (match.index === undefined) continue;
    const start = match.index;
    const end = start + match[0].length;
    const distance = at < start ? start - at : at > end ? at - end : 0;
    if (!best || distance < best.distance) best = { quote: match[1].trim(), distance };
  }
  if (best && best.distance < 400) return best.quote;

  const sentences = text.split(/(?<=[.!?])\s+/);
  let offset = 0;
  for (const sentence of sentences) {
    if (at >= offset && at <= offset + sentence.length) {
      // The sentence is the quote here, so the "(Matthew 26:67-68)" inside it is noise.
      const clean = sentence.replace(/\s*\([^()]*\d+:\d+[^()]*\)/g, "").trim();
      return clean.length > 240 ? `${clean.slice(0, 237).trimEnd()}…` : clean;
    }
    offset += sentence.length + 1;
  }
  return undefined;
}

export function buildScriptureIndex(): Citation[] {
  const citations: Citation[] = [];

  for (const fileName of fs.readdirSync(ARTICLES_DIR)) {
    if (!fileName.endsWith(".mdx")) continue;
    const { content, data } = matter(fs.readFileSync(path.join(ARTICLES_DIR, fileName), "utf8"));
    const article = { slug: fileName.replace(/\.mdx$/, ""), title: data.title, date: data.date };

    for (const block of blocks(content)) {
      for (const { ref, index } of findReferences(block.text)) {
        citations.push({
          ref,
          key: referenceKey(ref),
          article,
          heading: block.heading,
          quote: nearestQuote(block.text, index),
        });
      }
    }
  }

  return citations.sort((a, b) => position(a.ref) - position(b.ref));
}

export function groupByChapter(citations: Citation[]): ChapterMark[] {
  const marks = new Map<string, ChapterMark>();
  for (const citation of citations) {
    const id = `${citation.ref.book}.${citation.ref.chapter}`;
    const mark = marks.get(id) ?? {
      book: citation.ref.book,
      chapter: citation.ref.chapter,
      position: position({ ...citation.ref, verse: 1 }),
      citations: [],
    };
    mark.citations.push(citation);
    marks.set(id, mark);
  }
  return Array.from(marks.values()).sort((a, b) => a.position - b.position);
}
