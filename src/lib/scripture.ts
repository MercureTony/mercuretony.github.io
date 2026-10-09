// The Protestant canon: 66 books, 1,189 chapters. `id` is the USFM code that
// bible.com uses in its URLs. Names and aliases are what the articles might
// write; matching is accent-insensitive and case-insensitive.

export interface Book {
  id: string;
  en: string;
  fr: string;
  chapters: number;
  aliases?: string[];
}

export const CANON: Book[] = [
  { id: "GEN", en: "Genesis", fr: "Genèse", chapters: 50 },
  { id: "EXO", en: "Exodus", fr: "Exode", chapters: 40 },
  { id: "LEV", en: "Leviticus", fr: "Lévitique", chapters: 27 },
  { id: "NUM", en: "Numbers", fr: "Nombres", chapters: 36 },
  { id: "DEU", en: "Deuteronomy", fr: "Deutéronome", chapters: 34 },
  { id: "JOS", en: "Joshua", fr: "Josué", chapters: 24 },
  { id: "JDG", en: "Judges", fr: "Juges", chapters: 21 },
  { id: "RUT", en: "Ruth", fr: "Ruth", chapters: 4 },
  { id: "1SA", en: "1 Samuel", fr: "1 Samuel", chapters: 31 },
  { id: "2SA", en: "2 Samuel", fr: "2 Samuel", chapters: 24 },
  { id: "1KI", en: "1 Kings", fr: "1 Rois", chapters: 22 },
  { id: "2KI", en: "2 Kings", fr: "2 Rois", chapters: 25 },
  { id: "1CH", en: "1 Chronicles", fr: "1 Chroniques", chapters: 29 },
  { id: "2CH", en: "2 Chronicles", fr: "2 Chroniques", chapters: 36 },
  { id: "EZR", en: "Ezra", fr: "Esdras", chapters: 10 },
  { id: "NEH", en: "Nehemiah", fr: "Néhémie", chapters: 13 },
  { id: "EST", en: "Esther", fr: "Esther", chapters: 10 },
  { id: "JOB", en: "Job", fr: "Job", chapters: 42 },
  { id: "PSA", en: "Psalms", fr: "Psaumes", chapters: 150, aliases: ["Psalm", "Psaume"] },
  { id: "PRO", en: "Proverbs", fr: "Proverbes", chapters: 31 },
  { id: "ECC", en: "Ecclesiastes", fr: "Ecclésiaste", chapters: 12 },
  {
    id: "SNG",
    en: "Song of Songs",
    fr: "Cantique des cantiques",
    chapters: 8,
    aliases: ["Song of Solomon", "Cantique"],
  },
  { id: "ISA", en: "Isaiah", fr: "Ésaïe", chapters: 66, aliases: ["Isaïe"] },
  { id: "JER", en: "Jeremiah", fr: "Jérémie", chapters: 52 },
  { id: "LAM", en: "Lamentations", fr: "Lamentations", chapters: 5 },
  { id: "EZK", en: "Ezekiel", fr: "Ézéchiel", chapters: 48 },
  { id: "DAN", en: "Daniel", fr: "Daniel", chapters: 12 },
  { id: "HOS", en: "Hosea", fr: "Osée", chapters: 14 },
  { id: "JOL", en: "Joel", fr: "Joël", chapters: 3 },
  { id: "AMO", en: "Amos", fr: "Amos", chapters: 9 },
  { id: "OBA", en: "Obadiah", fr: "Abdias", chapters: 1 },
  { id: "JON", en: "Jonah", fr: "Jonas", chapters: 4 },
  { id: "MIC", en: "Micah", fr: "Michée", chapters: 7 },
  { id: "NAM", en: "Nahum", fr: "Nahum", chapters: 3 },
  { id: "HAB", en: "Habakkuk", fr: "Habacuc", chapters: 3 },
  { id: "ZEP", en: "Zephaniah", fr: "Sophonie", chapters: 3 },
  { id: "HAG", en: "Haggai", fr: "Aggée", chapters: 2 },
  { id: "ZEC", en: "Zechariah", fr: "Zacharie", chapters: 14 },
  { id: "MAL", en: "Malachi", fr: "Malachie", chapters: 4 },
  { id: "MAT", en: "Matthew", fr: "Matthieu", chapters: 28 },
  { id: "MRK", en: "Mark", fr: "Marc", chapters: 16 },
  { id: "LUK", en: "Luke", fr: "Luc", chapters: 24 },
  { id: "JHN", en: "John", fr: "Jean", chapters: 21 },
  { id: "ACT", en: "Acts", fr: "Actes", chapters: 28 },
  { id: "ROM", en: "Romans", fr: "Romains", chapters: 16 },
  { id: "1CO", en: "1 Corinthians", fr: "1 Corinthiens", chapters: 16 },
  { id: "2CO", en: "2 Corinthians", fr: "2 Corinthiens", chapters: 13 },
  { id: "GAL", en: "Galatians", fr: "Galates", chapters: 6 },
  { id: "EPH", en: "Ephesians", fr: "Éphésiens", chapters: 6 },
  { id: "PHP", en: "Philippians", fr: "Philippiens", chapters: 4 },
  { id: "COL", en: "Colossians", fr: "Colossiens", chapters: 4 },
  { id: "1TH", en: "1 Thessalonians", fr: "1 Thessaloniciens", chapters: 5 },
  { id: "2TH", en: "2 Thessalonians", fr: "2 Thessaloniciens", chapters: 3 },
  { id: "1TI", en: "1 Timothy", fr: "1 Timothée", chapters: 6 },
  { id: "2TI", en: "2 Timothy", fr: "2 Timothée", chapters: 4 },
  { id: "TIT", en: "Titus", fr: "Tite", chapters: 3 },
  { id: "PHM", en: "Philemon", fr: "Philémon", chapters: 1 },
  { id: "HEB", en: "Hebrews", fr: "Hébreux", chapters: 13 },
  { id: "JAS", en: "James", fr: "Jacques", chapters: 5 },
  { id: "1PE", en: "1 Peter", fr: "1 Pierre", chapters: 5 },
  { id: "2PE", en: "2 Peter", fr: "2 Pierre", chapters: 3 },
  { id: "1JN", en: "1 John", fr: "1 Jean", chapters: 5 },
  { id: "2JN", en: "2 John", fr: "2 Jean", chapters: 1 },
  { id: "3JN", en: "3 John", fr: "3 Jean", chapters: 1 },
  { id: "JUD", en: "Jude", fr: "Jude", chapters: 1 },
  { id: "REV", en: "Revelation", fr: "Apocalypse", chapters: 22, aliases: ["Revelations"] },
];

export const TOTAL_CHAPTERS = CANON.reduce((sum, book) => sum + book.chapters, 0);

const bookById = new Map(CANON.map((book) => [book.id, book]));

/** Chapters that come before this book, Genesis 1 being 0. */
export const chaptersBefore = new Map<string, number>();
{
  let count = 0;
  for (const book of CANON) {
    chaptersBefore.set(book.id, count);
    count += book.chapters;
  }
}

const fold = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const nameToId = new Map<string, string>();
for (const book of CANON) {
  for (const name of [book.en, book.fr, ...(book.aliases ?? [])]) {
    nameToId.set(fold(name), book.id);
  }
}

// Longest names first so "1 John" wins over "John" and "Song of Songs" over "Song".
const namePattern = Array.from(nameToId.keys())
  .sort((a, b) => b.length - a.length)
  .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+"))
  .join("|");

/**
 * Matches "Matthew 11:28", "Mark 4:37-38", "1 Corinthians 15:33", "Psaume 139:14".
 * The leading group stands in for a lookbehind, which older Safari can't parse.
 */
export const REFERENCE_PATTERN = new RegExp(
  `(^|[^\\w])(${namePattern})\\s+(\\d{1,3}):(\\d{1,3})(?:\\s*[-–]\\s*(\\d{1,3}))?(?![\\d:])`,
  "giu",
);

export interface Reference {
  book: string; // USFM id
  chapter: number;
  verse: number;
  verseEnd?: number;
}

export interface ReferenceMatch {
  ref: Reference;
  index: number;
  length: number;
}

function parseMatch(match: RegExpMatchArray): Reference | null {
  const id = nameToId.get(fold(match[2].replace(/\s+/g, " ")));
  const book = id ? bookById.get(id) : undefined;
  if (!book) return null;
  const chapter = Number(match[3]);
  if (chapter < 1 || chapter > book.chapters) return null;
  const verse = Number(match[4]);
  const verseEnd = match[5] ? Number(match[5]) : undefined;
  return { book: book.id, chapter, verse, verseEnd };
}

export function findReferences(text: string): ReferenceMatch[] {
  const found: ReferenceMatch[] = [];
  for (const match of Array.from(text.matchAll(REFERENCE_PATTERN))) {
    const ref = parseMatch(match);
    if (ref && match.index !== undefined) {
      const lead = match[1].length;
      found.push({ ref, index: match.index + lead, length: match[0].length - lead });
    }
  }
  return found;
}

export function bookName(id: string, locale: "en" | "fr" = "en"): string {
  const book = bookById.get(id);
  return book ? book[locale] : id;
}

export function formatReference(ref: Reference, locale: "en" | "fr" = "en"): string {
  const range = ref.verseEnd ? `-${ref.verseEnd}` : "";
  return `${bookName(ref.book, locale)} ${ref.chapter}:${ref.verse}${range}`;
}

/** Stable key for grouping, e.g. "JOB.1.21". */
export function referenceKey(ref: Reference): string {
  return `${ref.book}.${ref.chapter}.${ref.verse}`;
}

/** The whole Bible as a 0..1 line, Genesis 1 at 0 and Revelation 22 at 1. */
export function position(ref: Reference): number {
  const book = bookById.get(ref.book);
  const before = chaptersBefore.get(ref.book) ?? 0;
  // Chapters have a few to 176 verses; a slight offset keeps order inside a chapter honest.
  const withinChapter = Math.min(ref.verse / 60, 0.9);
  return (before + ref.chapter - 1 + withinChapter) / (book ? TOTAL_CHAPTERS : 1);
}

/** bible.com, the same place the People page sends readers for Jesus Christ. NIV is 111. */
export function bibleUrl(ref: Reference, version = 111): string {
  const range = ref.verseEnd ? `-${ref.verseEnd}` : "";
  return `https://www.bible.com/bible/${version}/${ref.book}.${ref.chapter}.${ref.verse}${range}`;
}
