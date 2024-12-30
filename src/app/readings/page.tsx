"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { topics } from '@/data/reading-data';

export default function ReadingsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter topics and their readings based on search query
  const filteredTopics = topics.map(topic => ({
    ...topic,
    readings: topic.readings.filter(reading => 
      reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(topic => topic.readings.length > 0);

  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">Readings</h1>
      
      <p className="mb-6">
        Here&apos;s a curated list of books, articles, blogs, and other readings that have significantly influenced my thinking, 
        organized by topic. These works cover a range of subjects including technology, entrepreneurship, science, and personal development. You can find more books I&apos;ve read on my 
        <a href="https://www.goodreads.com" className="text-neutral-400 hover:underline ml-1">Goodreads</a> profile.
      </p>
      
      <div className="bg-yellow-900/20 border-l-4 border-yellow-600 text-yellow-200 p-4 mb-6" role="alert">
        <p className="font-bold mb-1">Note:</p>
        <p className="text-yellow-300/80">This list is currently a work in progress and not complete. I will be adding more readings and potentially new categories over time. Check back for updates!</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-neutral-500" />
        </div>
        <input
          type="text"
          placeholder="Search by title, author, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-neutral-900/50 border border-neutral-800 
                     rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 
                     text-neutral-200 placeholder-neutral-500"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-neutral-300"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results count when searching */}
      {searchQuery && (
        <p className="text-sm text-neutral-500 mb-4">
          Found {filteredTopics.reduce((acc, topic) => acc + topic.readings.length, 0)} results
        </p>
      )}

      {filteredTopics.length === 0 ? (
        <div className="text-center py-10 text-neutral-500">
          No readings found matching your search.
        </div>
      ) : (
        <>
          <nav className="mb-8">
            <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
            <ul className="list-disc list-inside">
              {filteredTopics.map((topic, index) => (
                <li key={index}>
                  <Link href={`#${topic.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-neutral-400 hover:underline">
                    {topic.name} ({topic.readings.length})
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {filteredTopics.map((topic, topicIndex) => (
            <section key={topicIndex} id={topic.name.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{topic.name}</h2>
              <ul className="space-y-4 list-none">
                {topic.readings.map((reading, readingIndex) => (
                  <li 
                    key={readingIndex} 
                    className={`border-b border-neutral-800 pb-4 last:border-b-0 mb-4 last:mb-0
                      ${reading.isSpecial ? 'relative' : ''}`}
                  >
                    <h3 className={`text-base font-semibold mb-1 
                      ${reading.isSpecial ? 
                        'relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[30%] after:bg-yellow-500/20 after:-z-10' : 
                        ''
                      }`}>
                      {reading.url ? (
                        <a 
                          href={reading.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${reading.isSpecial ? 
                            'text-yellow-200 hover:text-yellow-300' : 
                            'text-neutral-400 hover:underline'
                          }`}
                        >
                          {reading.title}
                        </a>
                      ) : (
                        <span className={reading.isSpecial ? 'text-yellow-200' : ''}>
                          {reading.title}
                        </span>
                      )}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-2">
                      {reading.author} | {reading.type}
                    </p>
                    <p className="text-sm text-neutral-400">{reading.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
