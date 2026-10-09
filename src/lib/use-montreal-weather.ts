"use client";

import { useEffect, useState } from "react";

// Open-Meteo: free, no key, CORS-enabled. One request per visit, shared
// between the light and the moment, cached for fifteen minutes. Any failure
// means "no weather", never an error on the page.
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=45.5019&longitude=-73.5674&current=weather_code&timezone=America%2FToronto";
const KEY = "montreal-weather";
const TTL = 15 * 60 * 1000;

let inflight: Promise<number | null> | null = null;

function readCache(): number | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const { code, at } = JSON.parse(raw) as { code: number; at: number };
    return Date.now() - at < TTL ? code : null;
  } catch {
    return null;
  }
}

async function fetchCode(): Promise<number | null> {
  const cached = readCache();
  if (cached !== null) return cached;
  try {
    const response = await fetch(URL);
    if (!response.ok) return null;
    const data = (await response.json()) as { current?: { weather_code?: number } };
    const code = data.current?.weather_code;
    if (typeof code !== "number") return null;
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ code, at: Date.now() }));
    } catch {
      /* private mode; fine */
    }
    return code;
  } catch {
    return null;
  }
}

export function useMontrealWeather(): { code?: number } {
  const [code, setCode] = useState<number | undefined>(undefined);

  useEffect(() => {
    let alive = true;
    inflight = inflight ?? fetchCode();
    inflight.then((result) => {
      if (alive && result !== null) setCode(result);
    });
    return () => {
      alive = false;
    };
  }, []);

  return { code };
}
