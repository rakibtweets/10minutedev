'use client';
import Image from 'next/image';
import { CommandEmpty, CommandGroup, CommandItem } from '../ui/command';
import { useGetCourses } from '@/hooks/course';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

interface SearchCourseListProps {
  handleSelect: (callback: () => unknown) => void;
}

const SearchCourseList = ({ handleSelect }: SearchCourseListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const {
    data: courses,
    isLoading,
    isError,
    error
  } = useGetCourses({
    isPublished: true,
    keyword,
    limit: 4
  });
  if (isLoading) {
    return (
      <div className="space-y-1 overflow-hidden px-1 py-2">
        <Skeleton className="h-12 rounded-sm" />
        <Skeleton className="h-12 rounded-sm" />
        <Skeleton className="h-12 rounded-sm" />
      </div>
    );
  }
  if (isError) {
    return <div>{error?.message}</div>;
  }
  return (
    <>
      <CommandEmpty
        className={cn(isLoading ? 'hidden' : 'py-6 text-center text-sm')}
      >
        No results found.
      </CommandEmpty>
      <CommandGroup
        key={1}
        className="space-y-2 capitalize"
        heading={'Courses'}
      >
        {courses &&
          courses?.map((item: any, index: number) => {
            return (
              <CommandItem
                key={item._id}
                className="h-14  cursor-pointer space-x-4"
                value={item?.title}
                onSelect={() =>
                  handleSelect(() => router.push(`/courses/${item._id}`))
                }
              >
                <Image
                  src={item?.thumbnail?.url}
                  width={56}
                  height={56}
                  alt="Course Image"
                />
                <span className="truncate">{item?.title}</span>
              </CommandItem>
            );
          })}
      </CommandGroup>
    </>
  );
};
export default SearchCourseList;
