'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import TypeIt from 'typeit-react';

const Main: FC = () => {
  const { resolvedTheme } = useTheme();

  const links: { id: number; label: string; href: string; icon: LucideIcon }[] =
    [
      {
        id: 1,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/marian-pidchashyi',
        icon: Linkedin
      },
      {
        id: 2,
        label: 'Github',
        href: 'https://github.com/Marian1309',
        icon: Github
      }
    ];

  return (
    <div className="mx-auto flex max-w-[500px] flex-col gap-y-6 pr-12">
      <p className="text-3xl font-bold text-neutral-800 dark:text-white md:text-5xl lg:text-6xl">
        <TypeIt
          options={{
            strings: ['Front-End React <br /> Developer'],
            waitUntilVisible: true
          }}
        />
      </p>

      <p className="break-words font-normal">
        Hi, {"I'm "}{' '}
        <span className="cursor-pointer font-bold underline">
          Marian Pidchashyi
        </span>
        . I am a highly motivated self-taught Front-end React Developer with
        1.5+ years of experience in developing user-friendly web-applications.
        Strong creative and analytical skills. No experience working in a team
        yet. Based in Ivano-Frankivsk, Ukraine.
      </p>

      <div className="flex items-center justify-center gap-x-4 pb-8 md:justify-start">
        {links.map(({ icon: Icon, ...link }) => (
          <Link aria-label={link.label} href={link.href}>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -1000 }}
              transition={{ delay: 0.5 }}
            >
              <Icon
                className="cursor-pointer hover:animate-spin"
                color={resolvedTheme === 'dark' ? '#fff' : '#000'}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
