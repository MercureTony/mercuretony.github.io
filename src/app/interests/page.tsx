"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { INTERESTS_DATA, type Resource } from "@/data/interests-data";

function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="mt-4 space-y-2">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 -mx-2 rounded hover:bg-neutral-800/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-neutral-300">{resource.title}</span>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <span className="px-2 py-1 rounded-full bg-neutral-800">
                {resource.type}
              </span>
              <span>{resource.date}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function InterestsPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (category: string, itemName: string) => {
    const key = `${category}-${itemName}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">Interests</h1>
      
      <p className="mb-6">
        A collection of topics and areas that drive my curiosity and inform my work. 
        These interests shape my approach to problem-solving and influence the projects I choose to pursue.
      </p>

      <div className="space-y-8">
        {INTERESTS_DATA.map((interest) => (
          <section key={interest.category} className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-200">
              {interest.category}
            </h2>
            
            <p className="text-neutral-400">
              {interest.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {interest.items.map((item) => {
                const isExpanded = expandedItems[`${interest.category}-${item.name}`];
                
                return (
                  <motion.div
                    key={item.name}
                    className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <button
                      onClick={() => toggleItem(interest.category, item.name)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-neutral-200">
                          {item.name}
                        </h3>
                        {item.resources && (
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                          />
                        )}
                      </div>
                      <p className="text-sm text-neutral-400">
                        {item.description}
                      </p>
                    </button>
                    
                    {isExpanded && item.resources && (
                      <ResourceList resources={item.resources} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 pt-8 border-t border-neutral-800">
        <h2 className="text-xl font-semibold text-neutral-200 mb-4">
          Further Reading
        </h2>
        <p className="text-neutral-400 mb-4">
          For a curated list of books, articles, and resources related to these topics, 
          visit my <Link href="/readings" className="text-neutral-300 hover:underline">readings page</Link>.
        </p>
      </section>
    </div>
  );
}
