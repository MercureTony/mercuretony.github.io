'use client';

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-sm sm:px-4 sm:text-base rounded-full transition-all duration-200",
        "hover:bg-neutral-800/50 hover:text-white",
        isActive ? "bg-neutral-800 text-white" : "text-neutral-400"
      )}
    >
      {children}
    </Link>
  );
}

function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");

  const switchTo = (next: string) => {
    if (next === locale) return;
    // Preserve the current path, swap only the locale.
    router.replace(pathname, { locale: next as (typeof routing.locales)[number] });
  };

  return (
    <div
      className="flex items-center gap-0.5 ml-1 pl-1 border-l border-neutral-800"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchTo(loc)}
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "px-2 py-1 text-xs sm:text-sm rounded-full transition-all duration-200",
            loc === locale
              ? "text-white"
              : "text-neutral-500 hover:text-neutral-300"
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}

export default function Navigation() {
  const t = useTranslations("Nav");

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex items-center justify-center w-full z-50 px-4">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800 overflow-x-auto no-scrollbar">
        <NavItem href="/">{t("home")}</NavItem>
        <NavItem href="/about">{t("about")}</NavItem>
        <NavItem href="/resume">{t("resume")}</NavItem>
        <NavItem href="/interests">{t("interests")}</NavItem>
        <NavItem href="/writings">{t("writings")}</NavItem>
        <NavItem href="/readings">{t("readings")}</NavItem>
        <NavItem href="/people">{t("people")}</NavItem>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
