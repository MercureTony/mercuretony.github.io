import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writings | Anthony Uyende",
  description: "Thoughts, insights, and experiences on various topics that interest me.",
};

export default function WritingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 