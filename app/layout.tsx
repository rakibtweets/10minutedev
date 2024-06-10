/* eslint-disable camelcase */
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import Providers from '@/components/Providers';

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <NextTopLoader showSpinner={false} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
