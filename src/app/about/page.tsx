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
          I&apos;m currently building Coalesc, a startup building AI agents to help finance teams make better decisions. We&apos;re starting with reconciliations, by automating the process of matching transactions and identifying discrepancies reducing the time to close from 2 days to 10 minutes.
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
