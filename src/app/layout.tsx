import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import ThemeProvider from '@/services/providers/theme';

import { poppins } from '@/lib/fonts';

import Header from '@/components/layout/header';

import './globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s • Marian Pidchashyi',
    default: 'Marian Pidchashyi'
  },
  description: 'Marian Pidchashyi Portfolio',
  creator: 'Marian Pidchashyi',
  keywords: [
    'Next.js',
    'React',
    'TailwindCSS',
    'Server Components',
    'Clerk',
    'ShadcnUI',
    'TypeScript',
    'Prisma'
  ]
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={['light', 'dark']}
        >
          <div className="overflow-hidden">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
