import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { CopyLinkButton } from "@/components/copy-link-button";
import { mdxComponents } from "@/components/MDXComponents";
import { ReadingProgress } from "@/components/reading-progress";
import { formatDateOnly } from "@/lib/date";
import { getPost, getPosts } from "@/lib/posts";

export async function generateStaticParams() {
  return getPosts("fr").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data } = getPost("fr", params.slug);

  return {
    title: `${data.title} | Anthony Uyende`,
    description: data.summary || "Un article d’Anthony Uyende",
  };
}

export default async function BlogPostFr({ params }: { params: { slug: string } }) {
  const { content, data } = getPost("fr", params.slug);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = data.readingTime || Math.max(1, Math.ceil(wordCount / 220));

  const posts = getPosts("fr");
  const currentIndex = posts.findIndex((post) => post.slug === params.slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const olderPost =
    currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      <ReadingProgress />

      <main lang="fr" className="mx-auto mb-32 max-w-2xl">
        <Link
          href="/fr/writings"
          className="group mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-200 motion-reduce:transition-none"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
          Tous les écrits
        </Link>

        <header className="mb-10 border-b border-neutral-800/80 pb-8">
          <h1 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-neutral-100 sm:text-4xl">
            {data.title}
          </h1>

          {data.summary ? (
            <p className="mt-4 text-base leading-7 text-neutral-400">{data.summary}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-600">
              <time dateTime={data.date} className="tabular-nums">
                {formatDateOnly(
                  data.date,
                  { month: "long", day: "numeric", year: "numeric" },
                  "fr-CA",
                )}
              </time>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{readingTime} min de lecture</span>
            </div>
            <CopyLinkButton locale="fr" />
          </div>
        </header>

        <article>
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        <nav
          aria-label="Autres écrits"
          className="mt-14 grid gap-3 border-t border-neutral-800/80 pt-8 sm:grid-cols-2"
        >
          {newerPost ? (
            <Link
              href={`/fr/writings/${newerPost.slug}`}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
            >
              <span className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Plus récent
              </span>
              <span className="block text-sm leading-6 text-neutral-300 group-hover:text-white">
                {newerPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {olderPost ? (
            <Link
              href={`/fr/writings/${olderPost.slug}`}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 text-right transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
            >
              <span className="mb-2 flex items-center justify-end gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600">
                Plus ancien
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="block text-sm leading-6 text-neutral-300 group-hover:text-white">
                {olderPost.title}
              </span>
            </Link>
          ) : null}
        </nav>
      </main>
    </>
  );
}
