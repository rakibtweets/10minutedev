import EnrollCourse from '@/components/admin/sections/EnrolledCourse';
import CourseDetailsSkeleton from '@/components/Skeletons/course-details-skeleton';
import { Suspense } from 'react';

const CourseAccessPage = () => {
  return (
    <section className="">
      <Suspense fallback={<CourseDetailsSkeleton />}>
        <EnrollCourse />
      </Suspense>
    </section>
  );
};
export default CourseAccessPage;
