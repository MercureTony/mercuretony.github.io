export type DiffToken = {
  text: string;
  kind: "same" | "added" | "removed";
};

/** Words compare equal regardless of case and surrounding punctuation. */
export function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "")
    .replace(/'/g, "'");
}

export function words(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

/** Word-level diff by longest common subsequence. Fine for paragraphs. */
export function diffWords(before: string, after: string): DiffToken[] {
  const a = words(before);
  const b = words(after);
  const an = a.map(normalizeWord);
  const bn = b.map(normalizeWord);

  const table: number[][] = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      table[i][j] =
        an[i] === bn[j]
          ? table[i + 1][j + 1] + 1
          : Math.max(table[i + 1][j], table[i][j + 1]);
    }
  }

  const tokens: DiffToken[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (an[i] === bn[j]) {
      tokens.push({ text: b[j], kind: "same" });
      i++;
      j++;
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      tokens.push({ text: a[i], kind: "removed" });
      i++;
    } else {
      tokens.push({ text: b[j], kind: "added" });
      j++;
    }
  }
  while (i < a.length) tokens.push({ text: a[i++], kind: "removed" });
  while (j < b.length) tokens.push({ text: b[j++], kind: "added" });
  return tokens;
}

/** Words present in every one of the given texts, in the order of the last. */
export function survivingWords(texts: string[]): string[] {
  if (texts.length === 0) return [];
  const sets = texts.map((text) => new Set(words(text).map(normalizeWord)));
  const seen = new Set<string>();
  return words(texts[texts.length - 1]).filter((word) => {
    const key = normalizeWord(word);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return sets.every((set) => set.has(key));
  });
}
