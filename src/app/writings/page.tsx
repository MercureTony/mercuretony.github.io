import { WritingsList } from "@/components/writings-list";
import { getEssays } from "@/lib/essays";

export default function WritingsPage() {
  const essays = getEssays().map(({ slug, title, date, summary, photo }) => ({
    slug,
    title,
    date,
    summary,
    photo: photo ? { src: photo.src, width: photo.width, height: photo.height, focus: photo.focus } : undefined,
  }));

  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Essays & notes
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          Writings
        </h1>
        <p className="max-w-xl leading-7 text-neutral-400">
          Ideas I&apos;m working through in public. Mostly startups, technology, faith,
          systems, and the occasional attempt to make sense of life.
        </p>
      </header>

      <WritingsList essays={essays} />
    </main>
  );
}
