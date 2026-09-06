/**
 * Where the site's clock ticks. Kept apart from RESUME_DATA so the footer,
 * which renders on every page, doesn't pull the whole resume dataset (and its
 * icon components) into the client bundle.
 */
export const SITE_LOCATION = {
  /** IANA zone. Montreal is an alias of America/Toronto, which is the canonical id. */
  timeZone: "America/Toronto",
  place: {
    en: "Montreal, Canada",
    fr: "Montréal, Canada",
  },
} as const;
