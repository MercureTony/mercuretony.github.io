"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useState } from "react";

import type { ChapterMark, Citation } from "@/lib/scripture-index";
import { CANON, TOTAL_CHAPTERS, bibleUrl, bookName, chaptersBefore, formatReference } from "@/lib/scripture";

const HEIGHT = 720;
const MIN_DOT_GAP = 8;
const MIN_LABEL_GAP = 14;

interface Cluster {
  id: string;
  y: number;
  citations: Citation[];
}

// 1,189 chapters on 720 pixels: a chapter is six tenths of a pixel, so marks a
// few chapters apart share one dot and one card.
function cluster(marks: ChapterMark[]): Cluster[] {
  const clusters: Cluster[] = [];
  for (const mark of marks) {
    const y = mark.position * HEIGHT;
    const last = clusters[clusters.length - 1];
    if (last && y - last.y < MIN_DOT_GAP) {
      last.citations.push(...mark.citations);
      last.y = (last.y + y) / 2;
    } else {
      clusters.push({ id: `${mark.book}-${mark.chapter}`, y, citations: [...mark.citations] });
    }
  }
  return clusters;
}

/** Pushes labels apart so two books a few chapters apart stay readable. */
function spread(labels: { book: string; y: number }[]): { book: string; y: number }[] {
  const out = labels.map((label) => ({ ...label }));
  for (let i = 1; i < out.length; i++) {
    if (out[i].y - out[i - 1].y < MIN_LABEL_GAP) out[i].y = out[i - 1].y + MIN_LABEL_GAP;
  }
  return out;
}

const strings = {
  en: {
    cited: (n: number) => (n === 1 ? "1 citation" : `${n} citations`),
    read: "Read",
    in: "in",
  },
  fr: {
    cited: (n: number) => (n === 1 ? "1 citation" : `${n} citations`),
    read: "Lire",
    in: "dans",
  },
};

export function ScriptureLine({ marks, locale }: { marks: ChapterMark[]; locale: "en" | "fr" }) {
  const t = strings[locale];
  const cardId = useId();
  const [active, setActive] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  const clusters = useMemo(() => cluster(marks), [marks]);
  const labels = useMemo(() => {
    const firstByBook = new Map<string, number>();
    for (const c of clusters) {
      for (const citation of c.citations) {
        if (!firstByBook.has(citation.ref.book)) firstByBook.set(citation.ref.book, c.y);
      }
    }
    return spread(
      Array.from(firstByBook, ([book, y]) => ({ book, y })).sort((a, b) => a.y - b.y),
    );
  }, [clusters]);

  useEffect(() => {
    if (!pinned) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPinned(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [pinned]);

  const shown = clusters.find((c) => c.id === (pinned ?? active));
  const articleHref = (citation: Citation) =>
    `${locale === "fr" ? "/fr" : ""}/writings/${citation.article.slug}${
      citation.heading ? `#${citation.heading.id}` : ""
    }`;

  return (
    <div className="relative" style={{ height: HEIGHT }}>
      <div className="absolute left-2 top-0 h-full w-px bg-neutral-800" aria-hidden="true" />

      {CANON.map((book) => {
        const y = ((chaptersBefore.get(book.id) ?? 0) / TOTAL_CHAPTERS) * HEIGHT;
        const testament = book.id === "GEN" || book.id === "MAT";
        return (
          <span
            key={book.id}
            aria-hidden="true"
            className={`absolute left-2 h-px bg-neutral-800 ${testament ? "w-3" : "w-1.5"}`}
            style={{ top: y }}
          />
        );
      })}

      {labels.map((label) => (
        <span
          key={label.book}
          aria-hidden="true"
          className="absolute left-6 -translate-y-1/2 font-mono text-[11px] leading-none text-neutral-500"
          style={{ top: label.y }}
        >
          {bookName(label.book, locale)}
        </span>
      ))}

      <ul className="m-0 list-none p-0">
        {clusters.map((c) => {
          const size = 6 + Math.min(c.citations.length - 1, 4) * 2;
          const isActive = (pinned ?? active) === c.id;
          const label = `${Array.from(new Set(c.citations.map((x) => formatReference(x.ref, locale)))).join(", ")}: ${t.cited(c.citations.length)}`;
          return (
            <li key={c.id} className="absolute left-2" style={{ top: c.y }}>
              <button
                type="button"
                aria-label={label}
                aria-expanded={isActive}
                aria-controls={isActive ? cardId : undefined}
                onMouseEnter={() => setActive(c.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(c.id)}
                onBlur={() => setActive(null)}
                onClick={() => setPinned((current) => (current === c.id ? null : c.id))}
                className="group absolute -translate-x-1/2 -translate-y-1/2 p-3 focus-visible:outline-none"
              >
                <span
                  className={`block rounded-full transition-colors duration-150 motion-reduce:transition-none ${
                    isActive ? "bg-white" : "bg-neutral-300 group-hover:bg-white"
                  } group-focus-visible:ring-2 group-focus-visible:ring-neutral-300 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#171717]`}
                  style={{ width: size, height: size }}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {shown ? (
        // Cards near the bottom open upward so a long one stays beside the line.
        <div
          id={cardId}
          role="region"
          aria-live="polite"
          className={`absolute left-28 right-0 border-l border-neutral-800 pl-4 sm:left-32 ${
            shown.y > HEIGHT * 0.55 ? "-translate-y-full" : "-translate-y-1/2"
          }`}
          style={{ top: shown.y > HEIGHT * 0.55 ? shown.y + 12 : Math.max(shown.y, 40) }}
        >
          <ul className="space-y-3">
            {shown.citations.map((citation, i) => (
              <li key={`${citation.key}-${citation.article.slug}-${i}`} className="text-sm leading-6">
                <a
                  href={bibleUrl(citation.ref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-100 underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-400"
                >
                  {formatReference(citation.ref, locale)}
                </a>
                {citation.quote ? (
                  <span className="block text-neutral-400">&ldquo;{citation.quote}&rdquo;</span>
                ) : null}
                <Link
                  href={articleHref(citation)}
                  className="block text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
                >
                  {t.in} {citation.article.title}
                  {citation.heading ? `, ${citation.heading.text}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
