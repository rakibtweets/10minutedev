export interface SidebarLink {
  route: string;
  label: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface UserProfile {
  _id: string;
  email: string;
  authType: string;
  isAdmin: boolean;
  isDeactivated: boolean;
  displayName: string;
  avatarUrl: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  isError: boolean;
  logout: () => void;
}
