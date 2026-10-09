// The colour the end of the name's gradient takes under Montreal's sky.
// Identical to today's neutral-400 whenever the sun is well up; warm through
// the golden hour, violet in the blue hour, a notch cooler and dimmer at night.
//
// src/lib/sky-inline.js carries a copy for the pre-paint script; keep in step.

type Rgb = [number, number, number];

export const NEUTRAL_400 = "#a3a3a3";

// Elevation in degrees -> colour. Linear between stops.
const STOPS: [number, Rgb][] = [
  [8, [163, 163, 163]], // day: neutral-400, unchanged
  [0, [184, 160, 128]], // sun on the horizon: amber grey
  [-6, [150, 146, 168]], // civil twilight: violet grey
  [-12, [134, 138, 150]], // night
];

function mix(a: Rgb, b: Rgb, t: number): Rgb {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

function fromElevation(elevation: number): Rgb {
  if (elevation >= STOPS[0][0]) return STOPS[0][1];
  for (let i = 0; i < STOPS.length - 1; i++) {
    const [hi, hiColor] = STOPS[i];
    const [lo, loColor] = STOPS[i + 1];
    if (elevation <= hi && elevation >= lo) return mix(hiColor, loColor, (hi - elevation) / (hi - lo));
  }
  return STOPS[STOPS.length - 1][1];
}

/** WMO weather codes as Open-Meteo reports them. */
export const isOvercast = (code: number) => code === 3;
export const isSnowing = (code: number) => (code >= 71 && code <= 77) || code === 85 || code === 86;
export const isThunderstorm = (code: number) => code >= 95 && code <= 99;
export const isHeavyRain = (code: number) => code === 65 || code === 67 || code === 82;

export function skyColor(elevation: number, weatherCode?: number): string {
  let rgb = fromElevation(elevation);
  if (weatherCode !== undefined) {
    if (isOvercast(weatherCode)) {
      // Flatten the chroma: an overcast sky has no golden hour.
      const grey = (rgb[0] + rgb[1] + rgb[2]) / 3;
      rgb = mix(rgb, [grey, grey, grey], 0.6);
    } else if (isSnowing(weatherCode)) {
      rgb = mix(rgb, [255, 255, 255], 0.08);
    } else if (isThunderstorm(weatherCode)) {
      rgb = mix(rgb, [0, 0, 0], 0.1);
    }
  }
  return `#${rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}
