'use client';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { AlignJustifyIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavContent = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className="flex h-full flex-col gap-1 pt-16">
      {sidebarLinks?.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive ? 'rounded-lg bg-orange-500 text-white' : ''
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              {/* <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              /> */}
              <p className={`${isActive ? '  font-bold' : 'font-medium'}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <AlignJustifyIcon className="size-7" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className=" no-scrollbar overflow-y-auto border-none">
        <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
