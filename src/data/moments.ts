// Montreal Time: the moments when the home page says one true line.
//
// Every line below is a sentence from one of the essays, or scripture quoted
// in one, word for word. scripts/check-moments.mjs fails the build if a line
// is not found verbatim in its essay. On an ordinary day nothing resolves and
// nothing is rendered.
import { type CivilDateTime, dayNumber, easterSunday, montrealParts, nthWeekday } from "../lib/montreal-time";
import { isHeavyRain, isThunderstorm } from "../lib/sky";
import { sunTimes } from "../lib/sun";

export interface MomentContext {
  now: Date;
  montreal: CivilDateTime;
  /** The visitor's own hour, for the one moment keyed to them rather than to Montreal. */
  visitorHour: number;
  /** Montreal's sunrise and sunset for its current civil date. */
  sunrise: Date;
  sunset: Date;
  /** Open-Meteo WMO code for Montreal right now, when it could be fetched. */
  weatherCode?: number;
}

export interface Phase {
  dateline: string;
  line: string;
  cite?: string;
  href: string;
}

interface Moment {
  id: string;
  resolve(ctx: MomentContext): Phase | null;
}

// essay: the slug under src/content/articles. text: the sentence as written there.
const LINES = {
  gethsemane: {
    essay: "love-of-god",
    text: "My soul is overwhelmed with sorrow to the point of death.",
  },
  forgive: {
    essay: "love-of-god",
    text: "Father, forgive them, for they do not know what they are doing.",
  },
  finished: {
    essay: "love-of-god",
    text: "It is finished.",
  },
  risen: {
    essay: "manifesto",
    text: "I know that He rose victoriously, demonstrating His power over death and giving hope of eternal life.",
  },
  job: {
    essay: "storms",
    text: "The Lord gave, and the Lord has taken away; blessed be the name of the Lord.",
  },
  light: {
    essay: "manifesto",
    text: "I proclaim that darkness will retreat before His light, and that His love will triumph.",
  },
  glory: {
    essay: "love-of-god",
    text: "He left His glory, became a simple man, and lived a sinless life to save many.",
  },
  respec: {
    essay: "the-game-youre-already-playing",
    text: "The game lets you respec at any time. Most players just never click the button.",
  },
  still: {
    essay: "storms",
    text: "Peace, be still.",
  },
  rain: {
    essay: "love-of-god",
    text: "…and sends rain on the righteous and the unrighteous.",
  },
  sunrise: {
    essay: "love-of-god",
    text: "He causes his sun to rise on the evil and the good.",
  },
  threeAm: {
    essay: "finding-my-why",
    text: "I spent countless nights learning HTML, CSS, and JavaScript, often coding until 3 AM despite having school the next day.",
  },
};

const essayHref = (key: keyof typeof LINES, anchor?: string) =>
  `/writings/${LINES[key].essay}${anchor ? `#${anchor}` : ""}`;

function daysFromEaster(ctx: MomentContext): number {
  const { year, month, day } = ctx.montreal;
  const easter = easterSunday(year);
  return dayNumber(year, month, day) - dayNumber(year, easter.month, easter.day);
}

const isDate = (ctx: MomentContext, month: number, day: number) =>
  ctx.montreal.month === month && ctx.montreal.day === day;

// Earlier entries win. The calendar outranks the sky, which outranks the visitor's clock.
export const MOMENTS: Moment[] = [
  {
    id: "gethsemane",
    // Maundy Thursday, once the sun has set over Montreal. Holy Saturday stays silent.
    resolve: (ctx) =>
      daysFromEaster(ctx) === -3 && ctx.now >= ctx.sunset
        ? {
            dateline: "The night before Good Friday.",
            line: LINES.gethsemane.text,
            cite: "Matthew 26:38",
            href: essayHref("gethsemane", "2-a-journey-of-suffering-and-love"),
          }
        : null,
  },
  {
    id: "good-friday",
    // The line changes at three in the afternoon, Montreal time.
    resolve: (ctx) =>
      daysFromEaster(ctx) === -2
        ? ctx.montreal.hour < 15
          ? {
              dateline: "Good Friday.",
              line: LINES.forgive.text,
              cite: "Luke 23:34",
              href: essayHref("forgive", "2-a-journey-of-suffering-and-love"),
            }
          : {
              dateline: "Good Friday.",
              line: LINES.finished.text,
              cite: "John 19:30",
              href: essayHref("finished", "2-a-journey-of-suffering-and-love"),
            }
        : null,
  },
  {
    id: "easter",
    // From Montreal's sunrise on Easter Sunday.
    resolve: (ctx) =>
      daysFromEaster(ctx) === 0 && ctx.now >= ctx.sunrise
        ? { dateline: "Easter Sunday.", line: LINES.risen.text, href: essayHref("risen", "i-know") }
        : null,
  },
  {
    id: "thanksgiving",
    // The second Monday of October.
    resolve: (ctx) =>
      ctx.montreal.month === 10 && ctx.montreal.day === nthWeekday(ctx.montreal.year, 10, 1, 2)
        ? {
            dateline: "Thanksgiving in Canada.",
            line: LINES.job.text,
            cite: "Job 1:21",
            href: essayHref("job", "5-be-thankful-bonus"),
          }
        : null,
  },
  {
    id: "longest-night",
    // From sunset on December 21 to sunrise on the 22nd. The solstice falls on
    // the 21st or 22nd; the night between them is the long one either way.
    resolve: (ctx) =>
      (isDate(ctx, 12, 21) && ctx.now >= ctx.sunset) || (isDate(ctx, 12, 22) && ctx.now < ctx.sunrise)
        ? {
            dateline: "The longest night of the year in Montreal.",
            line: LINES.light.text,
            href: essayHref("light", "i-proclaim"),
          }
        : null,
  },
  {
    id: "christmas",
    resolve: (ctx) =>
      isDate(ctx, 12, 24) && ctx.now >= ctx.sunset
        ? { dateline: "Christmas Eve.", line: LINES.glory.text, href: essayHref("glory", "5-a-love-that-saves") }
        : isDate(ctx, 12, 25)
          ? { dateline: "Christmas Day.", line: LINES.glory.text, href: essayHref("glory", "5-a-love-that-saves") }
          : null,
  },
  {
    id: "new-year",
    resolve: (ctx) =>
      isDate(ctx, 1, 1)
        ? { dateline: "January 1.", line: LINES.respec.text, href: essayHref("respec", "changing-quests") }
        : null,
  },
  {
    id: "storm",
    resolve: (ctx) =>
      ctx.weatherCode !== undefined && isThunderstorm(ctx.weatherCode)
        ? {
            dateline: "A storm over Montreal right now.",
            line: LINES.still.text,
            cite: "Mark 4:39",
            href: essayHref("still", "2-be-calm"),
          }
        : null,
  },
  {
    id: "heavy-rain",
    resolve: (ctx) =>
      ctx.weatherCode !== undefined && isHeavyRain(ctx.weatherCode)
        ? {
            dateline: "Heavy rain over Montreal.",
            line: LINES.rain.text,
            cite: "Matthew 5:45",
            href: essayHref("rain", "1-god-s-love-is-unconditional"),
          }
        : null,
  },
  {
    id: "sunrise",
    // Ten minutes before the sun clears Montreal's horizon to twenty-five after.
    resolve: (ctx) => {
      const minutes = (ctx.now.getTime() - ctx.sunrise.getTime()) / 60000;
      return minutes >= -10 && minutes <= 25
        ? {
            dateline: "The sun is rising over Montreal.",
            line: LINES.sunrise.text,
            cite: "Matthew 5:45",
            href: essayHref("sunrise", "1-god-s-love-is-unconditional"),
          }
        : null;
    },
  },
  {
    id: "three-am",
    // The one moment keyed to the visitor's clock, not Montreal's.
    resolve: (ctx) =>
      ctx.visitorHour === 3
        ? { dateline: "3 AM where you are.", line: LINES.threeAm.text, href: essayHref("threeAm") }
        : null,
  },
];

export function buildContext(now: Date, weatherCode?: number): MomentContext {
  const montreal = montrealParts(now);
  const { sunrise, sunset } = sunTimes(montreal.year, montreal.month, montreal.day);
  return { now, montreal, visitorHour: now.getHours(), sunrise, sunset, weatherCode };
}

/** The one line for this instant, or null on an ordinary day. */
export function resolveMoment(ctx: MomentContext): (Phase & { id: string }) | null {
  for (const moment of MOMENTS) {
    const phase = moment.resolve(ctx);
    if (phase) return { id: moment.id, ...phase };
  }
  return null;
}
