import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as React from "react";

import { mdxComponents } from "@/components/MDXComponents";
import { ScriptureRef } from "@/components/scripture-ref";
import { formatDateOnly } from "@/lib/date";
import { type Reference, findReferences, formatReference, referenceKey } from "@/lib/scripture";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

function getPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), "src/content/articles");

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Every verse the essay cites, once each, in order of first appearance. */
function scriptureIn(content: string): Reference[] {
  const seen = new Set<string>();
  return findReferences(content)
    .map((match) => match.ref)
    .filter((ref) => {
      const key = referenceKey(ref);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join(process.cwd(), "src/content/articles", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Anthony Uyende`,
    description: data.summary || "An article by Anthony Uyende",
  };
}

const neighbourLink =
  "font-serif text-[1.0625rem] leading-[1.5] text-neutral-200 underline decoration-neutral-600 decoration-[0.06em] underline-offset-[0.2em] transition-colors duration-150 hover:decoration-neutral-300 motion-reduce:transition-none";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/content/articles", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = data.readingTime || Math.max(1, Math.ceil(wordCount / 220));
  const verses = scriptureIn(content);

  const posts = getPosts();
  const currentIndex = posts.findIndex((post) => post.slug === params.slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const olderPost =
    currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-[37rem] pb-[calc(7rem+env(safe-area-inset-bottom))]">
      <Link
        href="/writings"
        className="mb-10 inline-flex min-h-11 items-center text-[0.8125rem] text-neutral-400 underline-offset-4 transition-colors duration-150 hover:text-neutral-200 hover:underline motion-reduce:transition-none"
      >
        All writing
      </Link>

      <div className="essay">
        <header className="mb-12 sm:mb-14">
          <h1 className="text-balance text-[2.125rem] font-medium leading-[1.12] tracking-[-0.015em] text-neutral-100 sm:text-[2.75rem] sm:leading-[1.08]">
            {data.title}
          </h1>

          {data.summary ? (
            <p className="mt-4 text-pretty text-[1.0625rem] leading-[1.5] text-neutral-400">
              {data.summary}
            </p>
          ) : null}

          <p className="mt-5 font-sans text-[0.8125rem] tabular-nums text-neutral-400">
            <time dateTime={data.date}>
              {formatDateOnly(data.date, { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span aria-hidden="true"> · </span>
            {readingTime} min
          </p>
        </header>

        <article>
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>

      {/* The essay ends on its own last line; then air, then a signature. */}
      <footer className="mt-20 space-y-3 text-[0.8125rem] leading-6 text-neutral-400">
        <p>
          Anthony Uyende{data.place ? `, ${data.place}` : ""},{" "}
          {formatDateOnly(data.date, { month: "long", year: "numeric" })}.
        </p>
        {verses.length ? (
          <p>
            Scripture in this essay:{" "}
            {verses.map((ref, i) => (
              <React.Fragment key={referenceKey(ref)}>
                {i > 0 ? ", " : ""}
                <ScriptureRef reference={ref}>{formatReference(ref)}</ScriptureRef>
              </React.Fragment>
            ))}
            .{" "}
            <Link
              href="/scripture"
              className="underline decoration-neutral-700 underline-offset-[0.2em] transition-colors duration-150 hover:decoration-neutral-400 motion-reduce:transition-none"
            >
              Where else it shows up.
            </Link>
          </p>
        ) : null}
      </footer>

      <nav aria-label="More writing" className="mt-16 space-y-5">
        {newerPost ? (
          <p className="grid gap-1 sm:grid-cols-[4rem_1fr]">
            <span className="text-[0.8125rem] leading-6 text-neutral-400">Newer</span>
            <Link href={`/writings/${newerPost.slug}`} className={neighbourLink}>
              {newerPost.title}
            </Link>
          </p>
        ) : null}

        {olderPost ? (
          <p className="grid gap-1 sm:grid-cols-[4rem_1fr]">
            <span className="text-[0.8125rem] leading-6 text-neutral-400">Older</span>
            <Link href={`/writings/${olderPost.slug}`} className={neighbourLink}>
              {olderPost.title}
            </Link>
          </p>
        ) : null}
      </nav>
    </main>
  );
}
