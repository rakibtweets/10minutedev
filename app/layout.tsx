/* eslint-disable camelcase */
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import Providers from '@/components/Providers';
import { BreakPointIndicator } from '@/components/shared/BreakPointIndicator';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
});

export const metadata: Metadata = {
  title: '10minutesdev',
  description: 'A learning platform'
};

const RootLayout = ({
  children,
  modal
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <NextTopLoader showSpinner={false} />
        <Providers>
          {children}
          {modal && modal}
        </Providers>
        <BreakPointIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
