// Every definition of Coalesc that has lived on the About page, oldest first.
// Regenerate the list with `pnpm thesis` after the hero paragraph changes, then
// write the note: one line on why this version replaced the one before.

export interface ThesisVersion {
  version: number;
  /** The day it went live on the site. */
  date: string;
  /** The commit that introduced it. */
  sha: string;
  domain: string | null;
  /** The paragraph, word for word. */
  hero: string;
  /** Why this replaced the previous version. In my own words. */
  note?: string;
}

export const THESIS_HISTORY: ThesisVersion[] = [
  {
    version: 1,
    date: "2024-12-30",
    sha: "b2a6825",
    domain: null,
    hero:
      "I'm currently building Coalesc, a startup building AI agents to help finance teams make better decisions. We're starting with reconciliations, by automating the process of matching transactions and identifying discrepancies reducing the time to close from 2 days to 10 minutes.",
    note:
      "Where it started: a close that took two days, and the idea that an agent could do the matching.",
  },
  {
    version: 2,
    date: "2025-03-04",
    sha: "e21e3fb",
    domain: "coalesc.xyz",
    hero:
      "I'm currently building Coalesc, an AI-driven platform for financial audits. We're leveraging intelligent AI agents to transform how auditors work by automating document vouching—a critical but manual process where auditors spend 8-16 hours per client verifying transactions against supporting documents. Our AI agents autonomously process, analyze, and match documents with high accuracy, reducing this time-consuming task from days to minutes and enabling auditors to focus on what matters most: providing strategic insights and ensuring financial accuracy.",
    note:
      "Reconciliation was a task inside a close, not a company. Audit vouching at least had a number attached: 8 to 16 hours per client.",
  },
  {
    version: 3,
    date: "2025-04-11",
    sha: "ab05175",
    domain: "coalesc.xyz",
    hero:
      "I'm currently building Coalesc, an AI-native platform designed to eliminate manual work in finance. We're deploying intelligent AI agents to capture, secure, and organize financial documents — automating workflows and freeing finance teams from repetitive tasks. Our mission is to turn hours of manual document handling into minutes of automation, helping finance teams focus on growth and strategy.",
    note:
      "Vouching was one task. We zoomed out to \"manual work in finance\", too far, as it turned out.",
  },
  {
    version: 4,
    date: "2025-10-31",
    sha: "ed347ab",
    domain: "coalesc.xyz",
    hero:
      "I'm currently building Coalesc, an AI-powered platform that automates how accounting and finance teams collect, organize, and process financial documents. We're starting with firms that handle thousands of receipts, invoices, and bank statements every month — turning hours of manual sorting, renaming, and data entry into minutes of automation. Our goal is simple: eliminate the repetitive work in finance so teams can focus on insight, growth, and strategy.",
    note:
      "Every finance workflow starts with the same mess: documents. We stopped describing outcomes and named the input.",
  },
  {
    version: 5,
    date: "2026-02-19",
    sha: "d290511",
    domain: "coalesc.ai",
    hero:
      "I'm currently building Coalesc, the AI document infrastructure layer for accounting. Every workflow in accounting — bookkeeping, tax prep, audit, compliance — starts with the same problem: chaotic documents that someone has to make sense of before the real work begins. Coalesc owns that layer. We ingest, classify, split, and structure financial documents so they arrive as usable truth, not raw chaos. We're working on-site with firms during tax season, proving the system where it matters most.",
    note:
      "Tax season, on site at firms. The customer was never \"finance teams\". It was accounting firms, and the product was infrastructure.",
  },
  {
    version: 6,
    date: "2026-06-27",
    sha: "f0237c4",
    domain: "coalesc.ai",
    hero:
      "I'm currently building Coalesc, the preparation layer for accounting firms.",
    note:
      "A firm asked one question: is this file ready to work on? Documents were the input. Preparation was the job.",
  },
  {
    version: 7,
    date: "2026-09-18",
    sha: "fbeff8b",
    domain: "coalesc.ai",
    hero:
      "I'm currently building Coalesc around a simple thesis: the fundamental unit of accounting automation is the engagement, not the task.",
    note:
      "Two firms, two entry points, one production line. Preparation was a stage. The engagement is the thing.",
  },
  {
    version: 8,
    date: "2026-09-18",
    sha: "c773546",
    domain: "coalesc.ai",
    hero:
      "I'm currently building Coalesc, software that executes accounting work.",
    note:
      "Same thesis, nine words. \"Executes\" was the verb that had been missing all along.",
  },
];

export const CURRENT_THESIS = THESIS_HISTORY[THESIS_HISTORY.length - 1];
