import Link from "next/link";

export function LanguageSwitcher({
  locale,
  englishHref,
  frenchHref,
}: {
  locale: "en" | "fr";
  englishHref: string;
  frenchHref: string;
}) {
  return (
    <nav
      aria-label={locale === "fr" ? "Choix de la langue" : "Language"}
      className="mb-6 flex justify-end"
    >
      <div className="inline-flex rounded-full border border-neutral-800 bg-neutral-900/40 p-1 text-sm">
        <Link
          href={englishHref}
          hrefLang="en"
          lang="en"
          aria-current={locale === "en" ? "page" : undefined}
          className={
            locale === "en"
              ? "rounded-full bg-neutral-800 px-3 py-1.5 text-white"
              : "rounded-full px-3 py-1.5 text-neutral-500 transition-colors duration-150 hover:text-neutral-200"
          }
        >
          EN
        </Link>
        <Link
          href={frenchHref}
          hrefLang="fr"
          lang="fr"
          aria-current={locale === "fr" ? "page" : undefined}
          className={
            locale === "fr"
              ? "rounded-full bg-neutral-800 px-3 py-1.5 text-white"
              : "rounded-full px-3 py-1.5 text-neutral-500 transition-colors duration-150 hover:text-neutral-200"
          }
        >
          FR
        </Link>
      </div>
    </nav>
  );
}
