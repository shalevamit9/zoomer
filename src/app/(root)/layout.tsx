import StreamVideoProvider from '@/providers/stream-client-provider';
import { Metadata } from 'next';
import React from 'react';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'YOOM',
  description: 'Video calling application',
  icons: {
    icon: '/icons/logo.svg',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
