'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocale, hasFrenchVersion, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const baseStyles = "rounded-full px-1.5 py-1 text-xs uppercase";

function LocaleLink({
  href,
  locale,
  isActive,
}: {
  href: string;
  locale: Locale;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      hrefLang={locale}
      lang={locale}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        baseStyles,
        "transition-colors duration-200",
        isActive ? "text-white" : "text-neutral-500 hover:text-neutral-200"
      )}
    >
      {locale}
    </Link>
  );
}

export function LanguageSwitcher({
  translatedArticleSlugs = [],
}: {
  translatedArticleSlugs?: string[];
}) {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const englishHref = stripLocale(pathname);

  return (
    <div
      role="group"
      aria-label={locale === "fr" ? "Choix de la langue" : "Language"}
      className="ml-1 flex shrink-0 items-center gap-0.5 border-l border-neutral-800 pl-2"
    >
      <LocaleLink href={englishHref} locale="en" isActive={locale === "en"} />
      {hasFrenchVersion(englishHref, translatedArticleSlugs) ? (
        <LocaleLink href={`/fr${englishHref}`} locale="fr" isActive={locale === "fr"} />
      ) : (
        // Kept in place, dimmed, so the control doesn't shift or vanish between pages.
        <span
          aria-disabled="true"
          title="This page isn't available in French yet"
          className={cn(baseStyles, "cursor-default text-neutral-700")}
        >
          fr
        </span>
      )}
    </div>
  );
}
