"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { SITE_LOCATION } from "@/data/site-location";
import { getLocale, type Locale } from "@/lib/i18n";

/**
 * Builds the time from parts rather than a formatted string so the shape is
 * ours, not the locale's: "3:28pm" in English, "15h28" in French. en-CA would
 * otherwise render "3:28 p.m.", and fr-CA "15 h 28".
 */
function formatLocalTime(date: Date, locale: Locale) {
  const parts = new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: locale === "en",
    timeZone: SITE_LOCATION.timeZone,
  }).formatToParts(date);

  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((entry) => entry.type === type)?.value ?? "";

  const hour = part("hour");
  const minute = part("minute");

  if (locale === "fr") {
    return `${hour}h${minute}`;
  }

  // "PM" -> "pm", and drop the narrow no-break space some ICU builds emit.
  const dayPeriod = part("dayPeriod").toLowerCase().replace(/[.\s]/g, "");

  return `${hour}:${minute}${dayPeriod}`;
}

export function SiteFooter() {
  const locale = getLocale(usePathname());
  // Null until mounted: the server has no idea what "now" is for this reader,
  // so rendering a time at build time would only guarantee a hydration mismatch.
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();

    let interval: ReturnType<typeof setInterval>;
    // Land on the minute boundary first, then hold that cadence.
    const timeout = setTimeout(
      () => {
        tick();
        interval = setInterval(tick, 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!now) {
    return null;
  }

  return (
    <footer className="mx-auto max-w-2xl pb-24 pt-8 sm:pb-28">
      <div className="mb-8 h-px w-16 bg-neutral-800" />
      <p className="text-sm text-neutral-500">
        <time dateTime={now.toISOString()} className="tabular-nums">
          {formatLocalTime(now, locale)}
        </time>{" "}
        {locale === "fr" ? "à" : "in"} {SITE_LOCATION.place[locale]}
      </p>
    </footer>
  );
}
