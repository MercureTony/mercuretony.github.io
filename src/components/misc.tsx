"use client";

import { motion } from "framer-motion";
import type { ArticleMeta } from "@/data/moments";
import { CurrentlyReading } from "./currently-reading";
import { MontrealMoment } from "./montreal-moment";

export function Misc({ articles }: { articles?: ArticleMeta[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <MontrealMoment articles={articles} />
      <CurrentlyReading />
    </motion.div>
  );
}
