import type { Metadata } from "next";

import { ScriptureIndexList } from "@/components/scripture-index-list";
import { ScriptureLine } from "@/components/scripture-line";
import { buildScriptureIndex, groupByChapter } from "@/lib/scripture-index";

export const metadata: Metadata = {
  title: "Scripture | Anthony Uyende",
  description:
    "Every verse I have leaned on in my writing, placed on a single line that is the whole Bible.",
};

export default function ScripturePage() {
  const citations = buildScriptureIndex();
  const marks = groupByChapter(citations);
  const books = new Set(citations.map((citation) => citation.ref.book)).size;
  const essays = new Set(citations.map((citation) => citation.article.slug)).size;

  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-12 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Concordance
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          Scripture
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Every verse I have leaned on in my writing, placed on one line that is the whole
          Bible, Genesis at the top and Revelation at the bottom. Most of the line is still
          bare. It fills in as I write.
        </p>
        <p className="font-mono text-xs text-neutral-500">
          {citations.length} citations · {books} books · {essays} essays
        </p>
      </header>

      <ScriptureLine marks={marks} locale="en" />

      <ScriptureIndexList citations={citations} locale="en" />
    </main>
  );
}
