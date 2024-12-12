import UpdateCourse from '@/components/admin/sections/UpdateCourse';
import SkeletonForm from '@/components/Skeletons/form-skeleton';
import { ParamsProps } from '@/types';
import { Suspense } from 'react';

const CourseEditPage = ({ params }: ParamsProps) => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Update Course</h1>
      <Suspense fallback={<SkeletonForm />}>
        <UpdateCourse courseId={params?.id} />
      </Suspense>
    </div>
  );
};
export default CourseEditPage;
