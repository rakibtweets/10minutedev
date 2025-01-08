import { SquareCodeIcon } from 'lucide-react';
import MainNav from './main-nav';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import ProfileAvatar from './ProfileAvatar';
import MobileNav from './MobileNav';
// import SearchCommandMenu from '../SearchCommandMenu';

export function Navbar() {
  return (
    <header className="fixed z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-1">
            <SquareCodeIcon className="size-7  text-green-500" />

            <p className="font-bold  max-sm:hidden">
              10minute<span className="text-orange-500">Dev</span>
            </p>
          </Link>

          <MainNav />
          {/* profile */}
          <div className="flex items-center justify-between gap-2">
            {/* <SearchCommandMenu /> */}
            <ThemeToggle />
            <ProfileAvatar />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
