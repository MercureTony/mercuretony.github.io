import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CurrentlyReading } from "@/components/currently-reading";
import { HomeIntro } from "@/components/home-intro";
import { OpportunitiesSection } from "@/components/opportunities-section";
import { formatDateOnly } from "@/lib/date";

interface PostSummary {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

function getRecentPosts(): PostSummary[] {
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
        summary: data.summary,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
}

export default function Home() {
  const recentPosts = getRecentPosts();

  return (
    <main className="mx-auto w-full max-w-2xl space-y-14 pt-8 sm:pt-14">
      <HomeIntro />

      <section className="border-t border-neutral-800/80 pt-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
              Notes
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-neutral-200">
              Recent writing
            </h2>
          </div>
          <Link
            href="/writings"
            className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-200 motion-reduce:transition-none"
          >
            All writing
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="divide-y divide-neutral-800/80">
          {recentPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/writings/${post.slug}`}
                className="group -mx-3 grid gap-2 rounded-lg px-3 py-5 transition-colors duration-150 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none sm:grid-cols-[7rem_1fr]"
              >
                <time
                  dateTime={post.date}
                  className="text-sm tabular-nums text-neutral-600"
                >
                  {formatDateOnly(post.date, { month: "short", day: "numeric" })}
                </time>
                <div className="min-w-0">
                  <h3 className="font-medium text-neutral-200 transition-colors duration-150 group-hover:text-white motion-reduce:transition-none">
                    {post.title}
                  </h3>
                  {post.summary ? (
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-500">
                      {post.summary}
                    </p>
                  ) : null}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 border-t border-neutral-800/80 pt-8 sm:grid-cols-[0.9fr_1.1fr]">
        <CurrentlyReading />
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-5">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
            Current focus
          </p>
          <h2 className="text-base font-medium text-neutral-200">Coalesc</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Building software that turns messy client documents into complete,
            review-ready accounting work.
          </p>
          <a
            href="https://coalesc.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors duration-150 hover:text-white hover:decoration-neutral-400 motion-reduce:transition-none"
          >
            Visit Coalesc
            <span className="sr-only">, opens in a new tab</span>
          </a>
        </div>
      </section>

      <OpportunitiesSection />
    </main>
  );
}
