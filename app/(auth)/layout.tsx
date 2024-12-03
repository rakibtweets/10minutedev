import { Toaster } from '@/components/ui/toaster';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      {children}
      <Toaster />
    </div>
  );
};
export default AuthLayout;
