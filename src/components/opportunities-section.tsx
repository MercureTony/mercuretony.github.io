import { ArrowUpRight } from "lucide-react";

export function OpportunitiesSection() {
  return (
    <section className="border-t border-neutral-800/80 pb-8 pt-8">
      <div className="rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/70 to-neutral-900/30 p-5 sm:p-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          Open to
        </p>
        <h2 className="text-lg font-semibold tracking-tight text-neutral-200">
          Accounting firms that want to rethink file preparation
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
          I&apos;m especially interested in firms handling hundreds or thousands of client
          files where teams still lose time collecting documents, checking what is missing,
          splitting PDFs, following up with clients, and preparing files before the real
          accounting work begins.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Partner-led firms",
            "500+ files / year",
            "Tax, compilation, assurance",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-neutral-800 bg-neutral-950/60 px-2.5 py-1 text-xs text-neutral-500"
            >
              {label}
            </span>
          ))}
        </div>

        <a
          href="https://cal.com/auyende/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-950 transition-colors duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
        >
          Talk about your workflow
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
          <span className="sr-only">, opens in a new tab</span>
        </a>
      </div>
    </section>
  );
}
