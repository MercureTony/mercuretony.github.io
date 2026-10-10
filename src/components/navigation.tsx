'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const isActive = currentPath === href || (href !== "/" && currentPath.startsWith(`${href}/`));

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

// While someone reads an essay the pill gets out of the way: it slides off on
// the first real scroll down and comes back on any scroll up, near the end of
// the page, or when keyboard focus enters it.
function useHiddenWhileReading(enabled: boolean) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const atEnd = y + window.innerHeight >= document.documentElement.scrollHeight - 48;
        if (y < 96 || atEnd) setHidden(false);
        else if (y - last > 8) setHidden(true);
        else if (last - y > 8) setHidden(false);
        last = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);

  return [hidden, setHidden] as const;
}

export default function Navigation() {
  const pathname = usePathname();
  // Compare and link in terms of English paths so French pages, which live
  // under /fr, highlight the right item and keep the reader in French.
  const currentPath = stripLocale(pathname);
  const locale = getLocale(pathname);
  const reading = /^\/writings\/[^/]+$/.test(currentPath);
  const [hidden, setHidden] = useHiddenWhileReading(reading);

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
    <nav
      onFocusCapture={() => setHidden(false)}
      className={cn(
        "fixed bottom-4 sm:bottom-8 left-0 right-0 flex items-center justify-center w-full z-50 px-4",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        hidden && "translate-y-[calc(100%+2.5rem)]"
      )}
    >
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
