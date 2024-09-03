"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Page() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleNameClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount === 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };

  return (
    <motion.main
      className="container flex items-start justify-center min-h-screen relative mx-auto scroll-my-12 overflow-auto p-4 mt-2 print:p-12 md:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <motion.h1
              className="text-4xl font-extrabold text-stone-900 mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={handleNameClick}
            >
              {RESUME_DATA.name}
            </motion.h1>
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <Badge>Easter Egg Found!</Badge>
              </motion.div>
            )}
            <ul className="list-disc list-inside text-stone-800">
              {[
                { id: 1, content: "Software engineer I - Data & AI" },
                { id: 2, content: <>
                  Currently building <Link href="https://www.boundary-ai.com/" className="inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    <span className="text-decoration-line: underline hover:font-medium">
                      Boundary AI
                    </span>
                    <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  </Link> - A startup revolutionizing qualitative feedback analysis using advanced AI and NLP
                </> },
                { id: 3, content: <>Check out my resume <Link className="text-decoration-line: underline hover:font-medium" href="/resume">here</Link></> },
                { id: 4, content: <span className="inline-flex items-center">
                  <Link href="https://cal.com/auyende" className="inline-flex items-center">
                    <span className="text-decoration-line: underline hover:font-medium">
                      Book a meeting
                    </span>
                    <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </span> },
                { id: 5, content: <Link href="mailto:anthony.m.uyende@gmail.com" className="inline-flex items-center">
                  <span className="text-decoration-line: underline hover:font-medium">
                    anthony.m.uyende@gmail.com
                  </span>
                  <SquareArrowOutUpRight className="ml-2 h-4 w-4" />
                </Link> },
              ].map((item) => (
                <motion.li
                  key={item.id}
                  className="mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                >
                  {item.content}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
