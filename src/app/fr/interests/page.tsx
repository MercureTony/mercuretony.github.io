"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { INTERESTS_DATA_FR } from "@/data/interests-data.fr";
import type { Resource } from "@/data/interests-data";

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="mt-4 space-y-1 border-t border-neutral-800 pt-3">
      {resources.map((resource) => (
        <a
          key={`${resource.url}-${resource.title}`}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group -mx-2 block rounded-md p-2 transition-colors duration-150 hover:bg-neutral-800/50"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <span className="text-neutral-300 group-hover:text-white">
              {resource.title}
            </span>
            <div className="flex shrink-0 items-center gap-2 text-xs text-neutral-500">
              <span className="rounded-full bg-neutral-800 px-2 py-1">
                {resource.type}
              </span>
              <span className="tabular-nums">{resource.date}</span>
            </div>
          </div>
          <span className="sr-only">Ouvre dans un nouvel onglet</span>
        </a>
      ))}
    </div>
  );
}

export default function InterestsPageFr() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setExpandedItems((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  return (
    <div lang="fr" className="mx-auto mb-32 max-w-2xl space-y-6">\n      <LanguageSwitcher locale="fr" englishHref="/interests" frenchHref="/fr/interests" />
      <h1 className="mb-4 text-2xl font-bold">Intérêts</h1>

      <p className="mb-6">Une collection de sujets qui influencent ma façon de penser, de construire et d’écrire.</p>

      <div className="space-y-8">
        {INTERESTS_DATA_FR.map((interest) => (
          <section key={interest.category} className="space-y-4">
            <h2 className="text-xl font-semibold text-neutral-200">
              {interest.category}
            </h2>

            <p className="text-neutral-400">{interest.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {interest.items.map((item) => {
                const key = `${interest.category}-${item.name}`;
                const isExpanded = Boolean(expandedItems[key]);
                const hasResources = Boolean(item.resources?.length);
                const panelId = `resources-${slugify(key)}`;

                return (
                  <article
                    key={item.name}
                    className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 transition-colors duration-150 focus-within:border-neutral-700"
                  >
                    {hasResources ? (
                      <button
                        type="button"
                        onClick={() => toggleItem(key)}
                        aria-expanded={isExpanded}
                        aria-controls={panelId}
                        className="-m-2 block w-[calc(100%+1rem)] rounded-md p-2 text-left transition-colors duration-150 hover:bg-neutral-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                      >
                        <span className="mb-2 flex items-center justify-between gap-3">
                          <span className="font-medium text-neutral-200">{item.name}</span>
                          <ChevronRight
                            className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-150 ${isExpanded ? "rotate-90" : ""}`}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="block text-sm text-neutral-400">
                          {item.description}
                        </span>
                      </button>
                    ) : (
                      <div>
                        <h3 className="mb-2 font-medium text-neutral-200">{item.name}</h3>
                        <p className="text-sm text-neutral-400">{item.description}</p>
                      </div>
                    )}

                    {hasResources && isExpanded ? (
                      <div id={panelId}>
                        <ResourceList resources={item.resources!} />
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 border-t border-neutral-800 pt-8">
        <h2 className="mb-4 text-xl font-semibold text-neutral-200">Pour aller plus loin</h2>
        <p className="mb-4 text-neutral-400">
          Pour une liste de livres, articles et ressources liés à ces sujets, consultez ma{" "}
          <Link href="/fr/readings" className="text-neutral-300 underline-offset-4 hover:underline">
            page de lectures
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
