'use client';

import type { FC } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import ThemeToggle from '@/components/common/theme-toggle';

const Header: FC = () => {
  const router = useRouter();
  const pathaname = usePathname();

  const handleRoute = (route: string) => {
    if (pathaname !== route) {
      router.push(route);
    }
  };

  const links: { id: number; title: string; url: string }[] = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Projects', url: '/projects' },
    { id: 3, title: 'Contact', url: '/contact' }
  ];

  return (
    <div className="flex h-20 w-full items-center justify-between px-12 shadow-[0_0_30px_rgba(0,0,0,.09)]">
      <button
        className="text-lg font-bold sm:text-xl"
        onClick={() => handleRoute('/')}
      >
        Marian.dev
      </button>

      <div className="flex items-center justify-center gap-x-4">
        <ThemeToggle />

        {links.map((link) => (
          <button
            key={link.id}
            className="text-sm tracking-wide transition-colors hover:text-royalBlue sm:text-lg"
            onClick={() => handleRoute(link.url)}
          >
            {link.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
