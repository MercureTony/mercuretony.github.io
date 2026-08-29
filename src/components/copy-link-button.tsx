"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "error";

export function CopyLinkButton() {
  const [state, setState] = useState<CopyState>("idle");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setState("copied");
    } catch {
      setState("error");
    }

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setState("idle"), 2500);
  };

  const label =
    state === "copied" ? "Copied" : state === "error" ? "Couldn’t copy" : "Copy link";

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-800 px-3 py-2 text-sm text-neutral-500 transition-colors duration-150 hover:border-neutral-700 hover:bg-neutral-900 hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] motion-reduce:transition-none"
      aria-live="polite"
    >
      {state === "copied" ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Link2 className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{label}</span>
    </button>
  );
}
