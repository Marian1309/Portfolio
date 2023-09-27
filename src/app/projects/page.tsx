'use client';

import type { NextPage } from 'next';

import { motion } from 'framer-motion';

import type { Project } from '@/types';

import * as Projects from '@/assets/projects';

import { Card } from './_components';

const ProjectsPage: NextPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      imageUrl: Projects.Spotify.src,
      title: 'Spotify Clone',
      icon: Projects.SpotifyIcon,
      content:
        'A Spotify clone - is a digital music service, where you can listen to music, upload your own songs and also by liking songs you will create your list of favorite songs, but without streaming, song will upload fully.',
      stack: [
        'TypeScript',
        'Next.js',
        'Supabase',
        'TailwindCSS',
        'Use-Sound',
        'Zustand'
      ],
      githubUrl: 'https://github.com/Marian1309/Spotify',
      demo: 'https://spotify.marian1309.vercel.app',
      delay: 0
    },
    {
      id: 2,
      imageUrl: Projects.Movix.src,
      title: 'Movix',
      icon: Projects.MovixLogo,
      content:
        'A web application for viewing information about various movies and TV shows. Media resources are divided into several sections.',
      stack: [
        'TypeScript',
        'Next.js',
        'React-Player',
        'TailwindCSS',
        'React-Query',
        'Zustand'
      ],
      githubUrl: 'https://github.com/Marian1309/Movix',
      demo: 'https://movix.marian1309.vercel.app',
      delay: 0.4
    },
    {
      id: 3,
      imageUrl: Projects.Threads.src,
      title: 'Threads Clone',
      icon: Projects.ThreadsIcon.src,
      content: 'A clone of a popular social network.',
      stack: [
        'TypeScript',
        'Next.js',
        'TailwindCSS',
        'Prisma',
        'Clerk',
        'Uploadthing',
        'Zustand',
        'Svix'
      ],
      githubUrl: 'https://github.com/Marian1309/Threads',
      demo: 'https://threads.marian1309.vercel.app',
      delay: 0.8
    },
    {
      id: 4,
      imageUrl: Projects.Discrod.src,
      title: 'Discord Clone',
      icon: Projects.DiscrodIcon.src,
      content:
        'Discord Clone is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.',
      stack: [
        'TypeScript',
        'Next.js',
        'TailwindCSS',
        'Prisma',
        'Clerk',
        'Uploadthing',
        'LiveKit',
        'ShadcnUI',
        'ScoketIO'
      ],
      githubUrl: 'https://github.com/Marian1309/Discord',
      demo: 'https://discord.marian1309.vercel.app',
      delay: 1.2
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          animate={{ x: 0 }}
          initial={{ x: -2000 }}
          transition={{ delay: project.delay }}
        >
          <Card project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsPage;
