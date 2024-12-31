'use client';
import CourseCard from '../cards/courseCard';
import { useGetCourses } from '@/hooks/course';
import CourseCardSkeleton from '../Skeletons/course-card-skelton';
import NotFound from '../ui/not-found';
import { ICourse } from '@/types';
import { useSearchParams } from 'next/navigation';

const HomeCourses = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || '';

  const {
    data: courses,
    isError,
    error,
    isLoading
  } = useGetCourses({ isPublished: true, tag, limit: 4 });

  if (isLoading) {
    return Array(4)
      .fill(0)
      .map((_, index) => <CourseCardSkeleton key={index} />);
  }
  if (isError) {
    return (
      <div className="flex w-full items-center justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }

  return (
    <>
      {courses && courses?.length > 0 ? (
        courses?.map((course: ICourse) => (
          <CourseCard
            key={course._id}
            id={course._id}
            imageAlt={course.thumbnail.publicId}
            imageSrc={course.thumbnail.url}
            projectName={course.title}
            videoCount={course.noOfVideos}
          />
        ))
      ) : (
        <p className="flex h-[30vh] items-center justify-center text-center text-3xl text-muted-foreground">
          No Course Available
        </p>
      )}
    </>
  );
};

export default HomeCourses;
