import CourseDetails from '@/components/sections/course-details';
import CourseDetailsSkeleton from '@/components/Skeletons/course-details-skeleton';
import { Suspense } from 'react';

const CourseAccessPage = () => {
  return (
    <section className="">
      <Suspense fallback={<CourseDetailsSkeleton />}>
        <CourseDetails />
      </Suspense>
    </section>
  );
};
export default CourseAccessPage;
