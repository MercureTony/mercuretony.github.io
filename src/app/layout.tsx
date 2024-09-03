import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Anthony Uyende",
  description: "Anthony Uyende's personal website",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="ea192ba5-ae49-4299-8e5b-3abd3b4dcef5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
