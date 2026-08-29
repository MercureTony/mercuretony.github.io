"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { RESUME_DATA } from "@/data/resume-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.03,
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

export function HomeIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      variants={container}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item} className="space-y-3">
        <p className="text-sm font-medium text-neutral-500">Founder · Programmer · Writer</p>
        <h1 className="bg-gradient-to-r from-white via-neutral-100 to-neutral-500 bg-clip-text text-4xl font-semibold tracking-[-0.035em] text-transparent sm:text-5xl">
          Anthony Uyende
        </h1>
      </motion.div>

      <motion.div variants={item} className="max-w-xl space-y-3">
        <p className="text-lg leading-8 text-neutral-300 sm:text-xl">
          I&apos;m building{" "}
          <a
            href="https://coalesc.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-1 font-medium text-neutral-100 underline decoration-neutral-700 underline-offset-4 transition-colors duration-150 hover:decoration-neutral-400 motion-reduce:transition-none"
          >
            Coalesc
            <ArrowUpRight
              className="h-3.5 w-3.5 self-center transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
              aria-hidden="true"
            />
            <span className="sr-only">, opens in a new tab</span>
          </a>
          , the preparation layer for accounting firms.
        </p>
        <p className="text-base leading-7 text-neutral-400">
          I like hard software problems where messy real-world information has to become
          structured, trustworthy, and useful.
        </p>
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap gap-2.5">
        <a
          href="https://cal.com/auyende/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-950 transition-colors duration-150 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
        >
          Book a conversation
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          />
          <span className="sr-only">, opens in a new tab</span>
        </a>

        <Link
          href="/writings"
          className="inline-flex min-h-11 items-center rounded-full border border-neutral-800 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
        >
          Read my writing
        </Link>

        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="inline-flex min-h-11 items-center px-2 py-2 text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-300 motion-reduce:transition-none"
        >
          {RESUME_DATA.contact.email}
        </a>
      </motion.div>
    </motion.header>
  );
}
