import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { CopyLinkButton } from "@/components/copy-link-button";
import { mdxComponents } from "@/components/MDXComponents";
import { ReadingProgress } from "@/components/reading-progress";
import { formatDateOnly } from "@/lib/date";

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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/content/articles", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = data.readingTime || Math.max(1, Math.ceil(wordCount / 220));

  const posts = getPosts();
  const currentIndex = posts.findIndex((post) => post.slug === params.slug);
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const olderPost =
    currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <>
      <ReadingProgress />

      <main className="mx-auto mb-32 max-w-2xl">
        <Link
          href="/writings"
          className="mb-8 inline-flex min-h-11 items-center text-sm text-neutral-500 underline-offset-4 transition-colors duration-150 hover:text-neutral-200 hover:underline motion-reduce:transition-none"
        >
          All writing
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
                {formatDateOnly(data.date, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{readingTime} min read</span>
            </div>
            <CopyLinkButton />
          </div>
        </header>

        <article>
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        <nav
          aria-label="More writing"
          className="mt-14 space-y-3 border-t border-neutral-800/80 pt-8 text-sm leading-6"
        >
          {newerPost ? (
            <p className="grid gap-1 sm:grid-cols-[4rem_1fr]">
              <span className="text-neutral-600">Newer</span>
              <Link
                href={`/writings/${newerPost.slug}`}
                className="text-neutral-300 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline motion-reduce:transition-none"
              >
                {newerPost.title}
              </Link>
            </p>
          ) : null}

          {olderPost ? (
            <p className="grid gap-1 sm:grid-cols-[4rem_1fr]">
              <span className="text-neutral-600">Older</span>
              <Link
                href={`/writings/${olderPost.slug}`}
                className="text-neutral-300 underline-offset-4 transition-colors duration-150 hover:text-white hover:underline motion-reduce:transition-none"
              >
                {olderPost.title}
              </Link>
            </p>
          ) : null}
        </nav>
      </main>
    </>
  );
}
