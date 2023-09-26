import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ExternalLink, Github } from 'lucide-react';

import type { Project } from '@/types';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';

type CardProps = {
  project: Project;
};

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div className="m-4 block max-w-[860px] items-start justify-center rounded-md p-5 shadow-lg md:m-8 md:flex">
      <div className="max-h-[300px] overflow-hidden shadow-sm">
        <Image
          alt={project.title}
          className="h-auto w-[100%] cursor-pointer overflow-clip rounded-lg transition-all ease-in-out hover:-translate-y-[30%]"
          height={1000}
          src={project.imageUrl}
          style={{ transitionDuration: '5s' }}
          width={1000}
        />
      </div>

      <div className="mx-auto block max-w-[350px] md:pl-8">
        <h2
          className={cn(
            'flex items-center justify-center gap-x-2 py-4 text-xl font-bold',
            montserrat.className
          )}
        >
          {project.title}
          <Image alt="Niga" height={24} src={project.icon} width={24} />
        </h2>

        <p className="text-md text-center font-normal">{project.content}</p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-[12px]">
          {project.stack.map((technology, index) => (
            <div
              key={index}
              className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_white]"
            >
              {technology}
            </div>
          ))}
        </div>

        <div className="flex cursor-pointer items-center justify-evenly pt-6 dark:pt-7 md:pt-4">
          <Link
            className="flex items-center justify-center gap-x-1 transition-colors hover:text-royalBlue dark:text-white dark:hover:text-royalBlue"
            href={project.githubUrl}
          >
            <p>Code</p> <Github />
          </Link>

          <Link
            className="flex cursor-pointer items-center justify-center gap-x-1 transition-colors hover:text-[#4169E1] dark:text-white dark:hover:text-royalBlue"
            href={project.demo}
          >
            <p>Live Demo</p> <ExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
