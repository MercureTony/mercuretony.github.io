'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getLocale, localizedHref, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavItemProps = {
  href: string;
  currentPath: string;
  locale: Locale;
  children: React.ReactNode;
};

function NavItem({ href, currentPath, locale, children }: NavItemProps) {
  const isActive = currentPath === href;

  return (
    <Link
      href={localizedHref(href, locale)}
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

export default function Navigation() {
  const pathname = usePathname();
  // Compare and link in terms of English paths so French pages, which live
  // under /fr, highlight the right item and keep the reader in French.
  const currentPath = stripLocale(pathname);
  const locale = getLocale(pathname);

  const items = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/interests", label: "Interests" },
    { href: "/writings", label: "Writings" },
    { href: "/readings", label: "Readings" },
    { href: "/people", label: "People" },
  ];

  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex items-center justify-center w-full z-50 px-4">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800 overflow-x-auto no-scrollbar">
        {items.map((item) => (
          <NavItem key={item.href} href={item.href} currentPath={currentPath} locale={locale}>
            {item.label}
          </NavItem>
        ))}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
