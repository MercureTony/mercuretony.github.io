import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Navigation from "@/components/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react"

import "../globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Anthony Uyende",
  description: "Anthony Uyende's personal website",
};

// Keep Inter for the resume page
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.className} ${inter.variable}`}>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="ea192ba5-ae49-4299-8e5b-3abd3b4dcef5"></script>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='black'/><circle cx='50' cy='25' r='6' fill='white'/><circle cx='67.5' cy='32.5' r='6' fill='white'/><circle cx='75' cy='50' r='6' fill='white'/><circle cx='67.5' cy='67.5' r='6' fill='white'/><circle cx='50' cy='75' r='6' fill='white'/><circle cx='32.5' cy='67.5' r='6' fill='white'/><circle cx='25' cy='50' r='6' fill='white'/><circle cx='32.5' cy='32.5' r='6' fill='white'/></svg>"
        />
      </head>
      <body className="min-h-screen bg-[#171717] text-neutral-200">
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
          <Navigation />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
