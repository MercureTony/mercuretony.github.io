import Link from "next/link";
import * as React from "react";

// Two quiet pieces of furniture for essays: an invitation at the end, and a
// badge pointing an older essay to its follow-up. Both set in the site's sans
// so they read as notes beside the essay, not part of its prose.

const pill =
  "inline-flex min-h-10 items-center gap-1.5 rounded-full border px-4 font-sans text-[0.8125rem] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none";

/**
 * A closing invitation, set apart from the essay in a card.
 *
 *   <Invite label="Coalesc" href="https://coalesc.ai" linkText="coalesc.ai" email="me@example.com">
 *     If you run an accounting firm…
 *   </Invite>
 */
export function Invite({
  label,
  href,
  linkText,
  email,
  children,
}: {
  label: string;
  href: string;
  linkText: string;
  email?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="mt-[2.75em] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-7">
      <p className="flex items-center gap-2 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-neutral-400">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {label}
      </p>
      <div className="mt-3 text-pretty text-neutral-200 [&>p:last-child]:mb-0 [&>p]:mb-[0.75em]">
        {children}
      </div>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <a href={href} className={`${pill} border-neutral-200 bg-neutral-100 text-neutral-900 hover:bg-white`}>
          {linkText}
          <span aria-hidden="true">↗</span>
        </a>
        {email ? (
          <a
            href={`mailto:${email}`}
            className={`${pill} border-neutral-700 text-neutral-200 hover:border-neutral-500 hover:text-white`}
          >
            Write to me
          </a>
        ) : null}
      </div>
    </aside>
  );
}

/**
 * A badge at the top of an essay pointing to the one that followed it.
 *
 *   <FollowUp href="/writings/why-im-building-coalesc" date="November 2026">Why I'm Building Coalesc</FollowUp>
 */
export function FollowUp({ href, date, children }: { href: string; date?: string; children: React.ReactNode }) {
  return (
    <p className="mb-[2em]">
      <Link
        href={href}
        className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/60 py-1.5 pl-1.5 pr-4 font-sans text-[0.8125rem] leading-5 text-neutral-300 transition-colors duration-150 hover:border-neutral-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 motion-reduce:transition-none"
      >
        <span className="shrink-0 rounded-full bg-neutral-800 px-2.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-neutral-300 group-hover:bg-neutral-700">
          Follow-up
        </span>
        <span className="min-w-0 truncate">
          {children}
          {date ? <span className="hidden text-neutral-500 sm:inline"> · {date}</span> : null}
        </span>
        <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none">
          →
        </span>
      </Link>
    </p>
  );
}
