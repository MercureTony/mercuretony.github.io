"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { currentlyReading } from "@/data/books";

export function CurrentlyReading() {
  return (
    <motion.div className="space-y-2">
      <h3 className="text-neutral-200 font-medium">Currently Reading</h3>
      <div className="space-y-1">
        <a 
          href={currentlyReading.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 text-sm"
        >
          <ArrowUpRight className="w-4 h-4 mt-1 text-neutral-400 group-hover:text-neutral-300 transition-colors" />
          <div className="space-y-1">
            <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
              {currentlyReading.title}
            </p>
            <p className="text-neutral-400">
              by {currentlyReading.author}
            </p>
          </div>
        </a>
      </div>
    </motion.div>
  );
} 