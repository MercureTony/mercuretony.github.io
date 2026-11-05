import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { formatDateOnly } from "@/lib/date";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

export default function WritingsPage() {
  const postsDirectory = path.join(process.cwd(), "src/content/articles");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: BlogPost[] = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        summary: data.summary,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Essays & notes
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          Writings
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Ideas I&apos;m working through in public. Mostly startups, technology, faith,
          systems, and the occasional attempt to make sense of life.
        </p>
      </header>

      <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
        {posts.map((post, index) => (
          <article key={post.slug}>
            <Link
              href={`/writings/${post.slug}`}
              className="group -mx-3 grid gap-3 rounded-lg px-3 py-6 transition-colors duration-150 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none sm:grid-cols-[8rem_1fr]"
            >
              <div>
                <time
                  dateTime={post.date}
                  className="text-sm tabular-nums text-neutral-600"
                >
                  {formatDateOnly(post.date, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {index === 0 ? (
                  <span className="mt-1 block text-xs text-neutral-600">Latest</span>
                ) : null}
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-medium leading-7 text-neutral-200 transition-colors duration-150 group-hover:text-white motion-reduce:transition-none">
                  {post.title}
                </h2>
                {post.summary ? (
                  <p className="mt-2 text-sm leading-6 text-neutral-500">{post.summary}</p>
                ) : null}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
