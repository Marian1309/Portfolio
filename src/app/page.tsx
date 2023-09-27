'use client';

import type { NextPage } from 'next';

import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import * as icons from '@/assets/icons';

import { Main, Picture, TechStackList } from './_components';

const HomePage: NextPage = () => {
  const { resolvedTheme } = useTheme();

  const skills: { src: string }[] = [
    { src: icons.Html },
    { src: icons.Css },
    { src: icons.Js },
    { src: icons.Ts },
    { src: icons.React },
    { src: resolvedTheme === 'dark' ? icons.NextDark : icons.NextWhite },
    { src: icons.Tailwind },
    { src: icons.ShadcnUI },
    { src: icons.Zustand },
    { src: resolvedTheme === 'dark' ? icons.PrismaDark : icons.PrismaWhite },
    { src: icons.Clerk },
    { src: icons.Playwright }
  ];

  return (
    <section
      className={cn(
        'container flex items-center justify-center overflow-hidden md:h-[calc(80vh-70px)]',
        resolvedTheme === 'light' && 'pt-6'
      )}
    >
      <div className="overflow-hidden">
        <div className="flex-row items-center justify-center text-center md:flex md:text-left">
          <Picture />

          <Main />
        </div>

        <div className="mt-2 flex flex-col items-center justify-center gap-x-4 md:flex-row md:justify-start lg:mt-10">
          <p className="w-[150px] border-b-[1px] border-solid border-gray-700 pb-4 pr-[8px] text-center text-lg leading-5 md:w-auto md:border-b-0 md:border-r-[1px] md:pb-0 md:pr-[1rem]">
            Teck Stack
          </p>

          <TechStackList skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
