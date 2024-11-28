import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import ProfileAvatar from '@/components/shared/navbar/ProfileAvatar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { AdminDashboardSidebar } from '@/components/admin/admin-sidebar';

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AdminDashboardSidebar />
      <main className="w-full">
        <div className="relative">
          <div className="sticky flex items-center justify-between px-6 py-4">
            <SidebarTrigger />
            <div className="flex items-center justify-between gap-x-4">
              <ThemeToggle />
              <ProfileAvatar />
            </div>
          </div>
        </div>
        <section className="flex w-full flex-1 flex-col items-center justify-center px-6 pb-6 pt-16 max-md:pb-14 sm:px-14">
          <div className="mx-auto  w-full max-w-7xl">{children}</div>
        </section>
      </main>
    </SidebarProvider>
  );
};
export default AdminDashboardLayout;
