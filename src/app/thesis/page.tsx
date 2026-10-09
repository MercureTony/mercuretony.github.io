import type { Metadata } from "next";

import { ThesisScrubber } from "@/components/thesis-scrubber";
import { CURRENT_THESIS, THESIS_HISTORY } from "@/data/thesis-history";
import { formatDateOnly } from "@/lib/date";
import { diffWords, survivingWords, words } from "@/lib/word-diff";

export const metadata: Metadata = {
  title: "Thesis | Anthony Uyende",
  description:
    "Every definition of Coalesc since December 2024, word for word, and why each one replaced the last.",
};

function monthsBetween(from: string, to: string): number {
  const [fy, fm] = from.split("-").map(Number);
  const [ty, tm] = to.split("-").map(Number);
  return (ty - fy) * 12 + (tm - fm);
}

const tokenClass = {
  same: "text-neutral-300",
  added: "text-neutral-100",
  removed: "text-neutral-600 line-through decoration-neutral-700",
} as const;

export default function ThesisPage() {
  const first = THESIS_HISTORY[0];
  const months = monthsBetween(first.date, CURRENT_THESIS.date);
  const survivors = survivingWords(THESIS_HISTORY.map((version) => version.hero));

  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Thesis, versioned
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          What I say Coalesc is
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Every definition of Coalesc that has lived on this site since{" "}
          {formatDateOnly(first.date, { month: "long", year: "numeric" })}, word for word,
          pulled from the site&apos;s own history. Drag back to watch the words change.
        </p>
      </header>

      <ThesisScrubber />

      <section aria-label="Every version" className="mt-16 border-t border-neutral-800/80">
        {THESIS_HISTORY.slice()
          .reverse()
          .map((version) => {
            const previous = THESIS_HISTORY[version.version - 2];
            const tokens = previous ? diffWords(previous.hero, version.hero) : null;

            return (
              <article
                key={version.version}
                id={`v${version.version}`}
                className="scroll-mt-8 border-b border-neutral-800/80 py-8"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs text-neutral-500">
                  <a href={`#v${version.version}`} className="text-neutral-300">
                    v{version.version}
                  </a>
                  <time dateTime={version.date} className="tabular-nums">
                    {formatDateOnly(version.date, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  {version.domain ? <span>{version.domain}</span> : null}
                  <span className="tabular-nums">{words(version.hero).length} words</span>
                </div>

                <p className="mt-3 text-[1.02rem] leading-8">
                  {tokens
                    ? tokens.map((token, i) => (
                        <span key={i} className={tokenClass[token.kind]}>
                          {token.text}{" "}
                        </span>
                      ))
                    : version.hero}
                </p>

                {version.note ? (
                  <p className="mt-4 border-l-2 border-neutral-800 pl-4 text-sm leading-6 text-neutral-400">
                    {version.note}
                  </p>
                ) : null}
              </article>
            );
          })}
      </section>

      <footer className="mt-8 space-y-1 font-mono text-xs leading-6 text-neutral-500">
        <p>
          {THESIS_HISTORY.length} versions · {months} months · {survivors.length} words survived
          every version
        </p>
        {survivors.length ? <p className="text-neutral-600">{survivors.join(" · ")}</p> : null}
        <p className="text-neutral-600">
          Struck words left with that version; bright words arrived with it.
        </p>
      </footer>
    </main>
  );
}
