import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

import Navigation from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Uyende",
  description: "Anthony Uyende's personal website",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${GeistSans.className} ${inter.variable}`}>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ea192ba5-ae49-4299-8e5b-3abd3b4dcef5"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='black'/><circle cx='50' cy='25' r='6' fill='white'/><circle cx='67.5' cy='32.5' r='6' fill='white'/><circle cx='75' cy='50' r='6' fill='white'/><circle cx='67.5' cy='67.5' r='6' fill='white'/><circle cx='50' cy='75' r='6' fill='white'/><circle cx='32.5' cy='67.5' r='6' fill='white'/><circle cx='25' cy='50' r='6' fill='white'/><circle cx='32.5' cy='32.5' r='6' fill='white'/></svg>"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#171717] text-neutral-200 antialiased">
        <a
          href="#page-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-md bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-950 transition-transform duration-150 focus:translate-y-0 motion-reduce:transition-none"
        >
          Skip to content
        </a>
        <div
          id="page-content"
          tabIndex={-1}
          className="mx-auto max-w-4xl px-4 py-8 pb-32 outline-none sm:px-6 lg:px-8"
        >
          {children}
        </div>
        <Navigation />
        <Analytics />
      </body>
    </html>
  );
}
