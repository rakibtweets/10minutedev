'use client';
import { CourseTable } from '../tables/course-table';
import { columns } from '@/components/admin/tables/course-columns';
import NotFound from '@/components/ui/not-found';
import { TableSkeleton } from '@/components/ui/table-skeleton';
import { useGetCourses } from '@/hooks/course';

const Courses = () => {
  const { data: courses, isError, error, isLoading } = useGetCourses();

  if (isLoading) {
    return <TableSkeleton columnCount={5} rowCount={5} showPagination={true} />;
  }

  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }

  return <CourseTable columns={columns} data={courses} />;
};
export default Courses;
