import { Toaster } from '@/components/ui/toaster';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <h2>Navbar</h2>
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
