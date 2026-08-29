"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { reading2025 } from "@/data/challenges/2025/reading";
import Link from "next/link";

export function CurrentlyReading() {
  const currentBook = reading2025.find(book => book.status === "reading");

  if (!currentBook) return null;

  return (
    <motion.div className="space-y-2">
      <Link 
        href="/challenges/2025/reading"
        className="group inline-flex items-center gap-2"
      >
        <h3 className="text-neutral-200 font-medium group-hover:text-neutral-100">Currently Reading</h3>
        <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300" />
      </Link>
      <div className="space-y-1">
        <a 
          href={currentBook.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 text-sm"
        >
          <ArrowUpRight className="w-4 h-4 mt-1 text-neutral-400 group-hover:text-neutral-300 transition-colors" />
          <div className="space-y-1">
            <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
              {currentBook.title}
            </p>
            <p className="text-neutral-400">
              by {currentBook.author}
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
} 