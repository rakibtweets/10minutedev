'use client';
import CourseForm from '@/components/forms/CourseForm';
import SkeletonForm from '@/components/Skeletons/form-skeleton';
import { useGetSingleCourse } from '@/hooks/useGetSingleCourse';
import { ParamsProps } from '@/types';
import { useParams } from 'next/navigation';

const UpdateCourse = () => {
  const params = useParams<ParamsProps>();
  const {
    data: course,
    isLoading,
    isError,
    error
  } = useGetSingleCourse(params?.id);

  if (isLoading) {
    return <SkeletonForm />;
  }
  if (isError) {
    return (
      <div className="py-4 text-center text-red-500">
        Error:{' '}
        {error instanceof Error ? error.message : 'Failed to fetch course'}
      </div>
    );
  }
  return <CourseForm type="update" course={course} />;
};
export default UpdateCourse;
