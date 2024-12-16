import UpdateCourse from '@/components/admin/sections/UpdateCourse';
import SkeletonForm from '@/components/Skeletons/form-skeleton';
import { Suspense } from 'react';

const CourseEditPage = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Update Course</h1>
      <Suspense fallback={<SkeletonForm />}>
        <UpdateCourse />
      </Suspense>
    </div>
  );
};
export default CourseEditPage;
