"use client";

import { useEffect } from "react";

import { montrealParts, parseReplay } from "@/lib/montreal-time";
import { isHeavyRain, isOvercast, isSnowing, isThunderstorm, skyColor } from "@/lib/sky";
import { solarElevation } from "@/lib/sun";
import { useMontrealWeather } from "@/lib/use-montreal-weather";

function band(elevation: number): string {
  if (elevation >= 8) return "day";
  if (elevation >= 0) return "golden hour";
  if (elevation >= -6) return "civil twilight";
  if (elevation >= -12) return "nautical twilight";
  return "night";
}

function weatherWord(code: number): string {
  if (code === 0) return "clear";
  if (code <= 2) return "partly cloudy";
  if (isOvercast(code)) return "overcast";
  if (code === 45 || code === 48) return "fog";
  if (isThunderstorm(code)) return "thunderstorm";
  if (isSnowing(code)) return "snow";
  if (isHeavyRain(code)) return "heavy rain";
  if (code >= 51 && code <= 82) return "rain";
  return "";
}

/**
 * Lights the name on the home page by the real sun over Montreal: sets the
 * gradient's end colour on <html>, which the inline script in <head> already
 * set before first paint, and adds the live dateline as the name's title.
 * Renders nothing.
 */
export function MontrealLight({ target = "name" }: { target?: string }) {
  const weather = useMontrealWeather();

  useEffect(() => {
    const apply = () => {
      const replay = parseReplay(window.location.search);
      const now = replay.at ?? new Date();
      const code = replay.weatherCode ?? weather.code;
      const elevation = solarElevation(now);
      document.documentElement.style.setProperty("--sky", skyColor(elevation, code));

      const name = document.getElementById(target);
      if (name) {
        const { hour, minute } = montrealParts(now);
        const clock = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        const sky = code === undefined ? "" : weatherWord(code);
        name.title = ["Montréal", clock, band(elevation), sky].filter(Boolean).join(" · ");
      }
    };
    apply();
    const timer = window.setInterval(apply, 60_000);
    return () => window.clearInterval(timer);
  }, [weather.code, target]);

  return null;
}
