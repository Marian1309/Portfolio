'use client';

import type { FC } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import ThemeToggle from '../common/theme-toggle';

const Header: FC = () => {
  const router = useRouter();
  const pathaname = usePathname();

  const handleRoute = (route: string) => {
    if (pathaname !== route) {
      router.push(route);
    }
  };

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

        <button
          className="text-sm tracking-wide transition-colors dark:text-white sm:text-lg"
          onClick={() => handleRoute('/')}
        >
          Home
        </button>

        <button
          className="text-sm tracking-wide transition-colors dark:text-white sm:text-lg"
          onClick={() => handleRoute('/projects')}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default Header;
