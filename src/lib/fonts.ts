import { DynaPuff, Montserrat, Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const dynaPuff = DynaPuff({
  subsets: ['latin'],
  weight: ['400', '600']
});
