import * as React from "react";

import { bibleUrl, findReferences, type Reference } from "@/lib/scripture";

/** A verse reference inside an essay: a quiet dotted link to the passage. */
export function ScriptureRef({
  reference,
  children,
}: {
  reference: Reference;
  children: React.ReactNode;
}) {
  return (
    <a
      href={bibleUrl(reference)}
      target="_blank"
      rel="noopener noreferrer"
      title="Read the passage"
      className="underline decoration-dotted decoration-neutral-500 underline-offset-[0.2em] transition-colors duration-150 hover:decoration-neutral-200 motion-reduce:transition-none"
    >
      {children}
    </a>
  );
}

/** Wraps every "Book chapter:verse" found in the text children of an MDX node. */
export function withScriptureRefs(children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child !== "string") return child;
    const matches = findReferences(child);
    if (matches.length === 0) return child;

    const parts: React.ReactNode[] = [];
    let cursor = 0;
    matches.forEach(({ ref, index, length }, i) => {
      if (index > cursor) parts.push(child.slice(cursor, index));
      parts.push(
        <ScriptureRef key={i} reference={ref}>
          {child.slice(index, index + length)}
        </ScriptureRef>,
      );
      cursor = index + length;
    });
    if (cursor < child.length) parts.push(child.slice(cursor));
    return parts;
  });
}
