"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { useId, useMemo, useState } from "react";

import { THESIS_HISTORY } from "@/data/thesis-history";
import { formatDateOnly } from "@/lib/date";
import { normalizeWord, words } from "@/lib/word-diff";

// A word keeps its key across versions when the same word appears in the same
// position among its repeats, so "building" slides into place instead of
// fading out and back in.
function keyedWords(text: string) {
  const seen = new Map<string, number>();
  return words(text).map((word) => {
    const norm = normalizeWord(word);
    const count = seen.get(norm) ?? 0;
    seen.set(norm, count + 1);
    return { key: `${norm}#${count}`, word };
  });
}

export function ThesisScrubber() {
  const latest = THESIS_HISTORY.length - 1;
  const [index, setIndex] = useState(latest);
  const reduceMotion = useReducedMotion();
  const sliderId = useId();

  const version = THESIS_HISTORY[index];
  const tokens = useMemo(() => keyedWords(version.hero), [version.hero]);

  const transition: Transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] };

  return (
    <section aria-label="The current definition, and the ones before it">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 font-mono text-xs text-neutral-500">
        <span>
          v{version.version} ·{" "}
          <time dateTime={version.date}>
            {formatDateOnly(version.date, { month: "short", day: "numeric", year: "numeric" })}
          </time>
        </span>
        <span>{version.domain ?? "no domain yet"}</span>
      </div>

      <LayoutGroup>
        <motion.div layout={!reduceMotion} transition={transition} className="mt-4">
          <p
            aria-live="polite"
            className="relative text-xl font-semibold leading-snug tracking-[-0.02em] text-neutral-100 sm:text-2xl"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {tokens.map(({ key, word }) => (
                <motion.span
                  key={key}
                  layout={!reduceMotion}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={transition}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </AnimatePresence>
          </p>
        </motion.div>
      </LayoutGroup>

      <div className="mt-10">
        <label htmlFor={sliderId} className="sr-only">
          Version. Earlier versions are to the left.
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={latest}
          step={1}
          value={index}
          onChange={(event) => setIndex(Number(event.target.value))}
          aria-valuetext={`Version ${version.version}, ${formatDateOnly(version.date, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}`}
          className="h-6 w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-neutral-100 [&::-moz-range-track]:h-px [&::-moz-range-track]:bg-neutral-800 [&::-webkit-slider-runnable-track]:h-px [&::-webkit-slider-runnable-track]:bg-neutral-800 [&::-webkit-slider-thumb]:-mt-[5.5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-100 [&:focus-visible::-moz-range-thumb]:ring-2 [&:focus-visible::-moz-range-thumb]:ring-neutral-300 [&:focus-visible::-webkit-slider-thumb]:ring-2 [&:focus-visible::-webkit-slider-thumb]:ring-neutral-300"
        />
        <ol className="mt-1 flex justify-between font-mono text-[11px] text-neutral-600">
          {THESIS_HISTORY.map((entry, i) => (
            <li key={entry.version}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-current={i === index ? "true" : undefined}
                className={`min-h-11 px-0.5 transition-colors duration-150 hover:text-neutral-300 motion-reduce:transition-none ${
                  i === index ? "text-neutral-200" : ""
                }`}
              >
                <span className="sm:hidden">
                  {formatDateOnly(entry.date, { month: "short", year: "2-digit" })}
                </span>
                <span className="hidden sm:inline">
                  {formatDateOnly(entry.date, { month: "short", year: "numeric" })}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
