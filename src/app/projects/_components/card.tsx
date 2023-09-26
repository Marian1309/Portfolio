import type { FC } from 'react';

import Image from 'next/image';

import { ExternalLink, Github } from 'lucide-react';

import { montserrat } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import car from '../Spotify.png';
import a from '../spotify-icon.svg';

const Card: FC = () => {
  return (
    <div className="m-8 flex max-w-[860px] items-start justify-center rounded-md p-5 shadow-lg">
      <div className="max-h-[300px] overflow-hidden shadow-sm">
        <Image
          alt="Fuck"
          className="h-auto w-[100%] cursor-pointer overflow-clip rounded-lg transition-all ease-in-out hover:-translate-y-[40%]"
          height={1000}
          src={car.src}
          style={{ transitionDuration: '5s' }}
          width={1000}
        />
      </div>

      <div className="max-w-[350px] pl-8">
        <h2
          className={cn(
            'flex items-center justify-center gap-x-2 py-4 text-xl font-bold',
            montserrat.className
          )}
        >
          Spotify Clone <Image alt="Niga" height={24} src={a} width={24} />
        </h2>

        <p className="text-md text-center font-normal text-neutral-600">
          Spotify clone - is a digital music service, where you can listen to
          music, upload your own songs and also by liking songs you will create
          your list of favorite songs, but without streaming, song will upload
          fully.
        </p>

        <div className="flex flex-wrap gap-3 pt-6 text-[12px]">
          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_#ffff00]">
            Next.js
          </div>

          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_white]">
            Supabase
          </div>

          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_white]">
            TailwindCSS
          </div>
          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_white]">
            Use-Sound
          </div>

          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_10px_white]">
            Zustand
          </div>

          <div className="w-fit rounded-md p-2 font-bold shadow-[0_0_10px_rgba(0,0,0,.1)] dark:shadow-[0_0_6px_white]">
            React-Hook-Form
          </div>
        </div>

        <div className="flex cursor-pointer items-center justify-evenly pt-5">
          <div className="flex items-center justify-center gap-x-1 transition-colors hover:text-[#4169E1]">
            <p>Code</p> <Github />
          </div>

          <div className="flex cursor-pointer items-center justify-center gap-x-1 transition-colors hover:text-[#4169E1]">
            <p>Live Demo</p> <ExternalLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
