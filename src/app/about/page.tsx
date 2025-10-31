import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <section>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I&apos;m Anthony Uyende, born in Gabon and raised between Gabon and the USA. I&apos;m a programmer, writer, founder, and investor currently living in Montreal, Canada.
        </p>
        
                <p className="mt-4">
          I&apos;m currently building <a href="https://coalesc.xyz/" target="_blank" rel="noopener noreferrer">Coalesc</a>, an AI-powered platform that automates how accounting and finance teams collect, organize, and process financial documents. We&apos;re starting with firms that handle thousands of receipts, invoices, and bank statements every month — turning hours of manual sorting, renaming, and data entry into minutes of automation. Our goal is simple: eliminate the repetitive work in finance so teams can focus on insight, growth, and strategy.
        </p>
        
        <p className="mt-4">
          With a background in mathematics and computer science, I&apos;m passionate about using technology to solve complex problems and drive positive change in the world.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <ul className="list-disc list-inside">
          <li>Startups and entrepreneurship</li>
          <li>Renewable energy technologies</li>
          <li>Artificial Intelligence and its applications</li>
          <li>Climate change mitigation strategies</li>
          <li>Sustainable agriculture practices</li>
          <li>Economic growth and development</li>
        </ul>
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
