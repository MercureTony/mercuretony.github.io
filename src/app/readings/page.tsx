"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { topics } from "@/data/reading-data";

export default function ReadingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredTopics = useMemo(
    () =>
      topics
        .map((topic) => ({
          ...topic,
          readings: topic.readings.filter((reading) => {
            if (!normalizedQuery) return true;

            return (
              reading.title.toLowerCase().includes(normalizedQuery) ||
              reading.author.toLowerCase().includes(normalizedQuery) ||
              reading.description.toLowerCase().includes(normalizedQuery)
            );
          }),
        }))
        .filter((topic) => topic.readings.length > 0),
    [normalizedQuery],
  );

  const resultCount = filteredTopics.reduce(
    (total, topic) => total + topic.readings.length,
    0,
  );

  return (
    <div className="mx-auto mb-32 max-w-2xl space-y-6">
      <LanguageSwitcher locale="en" englishHref="/readings" frenchHref="/fr/readings" />
      <h1 className="mb-4 text-2xl font-bold">Readings</h1>

      <p className="mb-6">
        Here&apos;s a curated list of books, articles, blogs, and other readings that have
        significantly influenced my thinking, organized by topic. These works cover
        technology, entrepreneurship, science, and personal development. You can find more
        books I&apos;ve read on my{" "}
        <a
          href="https://www.goodreads.com"
          className="text-neutral-400 underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goodreads
          <span className="sr-only"> (opens in a new tab)</span>
        </a>{" "}
        profile.
      </p>

      <aside
        aria-label="About this list"
        className="mb-6 border-l-2 border-yellow-600 bg-yellow-900/20 p-4 text-yellow-200"
      >
        <p className="mb-1 font-semibold">Work in progress</p>
        <p className="text-yellow-300/80">
          I&apos;m still adding readings and categories over time.
        </p>
      </aside>

      <div className="relative mb-8">
        <label htmlFor="reading-search" className="sr-only">
          Search readings by title, author, or description
        </label>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
          aria-hidden="true"
        />
        <input
          id="reading-search"
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search title, author, or description"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="min-h-11 w-full rounded-lg border border-neutral-800 bg-neutral-900/50 py-2 pl-10 pr-14 text-neutral-200 outline-none transition-colors duration-150 placeholder:text-neutral-500 focus:border-neutral-700 focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            className="absolute right-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md text-neutral-500 transition-colors duration-150 hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {normalizedQuery ? (
        <p className="mb-4 text-sm text-neutral-500" role="status" aria-live="polite">
          {resultCount === 1 ? "1 result" : `${resultCount} results`}
        </p>
      ) : null}

      {filteredTopics.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-neutral-400">No readings match “{searchQuery.trim()}”.</p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="mt-3 inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-neutral-200 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
          >
            Clear search
          </button>
        </div>
      ) : (
        <>
          <nav className="mb-8" aria-label="Reading topics">
            <h2 className="mb-2 text-xl font-bold">Table of Contents</h2>
            <ul className="list-inside list-disc space-y-1">
              {filteredTopics.map((topic) => (
                <li key={topic.name}>
                  <Link
                    href={`#${topic.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-neutral-400 underline-offset-4 hover:underline"
                  >
                    {topic.name} ({topic.readings.length})
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {filteredTopics.map((topic) => (
            <section
              key={topic.name}
              id={topic.name.toLowerCase().replace(/\s+/g, "-")}
              className="mb-8 scroll-mt-8"
            >
              <h2 className="mb-4 text-xl font-bold">{topic.name}</h2>
              <ul className="list-none space-y-4">
                {topic.readings.map((reading) => (
                  <li
                    key={`${reading.title}-${reading.author}`}
                    className={`mb-4 border-b border-neutral-800 pb-4 last:mb-0 last:border-b-0 ${reading.isSpecial ? "relative" : ""}`}
                  >
                    <h3
                      className={`mb-1 text-base font-semibold ${reading.isSpecial ? "relative inline-block after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-[30%] after:w-full after:bg-yellow-500/20" : ""}`}
                    >
                      {reading.url ? (
                        <a
                          href={reading.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            reading.isSpecial
                              ? "text-yellow-200 underline-offset-4 hover:text-yellow-300 hover:underline"
                              : "text-white underline-offset-4 hover:text-neutral-200 hover:underline"
                          }
                        >
                          {reading.title}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        <span className={reading.isSpecial ? "text-yellow-200" : "text-white"}>
                          {reading.title}
                        </span>
                      )}
                    </h3>
                    <p className="mb-2 text-sm text-neutral-500">
                      {reading.author} · {reading.type}
                    </p>
                    <p className="text-sm text-neutral-400">{reading.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
