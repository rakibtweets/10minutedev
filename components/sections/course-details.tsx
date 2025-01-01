'use client';
import Image from 'next/image';
import CourseDetailsCard from '@/components/cards/CourseDetailsCard';
import CourseModuleCard from '@/components/cards/CourseModuleCard';
import EnrollCourseCard from '@/components/cards/EnrollCourseCard';
import { useParams } from 'next/navigation';
import { ParamsProps } from '@/types';
import { useGetSingleCourse } from '@/hooks/course';
import CourseDetailsSkeleton from '../Skeletons/course-details-skeleton';
import NotFound from '../ui/not-found';

const CourseDetails = () => {
  const params = useParams<ParamsProps>();
  const {
    data: course,
    isError,
    error,
    isLoading
  } = useGetSingleCourse(params.id);
  if (isLoading) {
    return <CourseDetailsSkeleton />;
  }
  if (isError) {
    return (
      <div className="flex w-full items-center justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="w-full lg:col-span-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="w-full">
            <Image
              src={course?.thumbnail?.url || ''}
              alt={'Course title'}
              width={800}
              height={400}
              className="w-full rounded-lg lg:rounded-xl"
            />
          </div>
          <div className="w-full">
            <CourseDetailsCard
              title={course?.title}
              description={course?.description}
              instructor={course?.instructor}
              tags={course?.tags}
              videoCount={course?.noOfVideos}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-4">
        <div className="flex flex-col gap-4">
          <EnrollCourseCard
            courseName={course?.title}
            enrolledCount={course?.enrolledStudents}
            price={course?.price}
            level={course?.level}
            videoCount={course?.noOfVideos}
            courseValidity="Lifetime"
          />
          <CourseModuleCard />
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
