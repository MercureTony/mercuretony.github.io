import React from 'react';
import { RESUME_DATA } from '@/data/resume-data';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <section className="text-gray-700">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          I'm Anthony Uyende, born in Gabon and raised between Gabon and the USA. I'm a programmer, writer, founder, and investor currently living in Montreal, Canada.
        </p>
        
        <p className="mt-4">
          As a Founding Team Member at Boundary AI, I'm contributing to the development of AI-driven feedback analysis solutions for businesses. My work involves leveraging data science and machine learning to create innovative tools that help companies better understand and act on customer feedback.
        </p>
        
        <p className="mt-4">
          With a background in mathematics and computer science, I'm passionate about using technology to solve complex problems and drive positive change in the world.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <ul className="list-disc list-inside text-gray-700">
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
        <ul className="list-disc list-inside text-gray-700">
          {RESUME_DATA.contact.social.map((platform, index) => (
            <li key={index}>
              <a href={platform.url} className="text-blue-600 hover:underline">{platform.name}</a>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-2">More Information</h3>
        <p className="text-gray-700">
          For a detailed overview of my professional experience and skills, please see my{' '}
          <Link href="/resume" className="text-blue-600 hover:underline">
            resume
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
