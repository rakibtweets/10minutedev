import { Skeleton } from '@/components/ui/skeleton';
import CourseDetailsCardSkeleton from './course-details-card-skeleton';
import EnrollCourseCardSkeleton from './enroll-course-card-skeleton';
import CourseContentSkeleton from './course-content-skeleton';

const CourseDetailsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="w-full lg:col-span-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full">
            <Skeleton className="h-[400px]  w-full rounded-lg lg:rounded-xl" />
          </div>
          <div className="w-full">
            <CourseDetailsCardSkeleton />
          </div>
        </div>
      </div>
      <div className="w-full lg:col-span-4">
        <div className="flex flex-col gap-4">
          <EnrollCourseCardSkeleton />
          <CourseContentSkeleton />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSkeleton;
