import CourseCard from '@/components/cards/courseCard';
import CourseDetails from '@/components/sections/course-details';
import CourseDetailsSkeleton from '@/components/Skeletons/course-details-skeleton';
import { Button } from '@/components/ui/button';
import { courses } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';

const CourseDetailsPage = () => {
  return (
    <section className="">
      <Suspense fallback={<CourseDetailsSkeleton />}>
        <CourseDetails />
      </Suspense>

      {/* Related Courses */}
      <section className="mt-16">
        <div className="flex items-center justify-center gap-4 space-y-9">
          <div className="flex max-w-[61rem] flex-1 flex-col gap-1">
            <h1 className=" text-2xl font-bold leading-[1.1] md:text-3xl">
              Some more courses for you
            </h1>
          </div>
          <div className="hidden sm:flex">
            <Button
              className="flex items-center justify-center gap-2"
              variant="outline"
            >
              <span>View All Courses</span> <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
        {/* Courses Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              imageAlt={course.imageAlt}
              imageSrc={course.imageSrc}
              projectName={course.projectName}
              videoCount={course.videoCount}
            />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center sm:hidden">
          <Button
            className="flex items-center justify-center gap-2"
            variant="outline"
          >
            <span>View All Courses</span> <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </section>
  );
};
export default CourseDetailsPage;
