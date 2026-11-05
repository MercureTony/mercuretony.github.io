import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as React from "react";

import { mdxComponents } from "@/components/MDXComponents";
import { ScriptureRef } from "@/components/scripture-ref";
import { formatDateOnly } from "@/lib/date";
import { getEssay, getEssays } from "@/lib/essays";
import { type Reference, findReferences, formatReference, referenceKey } from "@/lib/scripture";

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
  return getEssays().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getEssay(slug);
  const description = meta.summary || "An essay by Anthony Uyende";

  // The share image comes from opengraph-image.tsx beside this file.
  return {
    title: `${meta.title} | Anthony Uyende`,
    description,
    openGraph: {
      type: "article",
      title: meta.title,
      description,
      url: `/writings/${slug}`,
      siteName: "Anthony Uyende",
      authors: ["Anthony Uyende"],
      publishedTime: meta.date,
    },
    twitter: { card: "summary_large_image", title: meta.title, description },
  };
}

const neighbourLink =
  "font-serif text-[1.0625rem] leading-[1.5] text-neutral-200 underline decoration-neutral-600 decoration-[0.06em] underline-offset-[0.2em] transition-colors duration-150 hover:decoration-neutral-300 motion-reduce:transition-none";

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const { content, meta } = getEssay(slug);
  const verses = scriptureIn(content);

  const posts = getEssays();
  const currentIndex = posts.findIndex((post) => post.slug === slug);
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
            {meta.title}
          </h1>

          {meta.summary ? (
            <p className="mt-4 text-pretty text-[1.0625rem] leading-[1.5] text-neutral-400">
              {meta.summary}
            </p>
          ) : null}

          <p className="mt-5 font-sans text-[0.8125rem] tabular-nums text-neutral-400">
            <time dateTime={meta.date}>
              {formatDateOnly(meta.date, { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span aria-hidden="true"> · </span>
            {meta.readingTime} min
          </p>
        </header>

        <article>
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>

      {/* The essay ends on its own last line; then air, then a signature. */}
      <footer className="mt-20 space-y-3 text-[0.8125rem] leading-6 text-neutral-400">
        <p>
          Anthony Uyende{meta.place ? `, ${meta.place}` : ""},{" "}
          {formatDateOnly(meta.date, { month: "long", year: "numeric" })}.
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
