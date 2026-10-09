// Montreal's clock and calendar, computed in the visitor's browser.

export const MONTREAL_TZ = "America/Toronto";

export interface CivilDateTime {
  year: number;
  month: number; // 1-12
  day: number;
  hour: number; // 0-23
  minute: number;
  weekday: number; // 0 = Sunday
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const formatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: MONTREAL_TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  weekday: "short",
  hour12: false,
});

/** The wall clock in Montreal for an instant. */
export function montrealParts(date: Date): CivilDateTime {
  const parts: Record<string, string> = {};
  for (const part of formatter.formatToParts(date)) parts[part.type] = part.value;
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour) % 24, // some engines print midnight as 24
    minute: Number(parts.minute),
    weekday: WEEKDAYS.indexOf(parts.weekday),
  };
}

/** The instant at which Montreal's clock reads the given civil time. */
export function montrealToInstant(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0,
): Date {
  const wanted = Date.UTC(year, month - 1, day, hour, minute);
  let guess = wanted;
  // Two passes settle the offset on either side of a DST change.
  for (let i = 0; i < 2; i++) {
    const p = montrealParts(new Date(guess));
    const seen = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
    guess += wanted - seen;
  }
  return new Date(guess);
}

/** Days since the epoch for a civil date, so dates can be compared and offset. */
export function dayNumber(year: number, month: number, day: number): number {
  return Math.round(Date.UTC(year, month - 1, day) / 86400000);
}

/** Western Easter Sunday for a year (the anonymous Gregorian computus). */
export function easterSunday(year: number): { month: number; day: number } {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

/** The nth given weekday of a month, e.g. the second Monday of October. */
export function nthWeekday(year: number, month: number, weekday: number, n: number): number {
  const first = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  return 1 + ((weekday - first + 7) % 7) + (n - 1) * 7;
}

/**
 * Replay a moment from the address bar: ?at=2027-03-26T15:30 (Montreal
 * time) and ?wx=95 (an Open-Meteo weather code). Harmless on the live site,
 * and the only way to see Good Friday in October.
 */
export function parseReplay(search: string): { at?: Date; weatherCode?: number } {
  const params = new URLSearchParams(search);
  const out: { at?: Date; weatherCode?: number } = {};
  const at = params.get("at");
  if (at) {
    const m = at.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/);
    if (m) {
      out.at = montrealToInstant(
        Number(m[1]),
        Number(m[2]),
        Number(m[3]),
        m[4] ? Number(m[4]) : 12,
        m[5] ? Number(m[5]) : 0,
      );
    }
  }
  const wx = params.get("wx");
  if (wx && /^\d{1,2}$/.test(wx)) out.weatherCode = Number(wx);
  return out;
}
