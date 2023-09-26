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
