import type { FC } from 'react';

import Link from 'next/link';

import ThemeToggle from '../common/theme-toggle';

const Header: FC = () => {
  const links: { id: number; title: string; href: string }[] = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'About', href: '/about' },
    { id: 3, title: 'Projects', href: '/projects' }
  ];

  return (
    <div className="flex h-20 w-full items-center justify-between px-8 shadow-[0_0_10px_rgba(0,0,0,.09)]">
      <p className="text-lg font-bold sm:text-xl">Marian.dev</p>

      <div className="flex items-center justify-center gap-x-4">
        <ThemeToggle />

        {links.map((link) => (
          <Link
            key={link.id}
            className="sm:text-md text-sm transition-colors hover:text-[#641ae6] dark:text-white dark:hover:text-[#641ae6]"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
