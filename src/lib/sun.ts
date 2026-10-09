// Where the sun is over Montreal, from first principles (NOAA's solar
// calculator equations), so sunrise and twilight need no network. Accurate to
// about a minute, which is all a page needs.
//
// src/lib/sky-inline.js carries a copy of solarElevation for the pre-paint
// script; keep the two in step.

export const MONTREAL = { lat: 45.5019, lon: -73.5674 };

const RAD = Math.PI / 180;

function mod(value: number, size: number): number {
  return ((value % size) + size) % size;
}

/** Declination and equation of time for an instant. */
function solarCoords(date: Date) {
  const jd = date.getTime() / 86400000 + 2440587.5;
  const t = (jd - 2451545) / 36525;
  const meanLong = mod(280.46646 + t * (36000.76983 + t * 0.0003032), 360);
  const meanAnomaly = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  const eccentricity = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  const m = meanAnomaly * RAD;
  const centre =
    Math.sin(m) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * m) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * m) * 0.000289;
  const trueLong = meanLong + centre;
  const omega = (125.04 - 1934.136 * t) * RAD;
  const apparentLong = trueLong - 0.00569 - 0.00478 * Math.sin(omega);
  const obliquity0 =
    23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60;
  const obliquity = (obliquity0 + 0.00256 * Math.cos(omega)) * RAD;
  const declination = Math.asin(Math.sin(obliquity) * Math.sin(apparentLong * RAD));
  const y = Math.tan(obliquity / 2) ** 2;
  const l0 = meanLong * RAD;
  const equationOfTime =
    (4 / RAD) *
    (y * Math.sin(2 * l0) -
      2 * eccentricity * Math.sin(m) +
      4 * eccentricity * y * Math.sin(m) * Math.cos(2 * l0) -
      0.5 * y * y * Math.sin(4 * l0) -
      1.25 * eccentricity * eccentricity * Math.sin(2 * m));
  return { declination, equationOfTime };
}

/** The sun's elevation above the horizon, in degrees; negative after sunset. */
export function solarElevation(
  date: Date,
  lat = MONTREAL.lat,
  lon = MONTREAL.lon,
): number {
  const { declination, equationOfTime } = solarCoords(date);
  const minutesUtc =
    date.getUTCHours() * 60 + date.getUTCMinutes() + date.getUTCSeconds() / 60;
  const trueSolarMinutes = mod(minutesUtc + equationOfTime + 4 * lon, 1440);
  const hourAngle = (trueSolarMinutes / 4 - 180) * RAD;
  const latitude = lat * RAD;
  const cosZenith =
    Math.sin(latitude) * Math.sin(declination) +
    Math.cos(latitude) * Math.cos(declination) * Math.cos(hourAngle);
  return 90 - Math.acos(Math.min(1, Math.max(-1, cosZenith))) / RAD;
}

/** Sunrise and sunset instants for a civil date, upper limb with refraction. */
export function sunTimes(
  year: number,
  month: number,
  day: number,
  lat = MONTREAL.lat,
  lon = MONTREAL.lon,
): { sunrise: Date; sunset: Date } {
  const midnightUtc = Date.UTC(year, month - 1, day);
  const solarNoon = new Date(midnightUtc + (720 - 4 * lon) * 60000);
  const { declination, equationOfTime } = solarCoords(solarNoon);
  const latitude = lat * RAD;
  const cosHourAngle =
    Math.cos(90.833 * RAD) / (Math.cos(latitude) * Math.cos(declination)) -
    Math.tan(latitude) * Math.tan(declination);
  const hourAngle = Math.acos(Math.min(1, Math.max(-1, cosHourAngle))) / RAD;
  return {
    sunrise: new Date(midnightUtc + (720 - 4 * (lon + hourAngle) - equationOfTime) * 60000),
    sunset: new Date(midnightUtc + (720 - 4 * (lon - hourAngle) - equationOfTime) * 60000),
  };
}
