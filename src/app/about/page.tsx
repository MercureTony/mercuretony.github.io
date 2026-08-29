import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { RESUME_DATA } from "@/data/resume-data";

export default function AboutPage() {
  return (
    <main className="mx-auto mb-32 max-w-2xl">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
          I like building at the edge of messy reality.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-neutral-400">
          I&apos;m Anthony Uyende, a founder, programmer, and writer based in Montreal.
          I&apos;m most interested in software problems where trust, judgment, and
          operational complexity matter.
        </p>
      </header>

      <div className="space-y-10">
        <section className="grid gap-3 border-t border-neutral-800/80 pt-7 sm:grid-cols-[8rem_1fr]">
          <h2 className="text-sm font-medium text-neutral-500">Building</h2>
          <div className="space-y-4">
            <p className="leading-7 text-neutral-300">
              I&apos;m currently building{" "}
              <a
                href="https://coalesc.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-100 underline decoration-neutral-700 underline-offset-4 transition-colors duration-150 hover:decoration-neutral-400 motion-reduce:transition-none"
              >
                Coalesc
                <span className="sr-only">, opens in a new tab</span>
              </a>
              , the preparation layer for accounting firms.
            </p>
            <p className="leading-7 text-neutral-400">
              Every engagement starts with messy client material: emails, PDFs,
              statements, receipts, spreadsheets, and missing documents. Before tax,
              bookkeeping, compilation, or assurance can begin, someone has to turn that
              mess into a file the accountant can actually work with.
            </p>
            <p className="leading-7 text-neutral-400">
              Coalesc focuses on that layer: document intake, classification, missing
              items, follow-ups, file readiness, and structured handoff into the systems
              firms already use.
            </p>
          </div>
        </section>

        <section className="grid gap-3 border-t border-neutral-800/80 pt-7 sm:grid-cols-[8rem_1fr]">
          <h2 className="text-sm font-medium text-neutral-500">Background</h2>
          <div className="space-y-4 text-neutral-400">
            <p className="leading-7">
              My background is in mathematics, computer science, data, and AI
              engineering. I&apos;ve worked across data science, analytics engineering,
              and software at Shopify, Wealthsimple, Unity, and 1Password.
            </p>
            <Link
              href="/resume"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors duration-150 hover:text-white hover:decoration-neutral-400 motion-reduce:transition-none"
            >
              Full resume
              <span
                className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </section>

        <section className="grid gap-3 border-t border-neutral-800/80 pt-7 sm:grid-cols-[8rem_1fr]">
          <h2 className="text-sm font-medium text-neutral-500">Curious about</h2>
          <p className="leading-7 text-neutral-400">
            Startups, AI infrastructure, accounting, economic development, energy, and
            the larger systems that shape how societies grow.
          </p>
        </section>

        <section className="grid gap-3 border-t border-neutral-800/80 pt-7 sm:grid-cols-[8rem_1fr]">
          <h2 className="text-sm font-medium text-neutral-500">Elsewhere</h2>
          <ul className="flex flex-wrap gap-2">
            {RESUME_DATA.contact.social.map((platform) => (
              <li key={platform.name}>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-1.5 rounded-full border border-neutral-800 px-3.5 py-2 text-sm text-neutral-400 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
                >
                  {platform.name}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                  <span className="sr-only">, opens in a new tab</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
