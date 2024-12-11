import Courses from '@/components/admin/sections/Courses';
import { CourseTableSkeleton } from '@/components/Skeletons/course-table-skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';

const AdminCoursesPage = () => {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="mb-5 text-2xl font-bold">All Courses</h1>
        <Button className="w-fit" variant="default">
          <Link href="/admin/courses/new">Add Course</Link>
        </Button>
      </div>
      <Suspense fallback={<CourseTableSkeleton />}>
        <Courses />
      </Suspense>
    </div>
  );
};
export default AdminCoursesPage;
