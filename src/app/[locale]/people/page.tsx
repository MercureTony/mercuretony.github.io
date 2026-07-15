import React from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

interface Person {
  name: string;
  url: string;
}

const people: Person[] = [
  { name: "Alain Tamno", url: "https://www.amazon.fr/stores/author/B08NYD6N8H/about" },
  { name: "Immad Akhund", url: "https://x.com/immad" },
  { name: "Jesus Christ", url: "https://www.bible.com/" },
  { name: "Lea Nzogho", url: "https://www.linkedin.com/in/lea-nzogho-518ab42b6/?originalSubdomain=ga" },
  { name: "Naval Ravikant", url: "https://nav.al/" },
  { name: "Paul Graham", url: "https://paulgraham.com/" },
  { name: "Paul Washer", url: "https://heartcrymissionary.com/about/mission-and-methodology/staff/paul-washers-bio/" },
  { name: "Sam Altman", url: "https://blog.samaltman.com/" },
  { name: "Santosh Passoubady", url: "https://www.google.com/search?q=santosh+passoubady&client=ms-android-rogers-ca-revc&sca_esv=3035149b170ff626&sxsrf=AE3TifPLXVmb-e3GaN1RE00Z5gQJQsylXg%3A1749862790793&ei=hslMaOuYMM2pptQP9NKTyQc&oq=santosh+passoubady&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhJzYW50b3NoIHBhc3NvdWJhZHkyBBAjGCcyChAjGIAEGCcYigUyBRAhGKABMgUQABjvBUj5E1C7CVjYEXAEeACQAQKYAawBoAGcB6oBAzAuN7gBA8gBAPgBAZgCBqACmALCAggQABiwAxjvBcICCxAAGIAEGLADGKIEwgIFECEYnwWYAwCIBgGQBgSSBwM0LjKgB4sbsgcDMC4yuAeLAsIHBTAuMy4zyAcT&sclient=mobile-gws-wiz-serp" },
  { name: "Shahvir Sarkary", url: "https://www.shahvirsarkary.com/" },
  // Add more people here...
].sort((a, b) => a.name.localeCompare(b.name)); // This sorts the list alphabetically

const PeoplePage = async () => {
  const t = await getTranslations('People');
  return (
    <div className="max-w-2xl mx-auto space-y-6 mb-32">
      <h1 className="text-2xl font-bold mb-4">{t('heading')}</h1>

      <p className="mb-6">
        {t('intro')}
      </p>

      <div className="bg-yellow-900/20 border-l-4 border-yellow-600 text-yellow-200 p-4 mb-6" role="alert">
        <p className="font-bold">{t('noteTitle')}</p>
        <p className="text-yellow-300/80">{t('noteText')}</p>
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
