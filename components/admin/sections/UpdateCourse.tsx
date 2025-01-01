'use client';
import CourseForm from '@/components/forms/CourseForm';
import SkeletonForm from '@/components/Skeletons/form-skeleton';
import NotFound from '@/components/ui/not-found';
import { useGetSingleCourse } from '@/hooks/course';
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
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch course" />
      </div>
    );
  }
  return <CourseForm type="update" course={course} />;
};
export default UpdateCourse;
