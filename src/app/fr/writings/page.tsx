import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { formatDateOnly } from "@/lib/date";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

export default function WritingsPageFr() {
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
    <main lang="fr" className="mx-auto mb-32 max-w-2xl">
      <LanguageSwitcher locale="fr" englishHref="/writings" frenchHref="/fr/writings" />

      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Essais et notes
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          Écrits
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Des idées que j’explore en public. Surtout les startups, la technologie, la foi,
          les systèmes et, parfois, une tentative de mieux comprendre la vie.
        </p>
        <p className="text-sm leading-6 text-neutral-500">
          L’interface est disponible en français. Les articles existants restent dans leur
          langue de publication jusqu’à ce qu’une version française soit ajoutée.
        </p>
      </header>

      <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
        {posts.map((post, index) => (
          <article key={post.slug}>
            <Link
              href={`/writings/${post.slug}`}
              hrefLang="en"
              className="group -mx-3 grid gap-3 rounded-lg px-3 py-6 transition-colors duration-150 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:grid-cols-[8rem_1fr]"
            >
              <div>
                <time
                  dateTime={post.date}
                  className="text-sm tabular-nums text-neutral-600"
                >
                  {formatDateOnly(
                    post.date,
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    },
                    "fr-CA",
                  )}
                </time>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {index === 0 ? (
                    <span className="rounded-full border border-neutral-800 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
                      Plus récent
                    </span>
                  ) : null}
                  <span className="rounded-full border border-neutral-800 px-2 py-0.5 text-[11px] font-medium text-neutral-600">
                    EN
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h2 lang="en" className="text-lg font-medium leading-7 text-neutral-200 transition-colors duration-150 group-hover:text-white">
                    {post.title}
                  </h2>
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 text-neutral-700 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-neutral-400"
                    aria-hidden="true"
                  />
                </div>
                {post.summary ? (
                  <p lang="en" className="mt-2 text-sm leading-6 text-neutral-500">
                    {post.summary}
                  </p>
                ) : null}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
