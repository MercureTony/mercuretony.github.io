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
  { name: "Paul Washer", url: "https://heartcrymissionary.com/about/mission-and-methodology/staff/paul-washers-bio/" },
  { name: "Shahvir Sarkary", url: "https://www.shahvirsarkary.com/" },
  { name: "Immad Akhund", url: "https://x.com/immad" },
  // Add more people here...
].sort((a, b) => a.name.localeCompare(b.name)); // This sorts the list alphabetically

const PeoplePage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">People</h1>
      
      <p className="mb-6">
        This is a collection of individuals who have significantly influenced my thinking, work, or life in general. 
        They range from personal mentors to historical figures whose ideas have shaped my perspective. 
        Each has contributed uniquely to my journey in technology, entrepreneurship, and beyond.
      </p>

      <div className="bg-yellow-900/20 border-l-4 border-yellow-600 text-yellow-200 p-4 mb-6" role="alert">
        <p className="font-bold">Note:</p>
        <p className="text-yellow-300/80">This list is currently a work in progress and not complete. I will be adding more people and potentially new categories over time. Check back for updates!</p>
      </div>
      
      <ul className="space-y-2">
        {people.map((person, index) => (
          <li key={index}>
            <Link href={person.url} className="text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeoplePage;
