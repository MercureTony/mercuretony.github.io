"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
        "inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 motion-reduce:transition-none sm:px-4 sm:text-base",
        "hover:bg-neutral-800 hover:text-white",
        isActive ? "bg-neutral-800 text-white" : "text-neutral-400",
      )}
    >
      {children}
    </Link>
  );
}

const items = [
  ["/", "Home"],
  ["/about", "About"],
  ["/resume", "Resume"],
  ["/interests", "Interests"],
  ["/writings", "Writings"],
  ["/readings", "Readings"],
  ["/people", "People"],
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-8"
    >
      <div className="max-w-full overflow-x-auto overscroll-x-contain rounded-full border border-neutral-800 bg-neutral-950/95 p-1.5 shadow-2xl shadow-black/30 no-scrollbar">
        <div className="flex w-max items-center gap-1">
          {items.map(([href, label]) => (
            <NavItem key={href} href={href} isActive={pathname === href}>
              {label}
            </NavItem>
          ))}
        </div>
      </div>
    </nav>
  );
}
