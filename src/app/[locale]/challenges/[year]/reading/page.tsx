"use client";
import { reading2025 } from '@/data/challenges/2025/reading';
import { ArrowUpRight, ChevronDown, ChevronUp, Search, SlidersHorizontal, Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { use, useState } from 'react';

export default function ReadingChallenge({ params }: { params: Promise<{ locale: string; year: string }> }) {
  const { year } = use(params);
  const t = useTranslations('Challenges');
  const locale = useLocale();
  const dateLocale = locale === 'fr' ? 'fr-CA' : 'en-CA';
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'reading' | 'completed' | 'abandoned'>('all');
  const [expandedBooks, setExpandedBooks] = useState<Set<number>>(new Set());
  
  const books = year === "2025" ? reading2025 : [];
  
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                         book.author.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || book.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedBooks);
    if (expandedBooks.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedBooks(newExpanded);
  };

  const statusLabel = (status: string) =>
    status === 'completed' ? t('statusCompleted')
      : status === 'reading' ? t('statusReading')
      : t('statusAbandoned');

  const renderRating = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-neutral-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 mb-32">
      {/* Updated Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-neutral-400">
        <Link href="/" className="hover:text-neutral-200">{t('home')}</Link>
        <span>/</span>
        <Link href={`/challenges/${year}`} className="hover:text-neutral-200">{t('title', { year })}</Link>
        <span>/</span>
        <span className="text-neutral-200">{t('readingBreadcrumb')}</span>
      </nav>

      <header className="space-y-4">
        <h1 className="text-2xl font-bold">{t('readingChallengeTitle', { year })}</h1>
        <p className="text-neutral-400">
          {t('challenge52Desc', { year })}
        </p>
        <div className="bg-neutral-900 p-4 rounded-lg">
          <p className="text-neutral-300">{t('progressBooks', { current: books.filter(b => b.status === 'completed').length })}</p>
          <div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(books.filter(b => b.status === 'completed').length / 52) * 100}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-neutral-900 rounded-lg border border-neutral-800 
                     text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
          />
        </div>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-neutral-500" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="px-3 py-2 bg-neutral-900 rounded-lg border border-neutral-800 
                     text-neutral-200 focus:outline-none focus:border-neutral-700"
          >
            <option value="all">{t('allStatus')}</option>
            <option value="reading">{t('filterReading')}</option>
            <option value="completed">{t('filterCompleted')}</option>
            <option value="abandoned">{t('filterAbandoned')}</option>
          </select>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-8">
        {filteredBooks.map((book, index) => (
          <div key={index} className="flex flex-col gap-6 p-6 rounded-lg bg-neutral-900">
            <div className="flex gap-6">
              {/* Book Cover */}
              <div className="flex-shrink-0">
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-md"
                />
              </div>

              {/* Book Details */}
              <div className="flex-grow space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-200">
                      {book.title}
                    </h2>
                    <p className="text-neutral-400">{t('by', { author: book.author })}</p>
                  </div>
                  <div className="text-sm text-neutral-500">
                    {t('week', { number: book.weekNumber })}
                  </div>
                </div>

                <div className="flex gap-4 text-sm text-neutral-500">
                  <span>{t('started', { date: new Date(book.dateStarted).toLocaleDateString(dateLocale) })}</span>
                  {book.dateFinished && (
                    <span>{t('finished', { date: new Date(book.dateFinished).toLocaleDateString(dateLocale) })}</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      book.status === 'completed' 
                        ? 'bg-green-900 text-green-200' 
                        : book.status === 'reading'
                        ? 'bg-blue-900 text-blue-200'
                        : 'bg-red-900 text-red-200'
                    }`}
                  >
                    {statusLabel(book.status)}
                  </span>
                  <a 
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                  >
                    {t('viewOnAmazon')} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Expand/Collapse Button */}
            {(book.rating || book.review) && (
              <button
                onClick={() => toggleExpanded(index)}
                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-300"
              >
                {expandedBooks.has(index) ? (
                  <>{t('hideReview')} <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>{t('showReview')} <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            )}

            {/* Collapsible Review Section */}
            {expandedBooks.has(index) && (
              <div className="border-t border-neutral-800 pt-4 space-y-4">
                {book.rating && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-400">{t('ratingLabel')}</span>
                    {renderRating(book.rating)}
                  </div>
                )}
                
                {book.review && (
                  <>
                    <p className="text-neutral-300">{book.review.text}</p>
                    
                    {book.review.pros && book.review.pros.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-neutral-200">{t('keyTakeaways')}</h3>
                        <ul className="list-disc list-inside text-sm text-neutral-400 space-y-1">
                          {book.review.pros.map((pro, i) => (
                            <li key={i}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {book.review.recommendedFor && (
                      <p className="text-sm text-neutral-400">
                        <span className="text-neutral-300">{t('recommendedFor')}</span> {book.review.recommendedFor}
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 