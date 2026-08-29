"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { Misc } from "@/components/misc";
import { OpportunitiesSection } from "@/components/opportunities-section";
import { RESUME_DATA } from "@/data/resume-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: easeOut,
    },
  },
};

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 pt-16 text-neutral-200 sm:px-6 sm:pt-20 lg:px-8">
      <motion.div
        className="w-full max-w-2xl space-y-8 sm:space-y-10"
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
      >
        <motion.div variants={item}>
          <h1 className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Anthony Uyende
          </h1>
        </motion.div>

        <motion.div className="space-y-4 sm:space-y-6" variants={container}>
          <motion.p variants={item} className="text-lg text-neutral-300 sm:text-xl">
            Founder of{" "}
            <a
              href="https://coalesc.ai"
              className="group inline-flex min-h-11 items-center gap-1 text-neutral-100 transition-colors duration-150 hover:text-white motion-reduce:transition-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="border-b border-neutral-700 transition-colors duration-150 group-hover:border-neutral-400 motion-reduce:transition-none">
                Coalesc
              </span>
              <SquareArrowOutUpRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </motion.p>

          <motion.p variants={item} className="text-base text-neutral-300 sm:text-lg">
            Where accounting engagements begin.
          </motion.p>

          <motion.p variants={item} className="text-sm text-neutral-400 sm:text-base">
            Coalesc helps partner-led accounting firms turn messy client emails,
            PDFs, statements, receipts, and supporting documents into work-ready
            files for bookkeeping, tax, compilation, and assurance.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-800/70 px-4 py-2 text-neutral-200 transition-colors duration-150 hover:bg-neutral-800 hover:text-white motion-reduce:transition-none"
            >
              <span>View my resume</span>
              <span
                className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <a
              href="https://cal.com/auyende/15min"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-neutral-300 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white motion-reduce:transition-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Book a meeting</span>
              <span
                className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                →
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </motion.div>

          <motion.p variants={item}>
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="group inline-flex min-h-11 items-center gap-2 text-neutral-400 transition-colors duration-150 hover:text-neutral-200 motion-reduce:transition-none"
            >
              <span className="border-b border-neutral-700 transition-colors duration-150 group-hover:border-neutral-400 motion-reduce:transition-none">
                {RESUME_DATA.contact.email}
              </span>
              <SquareArrowOutUpRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </motion.p>

          <motion.div variants={item}>
            <Misc />
          </motion.div>

          <motion.div variants={item} className="mt-12">
            <OpportunitiesSection />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
