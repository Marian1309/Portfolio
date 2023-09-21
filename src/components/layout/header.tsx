'use client';

import type { FC } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import ThemeToggle from '../common/theme-toggle';

const Header: FC = () => {
  const router = useRouter();
  const pathaname = usePathname();

  return (
    <div className="flex h-20 w-full items-center justify-between px-8 shadow-[0_0_30px_rgba(0,0,0,.09)]">
      <p className="text-lg font-bold sm:text-xl">Marian.dev</p>

      <div className="flex items-center justify-center gap-x-4">
        <ThemeToggle />

        <button
          className="sm:text-md text-sm transition-colors hover:text-[#641ae6] dark:text-white dark:hover:text-[#641ae6]"
          onClick={() => {
            if (pathaname !== '/') {
              router.push('/');
            }
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Header;
