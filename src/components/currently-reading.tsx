"use client";

import { motion } from "framer-motion";
import { currentBook } from "@/data/currently-reading";
import Link from "next/link";

export function CurrentlyReading() {
  if (!currentBook) return null;

  return (
    <motion.div className="space-y-2">
      <h3 className="font-medium text-neutral-200">
        <Link href="/readings" className="transition-colors hover:text-neutral-100">
          Currently reading
        </Link>
      </h3>
      <p className="text-sm text-neutral-400">
        <a
          href={currentBook.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-400 hover:text-neutral-200"
        >
          {currentBook.title}
        </a>
        , {currentBook.author}
      </p>
    </motion.div>
  );
}
