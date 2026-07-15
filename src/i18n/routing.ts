import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English is the default and served without a prefix (/about);
  // French is served under a prefix (/fr/about).
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
