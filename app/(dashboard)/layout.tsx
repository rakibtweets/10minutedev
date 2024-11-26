import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { DashboardSidebar } from '@/components/dashboard/Sidebar/app-sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="flex border-2 border-green-400 py-4">
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        <section className="flex flex-1 flex-col items-center justify-center px-6 pb-6 pt-20 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </section>
      </main>
    </SidebarProvider>
  );
};
export default DashboardLayout;
