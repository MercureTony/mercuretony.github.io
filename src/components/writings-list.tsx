"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, useVelocity } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { formatDateOnly } from "@/lib/date";

export interface ListedEssay {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  photo?: { src: string; width: number; height: number; focus: string };
}

const PREVIEW_WIDTH = 288; // px, 18rem

/**
 * The essay list. With a mouse, an essay's photograph follows the pointer
 * while its title is hovered, leaning into the motion like a print held by a
 * corner. On touch screens a small thumbnail sits beside the title instead.
 */
export function WritingsList({ essays }: { essays: ListedEssay[] }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = reduceMotion ? { stiffness: 2000, damping: 100 } : { stiffness: 260, damping: 28, mass: 0.7 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const rotate = useTransform(useVelocity(sx), [-2400, 0, 2400], reduceMotion ? [0, 0, 0] : [-7, 0, 7], {
    clamp: true,
  });

  const withPhotos = essays.filter((essay) => essay.photo);

  return (
    <div
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        // Sit to the right of the pointer, or to its left near the screen's edge.
        const right = event.clientX + 28 + PREVIEW_WIDTH < window.innerWidth;
        x.set(right ? event.clientX + 28 : event.clientX - 28 - PREVIEW_WIDTH);
        y.set(event.clientY);
      }}
    >
      <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
        {essays.map((essay, index) => (
          <article
            key={essay.slug}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse" && essay.photo) {
                if (!active) {
                  // First photo of a hover: appear where the pointer is, not fly in.
                  const right = event.clientX + 28 + PREVIEW_WIDTH < window.innerWidth;
                  sx.jump(right ? event.clientX + 28 : event.clientX - 28 - PREVIEW_WIDTH);
                  sy.jump(event.clientY);
                }
                setActive(essay.slug);
              }
            }}
            onPointerLeave={() => setActive(null)}
          >
            <Link
              href={`/writings/${essay.slug}`}
              className="group -mx-3 grid gap-3 rounded-lg px-3 py-6 transition-colors duration-150 hover:bg-neutral-900/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none sm:grid-cols-[8rem_1fr]"
            >
              <div>
                <time dateTime={essay.date} className="text-sm tabular-nums text-neutral-600">
                  {formatDateOnly(essay.date, { month: "short", day: "numeric", year: "numeric" })}
                </time>
                {index === 0 ? <span className="mt-1 block text-xs text-neutral-600">Latest</span> : null}
              </div>

              <div className="flex min-w-0 items-start gap-4">
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-medium leading-7 text-neutral-200 transition-colors duration-150 group-hover:text-white motion-reduce:transition-none">
                    {essay.title}
                  </h2>
                  {essay.summary ? <p className="mt-2 text-sm leading-6 text-neutral-500">{essay.summary}</p> : null}
                </div>
                {essay.photo ? (
                  <Image
                    src={essay.photo.src}
                    alt=""
                    width={essay.photo.width}
                    height={essay.photo.height}
                    sizes="4rem"
                    style={{ objectPosition: essay.photo.focus }}
                    className="mt-1 aspect-square w-16 shrink-0 rounded-sm bg-neutral-900 object-cover [@media(hover:hover)_and_(pointer:fine)]:hidden"
                  />
                ) : null}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {withPhotos.length ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
          style={{ x: sx, y: sy, rotate, width: PREVIEW_WIDTH, height: 0 }}
        >
          {withPhotos.map((essay) => {
            const photo = essay.photo!;
            const shown = essay.slug === active;
            return (
              <Image
                key={essay.slug}
                src={photo.src}
                alt=""
                width={photo.width}
                height={photo.height}
                sizes="18rem"
                loading="eager"
                style={{ objectPosition: photo.focus }}
                className={`absolute left-0 top-1/2 h-auto max-h-[22rem] w-full -translate-y-1/2 rounded-sm object-cover shadow-2xl shadow-black/60 transition-[opacity,filter,transform] duration-500 ease-out motion-reduce:transition-none ${
                  shown
                    ? "scale-100 opacity-100 grayscale-0 brightness-100"
                    : "scale-95 opacity-0 grayscale brightness-50"
                }`}
              />
            );
          })}
        </motion.div>
      ) : null}
    </div>
  );
}
