import React from 'react';
import Link from 'next/link';

interface Person {
  name: string;
  url: string;
}

const people: Person[] = [
  { name: "Paul Graham", url: "https://paulgraham.com/" },
  { name: "Naval Ravikant", url: "https://nav.al/" },
  { name: "Alain Tamno", url: "https://www.amazon.fr/stores/author/B08NYD6N8H/about" },
  { name: "Sam Altman", url: "https://blog.samaltman.com/" },
  // Add more people here...
].sort((a, b) => a.name.localeCompare(b.name)); // This sorts the list alphabetically

const PeoplePage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">People</h1>
      
      <p className="text-gray-700 mb-6">
        This is a collection of individuals who have significantly influenced my thinking, work, or life in general. 
        They range from personal mentors to historical figures whose ideas have shaped my perspective. 
        Each has contributed uniquely to my journey in technology, entrepreneurship, and beyond.
      </p>
      
      <ul className="space-y-2">
        {people.map((person, index) => (
          <li key={index}>
            <Link href={person.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeoplePage;
