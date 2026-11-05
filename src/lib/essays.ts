import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES = path.join(process.cwd(), "src/content/articles");
const PUBLIC = path.join(process.cwd(), "public");

export interface Photo {
  /** Public path, e.g. /writings/storms/cover.jpg */
  src: string;
  alt: string;
  caption?: string;
  /** Which part to keep when the photo is cropped, as CSS object-position: "top", "30% 20%"… */
  focus: string;
  width: number;
  height: number;
}

export interface EssayMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  place?: string;
  readingTime: number;
  photo?: Photo;
}

/**
 * Pixel size of a JPEG or PNG under /public, read from its header, so pages
 * can reserve the right space before the photo arrives. Throws on a missing
 * or unreadable file: a broken photo path should fail the build, not ship.
 */
export function photoSize(src: string): { width: number; height: number } {
  const file = path.join(PUBLIC, src);
  const buf = fs.readFileSync(file);

  // PNG: width and height sit in the IHDR chunk.
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk the markers to the first start-of-frame.
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      const length = buf.readUInt16BE(i + 2);
      const isFrame =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isFrame) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      i += 2 + length;
    }
  }

  throw new Error(
    `${src}: essay photos must be JPEG or PNG (share cards can't use WebP). Run \`pnpm photos\` to prepare them.`,
  );
}

function readPhoto(data: Record<string, unknown>, slug: string): Photo | undefined {
  if (typeof data.photo !== "string" || !data.photo) return undefined;
  if (typeof data.photoAlt !== "string" || !data.photoAlt.trim()) {
    throw new Error(`${slug}.mdx: a photo needs photoAlt, a sentence describing it.`);
  }
  return {
    src: data.photo,
    alt: data.photoAlt,
    caption: typeof data.photoCaption === "string" ? data.photoCaption : undefined,
    focus: typeof data.photoFocus === "string" ? data.photoFocus : "center",
    ...photoSize(data.photo),
  };
}

export function getEssay(slug: string): { meta: EssayMeta; content: string } {
  const source = fs.readFileSync(path.join(ARTICLES, `${slug}.mdx`), "utf8");
  const { content, data } = matter(source);
  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    content,
    meta: {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      place: data.place,
      readingTime: data.readingTime || Math.max(1, Math.ceil(words / 220)),
      photo: readPhoto(data, slug),
    },
  };
}

/** Every essay, newest first. */
export function getEssays(): EssayMeta[] {
  return fs
    .readdirSync(ARTICLES)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => getEssay(name.replace(/\.mdx$/, "")).meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}
