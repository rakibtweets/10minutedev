import CourseDetails from '@/components/sections/course-details';
import CourseDetailsSkeleton from '@/components/Skeletons/course-details-skeleton';

import { Suspense } from 'react';

const CourseDetailsPage = () => {
  return (
    <section className="">
      <Suspense fallback={<CourseDetailsSkeleton />}>
        <CourseDetails />
      </Suspense>

      {/* Related Courses */}
      {/* <ReletedCourses/> */}
    </section>
  );
};
export default CourseDetailsPage;
