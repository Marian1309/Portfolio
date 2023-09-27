'use client';

import { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { dynaPuff } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const NotFound: NextPage = () => {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  const intervalId = setInterval(() => {
    setCounter(counter - 1);
  }, 1000);

  if (counter === 0) {
    router.push('/');
    clearInterval(intervalId);
  }

  return (
    <div
      className={cn(
        dynaPuff.className,
        'flex h-[calc(100vh-70px)] flex-col items-center justify-center'
      )}
    >
      <h1 className="text-6xl md:text-9xl">404</h1>
      <p className="pt-4 text-xl font-normal md:text-3xl">Page not found!</p>
      <p className="pt-2 text-sm">
        You will be redirected to the main page{' '}
        <span className="text-red-600">in {counter} seconds</span>
      </p>
    </div>
  );
};

export default NotFound;
