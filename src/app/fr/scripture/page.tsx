import type { Metadata } from "next";

import { ScriptureIndexList } from "@/components/scripture-index-list";
import { ScriptureLine } from "@/components/scripture-line";
import { buildScriptureIndex, groupByChapter } from "@/lib/scripture-index";

export const metadata: Metadata = {
  title: "Écritures | Anthony Uyende",
  description:
    "Chaque verset sur lequel je me suis appuyé dans mes textes, placé sur une seule ligne qui est toute la Bible.",
};

export default function ScripturePageFr() {
  const citations = buildScriptureIndex();
  const marks = groupByChapter(citations);
  const books = new Set(citations.map((citation) => citation.ref.book)).size;
  const essays = new Set(citations.map((citation) => citation.article.slug)).size;

  return (
    <main lang="fr" className="mx-auto mb-32 max-w-2xl">
      <header className="mb-12 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Concordance
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          Écritures
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Chaque verset sur lequel je me suis appuyé dans mes textes, placé sur une seule ligne
          qui est toute la Bible, la Genèse en haut et l&apos;Apocalypse en bas. La ligne est
          encore presque vide. Elle se remplit à mesure que j&apos;écris.
        </p>
        <p className="font-mono text-xs text-neutral-500">
          {citations.length} citations · {books} livres · {essays} textes
        </p>
      </header>

      <ScriptureLine marks={marks} locale="fr" />

      <ScriptureIndexList citations={citations} locale="fr" />
    </main>
  );
}
