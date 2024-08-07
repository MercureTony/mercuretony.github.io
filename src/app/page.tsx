import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container flex items-start justify-center min-h-screen relative mx-auto scroll-my-12 overflow-auto p-4 mt-2 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-extrabold text-stone-900 mb-4">{RESUME_DATA.name}</h1>
            <ul className="list-disc list-inside text-stone-800">
              <li className="mb-1">Software engineer I - Data & AI</li>
              <li className="mb-1">Currently <span className="font-bold">open</span> to new opportunities - Preference for remote or hybrid roles</li>
              <li className="mb-1">Check out my resume <Link className="text-blue-500 hover:text-blue-700" href="/resume">here</Link></li>
              <li className="mb-1">Contact me at <Link className="text-decoration-line: underline hover:font-medium" href="mailto:anthony.m.uyende@gmail.com">anthony.m.uyende@gmail.com</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
