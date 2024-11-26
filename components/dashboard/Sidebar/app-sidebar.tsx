import {
  BookOpenText,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCheck
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import Link from 'next/link';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard
  },

  {
    title: 'Profile',
    url: '/profile',
    icon: UserCheck
  },
  {
    title: 'Enrollment',
    url: '/enrollment',
    icon: BookOpenText
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings
  }
];

export function DashboardSidebar() {
  return (
    <Sidebar side="left" collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="mr-2 size-4" />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
