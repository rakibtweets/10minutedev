import { PageHeaderHeading } from '@/components/HeroSection/HeroSection';
import Courses from '@/components/sections/Courses';
import CourseCardSkeleton from '@/components/Skeletons/course-card-skelton';
import { Button } from '@/components/ui/button';
import { tags } from '@/constants';
import { Suspense } from 'react';

const PageCourses = () => {
  const isSelected = false;
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {tags.map((tag) => (
          <Button
            key={tag.value}
            size={'sm'}
            variant="secondary"
            className={`${isSelected ? 'bg-green-500/60' : ''} text-sm`}
          >
            {tag.label}
          </Button>
        ))}
      </div>

      <PageHeaderHeading size="default" className=" text-center font-bold">
        Courses
      </PageHeaderHeading>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        <Suspense
          fallback={Array(8)
            .fill(0)
            .map((_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
        >
          <Courses />
        </Suspense>
      </div>
    </>
  );
};
export default PageCourses;
