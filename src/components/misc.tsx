"use client";

import { motion } from "framer-motion";
import { CryptoFacts } from "./crypto-facts";
import { CurrentlyReading } from "./currently-reading";

export function Misc() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <CryptoFacts />
      <CurrentlyReading />
    </motion.div>
  );
} 