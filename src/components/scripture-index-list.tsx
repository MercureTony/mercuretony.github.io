import Link from "next/link";

import type { Citation } from "@/lib/scripture-index";
import { CANON, bibleUrl, bookName, formatReference } from "@/lib/scripture";

const strings = {
  en: { in: "in", heading: "Every citation, in canonical order" },
  fr: { in: "dans", heading: "Toutes les citations, dans l'ordre canonique" },
};

/** The same index as a plain list: what phones and screen readers read. */
export function ScriptureIndexList({
  citations,
  locale,
}: {
  citations: Citation[];
  locale: "en" | "fr";
}) {
  const t = strings[locale];
  const prefix = locale === "fr" ? "/fr" : "";
  const byBook = CANON.map((book) => ({
    book,
    citations: citations.filter((citation) => citation.ref.book === book.id),
  })).filter((group) => group.citations.length > 0);

  return (
    <section aria-label={t.heading} className="mt-16 border-t border-neutral-800/80">
      {byBook.map(({ book, citations: group }) => (
        <div key={book.id} className="grid gap-2 border-b border-neutral-800/80 py-6 sm:grid-cols-[8rem_1fr]">
          <h2 className="font-mono text-xs text-neutral-500 sm:pt-1">{bookName(book.id, locale)}</h2>
          <ul className="space-y-4">
            {group.map((citation, i) => (
              <li key={`${citation.key}-${citation.article.slug}-${i}`} className="text-sm leading-6">
                <a
                  href={bibleUrl(citation.ref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-200 underline decoration-neutral-700 underline-offset-4 hover:text-white hover:decoration-neutral-400"
                >
                  {formatReference(citation.ref, locale)}
                </a>
                {citation.quote ? (
                  <p className="text-neutral-400">&ldquo;{citation.quote}&rdquo;</p>
                ) : null}
                <Link
                  href={`${prefix}/writings/${citation.article.slug}${citation.heading ? `#${citation.heading.id}` : ""}`}
                  className="text-neutral-500 underline-offset-4 hover:text-neutral-300 hover:underline"
                >
                  {t.in} {citation.article.title}
                  {citation.heading ? `, ${citation.heading.text}` : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
