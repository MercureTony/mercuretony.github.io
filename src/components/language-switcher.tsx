'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// English paths that also have a French page under /fr. The switcher only
// shows up on these, so it never offers a link to a page that doesn't exist.
const TRANSLATED_ROUTES = ["/resume", "/interests", "/writings", "/readings"];

type LocaleLinkProps = {
  href: string;
  locale: "en" | "fr";
  isActive: boolean;
};

function LocaleLink({ href, locale, isActive }: LocaleLinkProps) {
  return (
    <Link
      href={href}
      hrefLang={locale}
      lang={locale}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-full px-1.5 py-1 text-xs uppercase transition-colors duration-200",
        isActive ? "text-white" : "text-neutral-500 hover:text-neutral-200"
      )}
    >
      {locale}
    </Link>
  );
}

export function LanguageSwitcher() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr/");
  const englishHref = isFrench ? pathname.slice("/fr".length) : pathname;

  if (!TRANSLATED_ROUTES.includes(englishHref)) {
    return null;
  }

  return (
    <div
      aria-label={isFrench ? "Choix de la langue" : "Language"}
      role="group"
      className="ml-1 flex shrink-0 items-center gap-0.5 border-l border-neutral-800 pl-2"
    >
      <LocaleLink href={englishHref} locale="en" isActive={!isFrench} />
      <LocaleLink href={`/fr${englishHref}`} locale="fr" isActive={isFrench} />
    </div>
  );
}
