import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { withScriptureRefs } from "@/components/scripture-ref";
import { slugify } from "@/lib/slug";

// Size, colour and face come from the .essay rule in globals.css; the
// components below only set rhythm (in ems, so it holds on every screen).

const linkClass =
  "break-words text-neutral-100 underline decoration-neutral-500 decoration-[0.06em] underline-offset-[0.2em] transition-colors duration-150 hover:decoration-neutral-200 motion-reduce:transition-none";

function ArticleLink({
  href = "",
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClass}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
}

function textOf(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return String(child);
      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return textOf(child.props.children);
      }
      return "";
    })
    .join("");
}

const headingClass = "scroll-mt-6 text-balance font-medium text-neutral-100";

// Headings carry an id so the concordance can link straight to a section.
// "## 1. Storms Happen to Everyone": the numeral the author wrote hangs in the
// left margin from md up and stays inline on phones; the id keeps the full text.
function Heading2({ children }: { children?: React.ReactNode }) {
  const id = slugify(textOf(children));
  const className = `${headingClass} relative mb-[0.6em] mt-[2.75em] text-[1.375rem] leading-[1.25] tracking-[-0.01em] sm:text-[1.5rem]`;
  const numbered = typeof children === "string" ? /^(\d{1,2})\.\s+(.+)$/.exec(children) : null;

  if (!numbered) {
    return (
      <h2 id={id} className={className}>
        {children}
      </h2>
    );
  }
  return (
    <h2 id={id} className={className}>
      <span className="mr-1.5 font-sans text-[0.8125em] tabular-nums text-neutral-500 md:absolute md:right-full md:top-[0.25em] md:mr-5">
        {numbered[1]}
        <span className="md:hidden">.</span>
      </span>{" "}
      {numbered[2]}
    </h2>
  );
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className={`${headingClass} mb-[0.6em] mt-[2em] text-[1.75rem] leading-[1.2]`}>
      {children}
    </h1>
  ),
  h2: ({ children }) => <Heading2>{children}</Heading2>,
  h3: ({ children }) => (
    <h3
      id={slugify(textOf(children))}
      className={`${headingClass} mb-[0.5em] mt-[2.25em] text-[1.1875rem] leading-[1.3]`}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mb-[1.25em] text-pretty">{withScriptureRefs(children)}</p>,
  a: ({ href, children }) => <ArticleLink href={href}>{children}</ArticleLink>,
  ul: ({ children }) => (
    <ul className="mb-[1.25em] list-disc space-y-[0.4em] pl-[1.4em] marker:text-neutral-500">
      {children}
    </ul>
  ),
  ol: ({ children, start }) => (
    <ol
      start={start}
      className="mb-[1.25em] list-decimal space-y-[0.4em] pl-[1.6em] marker:tabular-nums marker:text-neutral-500"
    >
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{withScriptureRefs(children)}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-100">{withScriptureRefs(children)}</strong>
  ),
  em: ({ children }) => <em>{withScriptureRefs(children)}</em>,
  // A quoted verse is the brightest prose on the page, a step larger, no bar.
  blockquote: ({ children }) => (
    <blockquote className="my-10 text-[1.0625em] leading-[1.5] text-neutral-200 sm:my-12 [&>p]:mb-[0.6em] [&>p:last-child]:mb-0">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mx-auto my-14 w-10 border-0 border-t border-neutral-700" />,
  code: ({ children }) => (
    <code className="font-mono text-[0.875em] text-neutral-200">{children}</code>
  ),
  img: ({ src, alt, width, height }) => (
    <Image
      src={src as string}
      alt={(alt as string) || ""}
      width={(width as number) || 1200}
      height={(height as number) || 800}
      className="my-10 h-auto w-full"
    />
  ),
};
