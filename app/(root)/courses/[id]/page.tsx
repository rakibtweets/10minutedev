import CourseCard from '@/components/cards/courseCard';
import CourseDetailsCard from '@/components/cards/CourseDetailsCard';
import CourseModuleCard from '@/components/cards/CourseModuleCard';
import EnrollCourseCard from '@/components/cards/EnrollCourseCard';
import { Button } from '@/components/ui/button';
import { courses } from '@/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CourseDetailsPage = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="w-full lg:col-span-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <Image
                src={'https://placehold.co/600x400'}
                alt={'Course title'}
                width={800}
                height={400}
                className="rounded-lg lg:rounded-xl"
              />
            </div>
            <div>
              <CourseDetailsCard />
            </div>
          </div>
        </div>
        <div className="w-full lg:col-span-4">
          <div className="flex flex-col gap-4">
            <EnrollCourseCard />
            <CourseModuleCard />
          </div>
        </div>
      </div>
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
