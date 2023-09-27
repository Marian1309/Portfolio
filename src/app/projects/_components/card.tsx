'use client';

import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ExternalLink, Github } from 'lucide-react';

import type { Project } from '@/types';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

type CardProps = {
  project: Project;
};

const Card: FC<CardProps> = ({ project }) => {
  return (
    <div
      className={cn(
        'block max-w-[860px] items-center justify-center rounded-md p-5 shadow-lg md:m-6 md:flex',
        project.id % 2 === 0 && 'flex-row-reverse'
      )}
    >
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Link
              className="max-h-[300px] overflow-hidden shadow-sm"
              href={project.imageUrl}
            >
              <Image
                alt={project.title}
                className="h-auto w-[100%] max-w-[500px] cursor-pointer rounded-lg"
                height={1000}
                src={project.imageUrl}
                style={{ transitionDuration: '4s' }}
                width={1000}
              />
            </Link>
          </TooltipTrigger>

          <TooltipContent>Click on photo in order to see it</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div
        className={cn(
          'mx-auto block max-w-[350px]',
          project.id % 2 === 1 ? 'md:pl-8' : 'md:pr-8'
        )}
      >
        <h2
          className={cn(
            'flex items-center justify-center gap-x-2 py-6 text-xl font-bold md:py-4',
            montserrat.className
          )}
        >
          {project.title}
          <Image alt="Niga" height={20} src={project.icon} width={20} />
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

        <div className="flex cursor-pointer items-center justify-evenly pt-8 dark:pt-7 md:pt-4">
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
