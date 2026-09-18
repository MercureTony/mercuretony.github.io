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
          I&apos;m currently building <a href="https://coalesc.ai/" target="_blank" rel="noopener noreferrer">Coalesc</a> around a simple thesis: the fundamental unit of accounting automation is the engagement, not the task.
        </p>

        <p className="mt-4">
          Accounting work is the process of moving an engagement from incomplete, untrusted evidence to a complete, defensible, review-ready state. Yet the truth of that engagement is still maintained manually across documents, email, portals, spreadsheets, tax software, ledgers, workpapers, and the accountant&apos;s own head.
        </p>

        <p className="mt-4">
          I believe every accounting engagement should have a live, machine-understood state. The system should know what evidence is expected, what has arrived, what can be trusted, what changed from prior periods, what procedures the firm applies, what has been completed, what remains unresolved, and what actually requires professional judgment.
        </p>

        <p className="mt-4">
          Coalesc is being built to own that transition. It continuously understands the engagement, executes what it can, preserves evidence and provenance, and moves the work toward review. The long-term vision is simple: accountants should start at review. Today, that starts with intake, completeness, client follow-up, and bank preparation.
        </p>

        <p className="mt-4">
          My background is in mathematics, computer science, data, and AI engineering. I&apos;ve worked across data science, analytics engineering, and software at companies including Shopify, Wealthsimple, Unity, and 1Password.
        </p>

        <p className="mt-4">
          I&apos;m interested in building software for industries where trust, judgment, and operational complexity matter. More broadly, I think a lot about startups, AI infrastructure, economic development, energy, and the systems that shape how societies grow.
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
