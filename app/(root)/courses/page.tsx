import FilterCourseButton from '@/components/buttons/FilterCourseButton';
import { PageHeaderHeading } from '@/components/HeroSection/HeroSection';
import CoursesWrapper from '@/components/sections/CoursesWrapper';
import CourseCardSkeleton from '@/components/Skeletons/course-card-skelton';
import { Suspense } from 'react';

const PageCourses = () => {
  return (
    <>
      <FilterCourseButton />

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
          <CoursesWrapper />
        </Suspense>
      </div>
    </>
  );
};
export default PageCourses;
