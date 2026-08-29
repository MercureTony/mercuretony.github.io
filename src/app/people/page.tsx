import { ArrowUpRight } from "lucide-react";

interface Person {
  name: string;
  url: string;
}

const people: Person[] = [
  { name: "Alain Tamno", url: "https://www.amazon.fr/stores/author/B08NYD6N8H/about" },
  { name: "Immad Akhund", url: "https://x.com/immad" },
  { name: "Jesus Christ", url: "https://www.bible.com/" },
  {
    name: "Lea Nzogho",
    url: "https://www.linkedin.com/in/lea-nzogho-518ab42b6/?originalSubdomain=ga",
  },
  { name: "Naval Ravikant", url: "https://nav.al/" },
  { name: "Paul Graham", url: "https://paulgraham.com/" },
  {
    name: "Paul Washer",
    url: "https://heartcrymissionary.com/about/mission-and-methodology/staff/paul-washers-bio/",
  },
  { name: "Sam Altman", url: "https://blog.samaltman.com/" },
  {
    name: "Santosh Passoubady",
    url: "https://www.google.com/search?q=santosh+passoubady",
  },
  { name: "Shahvir Sarkary", url: "https://www.shahvirsarkary.com/" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function PeoplePage() {
  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Influences
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          People
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          People who have shaped how I think, work, build, or live. Some are people I know.
          Others I know only through their work.
        </p>
        <p className="text-sm tabular-nums text-neutral-600">{people.length} people · evolving list</p>
      </header>

      <ul className="grid gap-2 sm:grid-cols-2">
        {people.map((person) => (
          <li key={person.name}>
            <a
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-neutral-900/25 px-3.5 py-3 text-neutral-300 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
            >
              <span>{person.name}</span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-neutral-700 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-400 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
              <span className="sr-only">Opens in a new tab</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
