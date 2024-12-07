'use client';

import { LogOut } from 'lucide-react';
import { SidebarMenuButton } from '../ui/sidebar';
import { useAuth } from '@/hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <SidebarMenuButton onClick={logout}>
      <LogOut className="mr-2 size-4" />
      Logout
    </SidebarMenuButton>
  );
};
export default LogoutButton;
