import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

function ArticleLink({
  href = "",
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const isInternal = href.startsWith("/");

  const className =
    "break-words font-medium text-neutral-200 underline decoration-neutral-700 underline-offset-4 transition-colors duration-150 hover:text-white hover:decoration-neutral-400 motion-reduce:transition-none";

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-5 mt-12 text-3xl font-semibold tracking-[-0.025em] text-neutral-100">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-12 scroll-mt-8 text-2xl font-semibold tracking-[-0.02em] text-neutral-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-8 text-xl font-semibold text-neutral-200">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-5 text-[1.02rem] leading-8 text-neutral-300">{children}</p>
  ),
  a: ({ href, children }) => <ArticleLink href={href}>{children}</ArticleLink>,
  ul: ({ children }) => (
    <ul className="mb-6 ml-1 list-disc space-y-2 pl-5 text-[1.02rem] leading-8 text-neutral-300 marker:text-neutral-600">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-1 list-decimal space-y-2 pl-5 text-[1.02rem] leading-8 text-neutral-300 marker:tabular-nums marker:text-neutral-600">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-neutral-100">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-neutral-700 pl-5 text-neutral-400">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-neutral-800" />,
  code: ({ children }) => (
    <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-[0.9em] text-neutral-200">
      {children}
    </code>
  ),
  img: ({ src, alt, width, height }) => (
    <Image
      src={src as string}
      alt={(alt as string) || ""}
      width={(width as number) || 1200}
      height={(height as number) || 800}
      className="my-8 h-auto w-full rounded-xl border border-neutral-800"
    />
  ),
};
