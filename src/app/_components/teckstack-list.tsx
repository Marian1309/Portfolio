'use client';

import { type FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { handleWidth } from '@/lib/utils';

type Props = {
  skills: {
    src: string;
  }[];
};

const TechStackList: FC<Props> = ({ skills }) => {
  const [iconSize, setIconSize] = useState(0);

  const handle = () => {
    const width = handleWidth();

    if (width > 1400) {
      setIconSize(40);
      return;
    }

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
    <div className="flex items-center justify-center gap-x-3 pt-4 md:pt-0">
      {skills.map(({ src }, index) => {
        return (
          <div key={index} className="group cursor-pointer">
            <Image
              alt="idk"
              className="group-hover:animate-bounce"
              height={iconSize}
              src={src}
              width={iconSize}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TechStackList;
