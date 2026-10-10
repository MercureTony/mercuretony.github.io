import { Literata } from "next/font/google";

// The essays' face: a text serif drawn for long reads on phones, with a true
// italic (Geist, the site's chrome, ships none). Without the opsz axis Google
// serves the small wght-only files. Self-hosted by next/font at build time.
export const literata = Literata({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-literata",
});
