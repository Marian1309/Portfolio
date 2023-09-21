'use client';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import TypeIt from 'typeit-react';

import css from './css.svg';
import html from './html.svg';
import js from './javascript.svg';
import me from './me.png';
import next from './next-js.svg';
import react from './react.svg';
import tailwind from './tailwindcss.svg';
import ts from './typescript.svg';

const HomePage: NextPage = () => {
  const skills: { id: number; url: string }[] = [
    { id: 1, url: html },
    { id: 2, url: css },
    { id: 3, url: js },
    { id: 4, url: ts },
    { id: 5, url: react },
    { id: 6, url: next },
    { id: 7, url: tailwind }
  ];

  return (
    <section className="container flex items-center justify-center pt-4 md:pt-32">
      <div>
        <div className="flex-row items-center justify-center text-center md:flex md:text-left">
          <div
            className="order-1 mx-auto my-[20px] h-[25rem] w-[20rem] animate-[morph_8s_ease-in-out_infinite] border-[2px] border-solid border-[#2d2e32] bg-cover bg-center bg-no-repeat transition-[all_1s_ease-in-out] md:ml-12"
            style={{ backgroundImage: `url(${me.src})` }}
          />

          <div className="flex max-w-[500px] flex-col gap-y-6">
            <p className="text-3xl font-bold text-neutral-800 md:text-5xl lg:text-6xl">
              <TypeIt
                options={{
                  strings: ['Front-End React <br /> Developer'],
                  waitUntilVisible: true
                }}
              />
            </p>

            <p>
              Hi, I'm Marian Pidchashyi. A passionate Front-end React Developer
              based in Ivano-Frankivsk, Ukraine. 📍
            </p>

            <div className="flex gap-x-4 pb-4">
              <Link href="https://www.linkedin.com/in/marian-pidchashyi">
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ delay: 0.5 }}
                >
                  <Linkedin className="cursor-pointer hover:animate-spin" />
                </motion.div>
              </Link>

              <Link href="https://github.com/Marian1309">
                <motion.div
                  animate={{ x: 0 }}
                  initial={{ x: -100 }}
                  transition={{ delay: 1 }}
                >
                  <Github className="cursor-pointer hover:animate-spin" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>

        <div className="justify-left flex items-center gap-x-4">
          <p className="border-r-[1px] border-solid border-black pr-[2rem] text-lg leading-5">
            Teck Stack
          </p>

          {skills.map((skill) => (
            <Image
              key={skill.id}
              alt={skill.url}
              height={16}
              src={skill.url}
              width={16}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
