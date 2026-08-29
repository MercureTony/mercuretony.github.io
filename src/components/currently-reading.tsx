import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { reading2025 } from "@/data/challenges/2025/reading";

export function CurrentlyReading() {
  const currentBook = reading2025.find((book) => book.status === "reading");

  if (!currentBook) return null;

  return (
    <section className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-5">
      <div className="mb-3 flex items-center gap-2 text-neutral-600">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        <p className="text-xs font-medium uppercase tracking-[0.16em]">Reading</p>
      </div>

      <a
        href={currentBook.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717]"
      >
        <span className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium leading-6 text-neutral-200 transition-colors duration-150 group-hover:text-white motion-reduce:transition-none">
              {currentBook.title}
            </span>
            <span className="mt-1 block text-sm text-neutral-500">
              {currentBook.author}
            </span>
          </span>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-300 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
        </span>
        <span className="sr-only">Opens in a new tab</span>
      </a>

      <Link
        href="/challenges/2025/reading"
        className="mt-4 inline-flex min-h-11 items-center text-sm text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
      >
        Reading history
      </Link>
    </section>
  );
}
