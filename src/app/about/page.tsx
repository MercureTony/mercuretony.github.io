import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <section>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I&apos;m Anthony Uyende, a founder, programmer, and writer based in Montreal, Canada.
        </p>

        <p className="mt-4">
          I&apos;m currently building <a href="https://coalesc.ai/" target="_blank" rel="noopener noreferrer">Coalesc</a>, an AI workspace for accounting firms.
        </p>

        <p className="mt-4">
          Every accounting engagement starts with the same messy preparation layer: client documents arrive through email, portals, uploads, PDFs, statements, receipts, and spreadsheets. Before bookkeeping, tax, compilation, or assurance work can begin, someone has to collect the right documents, identify what is missing, classify files, follow up with clients, and determine whether the file is actually ready.
        </p>

        <p className="mt-4">
          Coalesc is focused on that layer. We help accounting teams prepare client files before the work begins: document intake, classification, missing items, follow-ups, file readiness, and structured handoff into the tools firms already use.
        </p>

        <p className="mt-4">
          My background is in mathematics, computer science, data, and AI engineering. I&apos;ve worked across data science, analytics engineering, and software at companies including Shopify, Wealthsimple, Unity, and 1Password.
        </p>

        <p className="mt-4">
          I&apos;m interested in building software for industries where trust, judgment, and operational complexity matter. Accounting is one of those industries.
        </p>

        <p className="mt-4">
          More broadly, I think a lot about startups, AI infrastructure, economic development, energy, and the systems that shape how societies grow.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Elsewhere</h3>
        <ul className="list-disc list-inside">
          {RESUME_DATA.contact.social.map((platform, index) => (
            <li key={index}>
              <a href={platform.url} className="text-neutral-400 hover:underline">{platform.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">More Information</h3>
        <p>
          For a detailed overview of my professional experience and skills, please see my{' '}
          <Link href="/resume" className="text-neutral-400 hover:underline">
            resume
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
