'use client';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandInput,
  CommandList
} from '@/components/ui/command';
import { Skeleton } from '@/components/ui/skeleton';
import { useDebounce } from '@/hooks/useDebounce';
import { formUrlQuery, isMacOs, removeKeysFromQuery } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';
import SearchCourseList from '../sections/SearchCourseList';

const SearchCommandMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'keyword',
        value: debouncedQuery
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['keyword']
      });

      router.push(newUrl, { scroll: false });
    }
  }, [debouncedQuery, router, searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (open) {
      // Call the API when the command dialog is opened
    } else {
      setQuery('');
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ['keyword']
      });

      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <>
      <Button
        variant="outline"
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search Courses...</span>
        <span className="sr-only">Search Courses</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <abbr
            title={isMacOs() ? 'Command' : 'Control'}
            className="no-underline"
          >
            {isMacOs() ? '⌘' : 'Ctrl'}
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={handleOpenChange}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Type a command or search..."
        />
        <CommandList>
          <Suspense
            fallback={
              <div className="space-y-1 overflow-hidden px-1 py-2">
                <Skeleton className="h-12 rounded-sm" />
                <Skeleton className="h-12 rounded-sm" />
                <Skeleton className="h-12 rounded-sm" />
              </div>
            }
          >
            <SearchCourseList handleSelect={handleSelect} />
          </Suspense>
        </CommandList>
      </CommandDialog>
    </>
  );
};
export default SearchCommandMenu;
