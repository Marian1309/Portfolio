'use client';

import type { NextPage } from 'next';

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
      demo: 'https://spotify.marian1309.vercel.app'
    },
    {
      id: 2,
      imageUrl: Projects.Movix.src,
      title: 'Movix',
      icon: Projects.MovixLogo,
      content:
        'A web application for viewing information about various movies and TV shows. Media resources are divided into several sections. The following options are available: Searching for a movie by name, sorting them by category and information about the movie itself (Cast, overview and short videos)',
      stack: [
        'TypeScript',
        'Next.js',
        'React-Player',
        'TailwindCSS',
        'React-Query',
        'Zustand'
      ],
      githubUrl: 'https://github.com/Marian1309/Movix',
      demo: 'https://movix.marian1309.vercel.app'
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
