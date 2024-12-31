import HeroBanner from '@/components/HeroSection/HeroBanner';
import HomeCourses from '@/components/sections/HomeCourses';
import CourseCardSkeleton from '@/components/Skeletons/course-card-skelton';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="max-w-6xl gap-0">
      <HeroBanner />

      {/* Courses Section */}
      <section className="mt-5">
        <div className="flex items-center justify-center gap-4 space-y-9">
          <div className="flex max-w-[61rem] flex-1 flex-col gap-1">
            <h1 className=" text-2xl font-bold leading-[1.1] md:text-3xl">
              Featured Courses
            </h1>
            <p className="max-w-[46.875rem] text-balance text-sm leading-normal text-muted-foreground sm:text-base sm:leading-7">
              Explore our free courses fron youtube
            </p>
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
          <Suspense
            fallback={Array(4)
              .fill(0)
              .map((_, index) => (
                <CourseCardSkeleton key={index} />
              ))}
          >
            <HomeCourses />
          </Suspense>
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
    </main>
  );
}
