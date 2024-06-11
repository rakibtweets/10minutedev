'use client';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Skeleton } from '@/components/ui/skeleton';
import { useDebounce } from '@/hooks/useDebounce';
import { cn, isMacOs } from '@/lib/utils';
import { CircleIcon, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useTransition, useState, useEffect } from 'react';

const demoData = [
  {
    category: 'Electronics',
    products: [
      { id: '1', name: 'Smartphone' },
      { id: '2', name: 'Laptop' },
      { id: '3', name: 'Headphones' }
    ]
  },
  {
    category: 'Home Appliances',
    products: [
      { id: '4', name: 'Refrigerator' },
      { id: '5', name: 'Microwave Oven' },
      { id: '6', name: 'Dishwasher' }
    ]
  },
  {
    category: 'Furniture',
    products: [
      { id: '7', name: 'Sofa' },
      { id: '8', name: 'Dining Table' },
      { id: '9', name: 'Bed' }
    ]
  }
];

const productCategories = [
  {
    title: 'Electronics',
    icon: ''
  },
  {
    title: 'Home Appliances',
    icon: ''
  },
  {
    title: 'Furniture',
    icon: ''
  }
];

const SearchCommandMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<
    { category: string; products: { id: string; name: string }[] }[]
  >([]);

  useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData([]);
      return;
    }

    async function fetchData() {
      try {
        setData(demoData);
      } catch (err) {
        console.log(err);
      }
    }

    startTransition(fetchData);

    return () => setData([]);
  }, [debouncedQuery]);

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
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery('');
          }
        }}
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Type a command or search..."
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? 'hidden' : 'py-6 text-center text-sm')}
          >
            No results found.
          </CommandEmpty>
          {isPending ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data?.map((group) => (
              <CommandGroup
                key={group?.category}
                className="capitalize"
                heading={group?.category}
              >
                {group?.products?.map((item) => {
                  const CategoryIcon =
                    productCategories.find(
                      (category) => category.title === group?.category
                    )?.icon ?? CircleIcon;

                  return (
                    <CommandItem
                      key={item.id}
                      className="h-9"
                      value={item.name}
                      onSelect={() =>
                        handleSelect(() => router.push(`/product/${item.id}`))
                      }
                    >
                      <CategoryIcon
                        className="mr-2.5 size-3 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
export default SearchCommandMenu;
