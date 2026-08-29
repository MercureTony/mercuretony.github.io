'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Navigation() {
  return (
    <nav className="fixed bottom-4 sm:bottom-8 left-0 right-0 flex items-center justify-center w-full z-50 px-4">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800 overflow-x-auto no-scrollbar">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/resume">Resume</NavItem>
        <NavItem href="/interests">Interests</NavItem>
        <NavItem href="/writings">Writings</NavItem>
        <NavItem href="/readings">Readings</NavItem>
        <NavItem href="/people">People</NavItem>
      </div>
    </nav>
  );
}