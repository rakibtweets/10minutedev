export interface SidebarLink {
  route: string;
  label: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
