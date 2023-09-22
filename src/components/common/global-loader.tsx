'use client';

import type { FC } from 'react';

import { BounceLoader } from 'react-spinners';

const GlobalLoader: FC = () => {
  return (
    <div className="h-[calc(100vh-70px)] flex-center">
      <BounceLoader color="#bbb6b0" loading size={40} />
    </div>
  );
};

export default GlobalLoader;
