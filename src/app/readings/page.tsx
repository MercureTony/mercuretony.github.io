import React from 'react';
import Link from 'next/link';

interface Reading {
  title: string;
  author: string;
  type: 'Book' | 'Article' | 'Paper' | 'Blog' | 'Other';
  description: string;
  url?: string;
}

interface Topic {
  name: string;
  readings: Reading[];
}

const topics: Topic[] = [
  {
    name: "Entrepreneurship & Startups",
    readings: [
      {
        title: "Zero to One",
        author: "Peter Thiel",
        type: "Book",
        description: "Notes on startups, or how to build the future. This book offers a new way of thinking about innovation.",
      },
      {
        title: "The Lean Startup",
        author: "Eric Ries",
        type: "Book",
        description: "How today&apos;s entrepreneurs use continuous innovation to create radically successful businesses.",
      },
      {
        title: "Paul Graham&apos;s Essays",
        author: "Paul Graham",
        type: "Blog",
        description: "Insightful essays on startups, programming, and life by the co-founder of Y Combinator.",
        url: "http://www.paulgraham.com/articles.html",
      },
    ]
  },
  {
    name: "Technology & AI",
    readings: [
      {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell and Peter Norvig",
        type: "Book",
        description: "The leading textbook in Artificial Intelligence, used in over 1400 universities in over 125 countries.",
      },
      {
        title: "Wait But Why",
        author: "Tim Urban",
        type: "Blog",
        description: "Long-form, stick-figure-illustrated blog posts about almost everything, including deep dives into AI and technology.",
        url: "https://waitbutwhy.com/",
      },
      {
        title: "Sam Altman&apos;s Blog",
        author: "Sam Altman",
        type: "Blog",
        description: "Insights on technology, startups, and entrepreneurship from the CEO of OpenAI.",
        url: "https://blog.samaltman.com/",
      },
    ]
  },
  {
    name: "Science & History",
    readings: [
      {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        type: "Book",
        description: "A groundbreaking narrative of humanity&apos;s creation and evolution that explores how biology and history have defined us.",
      },
      {
        title: "Slate Star Codex",
        author: "Scott Alexander",
        type: "Blog",
        description: "A blog about science, medicine, philosophy, politics, and futurism.",
        url: "https://slatestarcodex.com/",
      },
      {
        title: "Cosmic Queries",
        author: "Neil deGrasse Tyson",
        type: "Book",
        description: "Explores the fundamental questions about our universe and our place within it, covering topics from black holes to the search for alien life.",
      },
    ]
  },
  {
    name: "Climate & Environment",
    readings: [
      {
        title: "The Uninhabitable Earth",
        author: "David Wallace-Wells",
        type: "Article",
        description: "A chilling article about the consequences of climate change, originally published in New York Magazine.",
      },
    ]
  },
  {
    name: "Finance & Economics",
    readings: [
      {
        title: "Carbon Finance: The Financial Implications of Climate Change",
        author: "Sonia Labatt and Rodney R. White",
        type: "Book",
        description: "Explores the financial implications of climate change and the emerging market for carbon credits.",
      },
    ]
  },
  {
    name: "Leadership & Personal Development",
    readings: [
      {
        title: "Start with Why",
        author: "Simon Sinek",
        type: "Book",
        description: "Explores how leaders can inspire cooperation, trust and change.",
      },
      {
        title: "The Tao of Charlie Munger",
        author: "David Clark",
        type: "Book",
        description: "A compilation of quotes from Berkshire Hathaway&apos;s Vice Chairman on various aspects of life and business.",
      },
    ]
  },
  {
    name: "Relationships",
    readings: [
      {
        title: "Bringing Out the Best in Your Wife",
        author: "H. Norman Wright",
        type: "Book",
        description: "Offers advice on strengthening marital relationships.",
      },
      {
        title: "Sacred Marriage",
        author: "Gary Thomas",
        type: "Book",
        description: "Examines the spiritual dimension of marriage.",
      },
    ]
  },
];

const ReadingsPage = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Readings</h1>
      
      <p className="text-gray-700 mb-6">
        Here&apos;s a curated list of books, articles, blogs, and other readings that have significantly influenced my thinking, 
        organized by topic. These works cover a range of subjects including technology, entrepreneurship, science, and personal development. 
        I hope you find them as insightful and thought-provoking as I have.
      </p>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
        <p className="font-bold">Note:</p>
        <p>This list is currently a work in progress and not complete. I will be adding more readings and potentially new categories over time. Check back for updates!</p>
      </div>

      <nav className="mb-8">
        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
        <ul className="list-disc list-inside">
          {topics.map((topic, index) => (
            <li key={index}>
              <Link href={`#${topic.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                {topic.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {topics.map((topic, topicIndex) => (
        <section key={topicIndex} id={topic.name.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{topic.name}</h2>
          <ul className="space-y-4 list-none">
            {topic.readings.map((reading, readingIndex) => (
              <li key={readingIndex} className="border-b pb-3 last:border-b-0">
                <h3 className="text-base font-semibold mb-1">
                  {reading.url ? (
                    <a href={reading.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {reading.title}
                    </a>
                  ) : (
                    reading.title
                  )}
                </h3>
                <p className="text-gray-600 text-xs mb-1">
                  {reading.author} | {reading.type}
                </p>
                <p className="text-gray-700 text-sm">{reading.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default ReadingsPage;
