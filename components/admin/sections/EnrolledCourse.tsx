'use client';
import CourseDetailsCard from '@/components/cards/CourseDetailsCard';
import { useParams, useSearchParams } from 'next/navigation';
import { ParamsProps } from '@/types';
import { useGetSingleCourse } from '@/hooks/course';
import CourseDetailsSkeleton from '@/components/Skeletons/course-details-skeleton';
import NotFound from '@/components/ui/not-found';
import CourseContentSkeleton from '@/components/Skeletons/course-content-skeleton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Suspense } from 'react';
import EnrolledCourseModules from './EnrolledCourseModules';
import YouTubeVideoPlayer from '@/components/sections/YouTubeVideoPlayer';
import Image from 'next/image';

const EnrollCourse = () => {
  const params = useParams<ParamsProps>();
  const searchParams = useSearchParams();
  const videoId = searchParams.get('videoId');

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
            {!videoId ? (
              <Image
                src={course?.thumbnail?.url || ''}
                alt={'Course title'}
                width={800}
                height={400}
                className="w-full rounded-lg lg:rounded-xl"
              />
            ) : (
              <YouTubeVideoPlayer />
            )}
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
          <Card className="w-full">
            <CardHeader className="space-y-0">
              <CardTitle className="text-xl font-bold">
                Course Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<CourseContentSkeleton />}>
                <EnrolledCourseModules />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default EnrollCourse;
