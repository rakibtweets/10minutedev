import { SquareCodeIcon } from 'lucide-react';
import MainNav from './main-nav';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import ProfileAvatar from './ProfileAvatar';
import MobileNav from './MobileNav';
import SearchCommandMenu from '../SearchCommandMenu';

export function Navbar() {
  return (
    <header className="fixed z-50   flex w-full items-center justify-between gap-5 p-6  sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <SquareCodeIcon className="size-7  text-green-500" />

        <p className="font-bold  max-sm:hidden">
          10minute<span className="text-orange-500">Dev</span>
        </p>
      </Link>

      <MainNav />
      {/* profile */}
      <div className="flex items-center justify-between gap-x-2">
        <SearchCommandMenu />
        <ThemeToggle />
        <ProfileAvatar />
        <MobileNav />
      </div>
    </header>
  );
}
