"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";
import { OPPORTUNITIES_DATA } from "@/data/opportunities-data";

export function OpportunitiesSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-200">Open Opportunities</h2>
      
      <div className="space-y-2">
        <h3 className="text-neutral-200">Looking for startup co-founder</h3>
        <p className="text-sm text-neutral-400">
          Seeking a technical co-founder for Coalesc. Must be passionate about AI and finance, with experience in building scalable systems.
        </p>
        <div className="flex gap-2 pt-2">
          <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">startup</span>
          <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">AI</span>
          <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">fintech</span>
          <span className="text-xs px-2 py-1 bg-neutral-800 rounded-full text-neutral-400">co-founder</span>
        </div>
      </div>
    </section>
  );
} 