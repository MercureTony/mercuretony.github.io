"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { type Phase, buildContext, resolveMoment } from "@/data/moments";
import { parseReplay } from "@/lib/montreal-time";
import { useMontrealWeather } from "@/lib/use-montreal-weather";

/** One line, only when something is true in Montreal or on the visitor's clock. */
export function MontrealMoment() {
  const weather = useMontrealWeather();
  const [phase, setPhase] = useState<(Phase & { id: string }) | null>(null);

  useEffect(() => {
    const compute = () => {
      const replay = parseReplay(window.location.search);
      const now = replay.at ?? new Date();
      const code = replay.weatherCode ?? weather.code;
      setPhase(resolveMoment(buildContext(now, code)));
    };
    compute();
    const timer = window.setInterval(compute, 60_000);
    return () => window.clearInterval(timer);
  }, [weather.code]);

  return (
    <AnimatePresence initial={false}>
      {phase ? (
        <motion.p
          key={phase.id + phase.line}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-sm leading-6 text-neutral-500"
        >
          {phase.dateline}{" "}
          <Link
            href={phase.href}
            className="border-b border-neutral-800 text-neutral-300 transition-colors duration-200 hover:border-neutral-500 hover:text-neutral-200"
          >
            {phase.line}
          </Link>
          {phase.cite ? <span> — {phase.cite}</span> : null}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}
