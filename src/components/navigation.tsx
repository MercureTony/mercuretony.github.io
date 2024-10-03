'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/interests', label: 'Interests' },
    { href: '/writings', label: 'Writings' },
    { href: '/readings', label: 'Readings' },
    { href: '/people', label: 'People' },
  ];

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href} 
              className={`text-sm hover:underline ${
                pathname === link.href ? 'font-bold' : 'text-gray-600'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;