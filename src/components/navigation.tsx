"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type Locale = "en" | "fr";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "px-3 py-2 text-sm sm:px-4 sm:text-base rounded-full transition-all duration-200",
        "hover:bg-neutral-800/50 hover:text-white",
        isActive ? "bg-neutral-800 text-white" : "text-neutral-400",
      )}
    >
      {children}
    </Link>
  );
}

function stripLocale(pathname: string) {
  const stripped = pathname.replace(/^\/fr(?=\/|$)/, "");
  return stripped || "/";
}

function localizedPath(locale: Locale, path: string) {
  return locale === "fr" ? `/fr${path}` : path;
}

export default function Navigation() {
  const pathname = usePathname();
  const locale: Locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
  const basePath = stripLocale(pathname);

  const labels =
    locale === "fr"
      ? {
          resume: "CV",
          interests: "Intérêts",
          writings: "Écrits",
          readings: "Lectures",
        }
      : {
          resume: "Resume",
          interests: "Interests",
          writings: "Writings",
          readings: "Readings",
        };

  const items = [
    ["/resume", labels.resume],
    ["/interests", labels.interests],
    ["/writings", labels.writings],
    ["/readings", labels.readings],
  ] as const;

  const isCorePath = items.some(
    ([href]) => basePath === href || basePath.startsWith(`${href}/`),
  );

  const languageHref =
    locale === "fr"
      ? isCorePath
        ? basePath
        : "/resume"
      : isCorePath
        ? `/fr${basePath}`
        : "/fr/resume";

  return (
    <nav
      aria-label={locale === "fr" ? "Navigation principale" : "Primary navigation"}
      className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex items-center justify-center w-full z-50 px-4"
    >
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800 overflow-x-auto no-scrollbar">
        {items.map(([href, label]) => {
          const localizedHref = localizedPath(locale, href);
          const isActive = basePath === href || basePath.startsWith(`${href}/`);

          return (
            <NavItem key={href} href={localizedHref} isActive={isActive}>
              {label}
            </NavItem>
          );
        })}

        <span className="mx-1 h-5 w-px shrink-0 bg-neutral-800" aria-hidden="true" />

        <Link
          href={languageHref}
          hrefLang={locale === "fr" ? "en" : "fr"}
          lang={locale === "fr" ? "en" : "fr"}
          aria-label={
            locale === "fr" ? "Switch to English" : "Passer au français"
          }
          className="shrink-0 rounded-full px-3 py-2 text-sm text-neutral-500 transition-colors duration-200 hover:bg-neutral-800/50 hover:text-white"
        >
          {locale === "fr" ? "EN" : "FR"}
        </Link>
      </div>
    </nav>
  );
}
