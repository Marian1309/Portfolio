'use client';

import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from 'next-themes';
import TypeIt from 'typeit-react';

import { handleWidth } from '@/lib/utils';

import clerk from '../../assets/icons/clerk.png';
import css from '../../assets/icons/css.svg';
import html from '../../assets/icons/html.svg';
import js from '../../assets/icons/javascript.svg';
import me from '../../assets/icons/me.png';
import next16 from '../../assets/icons/next-16.svg';
import nextFill from '../../assets/icons/nextjs-fill.svg';
import playwright from '../../assets/icons/playwright.svg';
import prisma from '../../assets/icons/prisma-original.svg';
import prismaFill from '../../assets/icons/prisma.svg';
import react from '../../assets/icons/react.svg';
import shadcn from '../../assets/icons/shadcn-ui-original.png';
import tailwind from '../../assets/icons/tailwindcss.svg';
import ts from '../../assets/icons/typescript.svg';
import zustand from '../../assets/icons/zustand-original.png';

const HomePage: NextPage = () => {
  const { theme } = useTheme();
  const [iconSize, setIconSize] = useState(0);

  const skills: { id: number; url: string }[] = [
    { id: 1, url: html },
    { id: 2, url: css },
    { id: 3, url: js },
    { id: 4, url: ts },
    { id: 5, url: react },
    { id: 6, url: theme === 'dark' ? nextFill : next16 },
    { id: 7, url: tailwind },
    { id: 8, url: shadcn },
    { id: 9, url: zustand },
    { id: 10, url: theme === 'dark' ? prismaFill : prisma },
    { id: 11, url: clerk },
    { id: 12, url: playwright }
  ];

  const handle = () => {
    const width = handleWidth();

    if (width > 700) {
      setIconSize(32);
      return;
    }

    if (width > 400) {
      setIconSize(24);
      return;
    }

    setIconSize(16);
  };

  useEffect(() => {
    handle();
  }, []);

  window.addEventListener('resize', handle);

  return (
    <section className="container flex items-center justify-center pt-4 md:pt-32">
      <div>
        <div className="flex-row items-center justify-center text-center md:flex md:text-left">
          <div
            className="order-1 mx-auto my-[20px] h-[25rem] w-[20rem] animate-[morph_8s_ease-in-out_infinite] border-[2px] border-solid border-[#2d2e32] bg-cover bg-center bg-no-repeat transition-[all_1s_ease-in-out] md:ml-12"
            style={{ backgroundImage: `url(${me.src})` }}
          />

          <div className="mx-auto flex max-w-[500px] flex-col gap-y-6">
            <p className="text-3xl font-bold text-neutral-800 dark:text-white md:text-5xl lg:text-6xl">
              <TypeIt
                options={{
                  strings: ['Front-End React <br /> Developer'],
                  waitUntilVisible: true
                }}
              />
            </p>

            <p className="break-words">
              Hi, I'm Marian Pidchashyi. A passionate Front-end React Developer
              based in Ivano-Frankivsk, Ukraine. 📍
            </p>

            <div className="flex items-center justify-center gap-x-4 pb-8 md:justify-start">
              <Link href="https://www.linkedin.com/in/marian-pidchashyi">
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: -1000 }}
                  transition={{ delay: 0.5 }}
                >
                  <Linkedin
                    className="cursor-pointer hover:animate-spin"
                    color={theme === 'dark' ? '#fff' : '#000'}
                  />
                </motion.div>
              </Link>

              <Link href="https://github.com/Marian1309">
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: -1000 }}
                  transition={{ delay: 1 }}
                >
                  <Github
                    className="cursor-pointer hover:animate-spin"
                    color={theme === 'dark' ? '#fff' : '#000'}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-x-4 md:flex-row md:justify-start">
          <p className="w-[150px] border-b-[1px] border-solid border-gray-700 pb-4 pr-[8px] text-center text-lg leading-5 md:w-auto md:border-b-0 md:border-r-[1px] md:pb-0 md:pr-[1rem]">
            Teck Stack
          </p>

          <div className="flex items-center justify-center gap-x-3 pt-4 md:pt-0">
            {skills.map((skill) => {
              return (
                <div className="block">
                  <Image
                    key={skill.id}
                    alt={skill.url}
                    height={iconSize}
                    src={skill.url}
                    width={iconSize}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
