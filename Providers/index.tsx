import { ThemeProvider } from 'next-themes';
import React from 'react';
import TanstackProvider from './tanstack-provider';
import { AuthProvider } from '@/contexts/AuthContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TanstackProvider>
        <AuthProvider>{children}</AuthProvider>
      </TanstackProvider>
    </ThemeProvider>
  );
};
export default Providers;
