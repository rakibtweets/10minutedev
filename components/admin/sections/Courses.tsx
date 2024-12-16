'use client';
import { CourseTable } from '../tables/course-table';
import { columns } from '@/components/admin/tables/course-columns';
import { TableSkeleton } from '@/components/ui/table-skeleton';
import { useGetCourses } from '@/hooks/course';

const Courses = () => {
  const { data: courses, isError, error, isLoading } = useGetCourses();

  if (isLoading) {
    return <TableSkeleton columnCount={5} rowCount={5} showPagination={true} />;
  }

  if (isError) {
    return (
      <div className="py-4 text-center text-red-500">
        Error:{' '}
        {error instanceof Error ? error.message : 'Failed to fetch courses'}
      </div>
    );
  }

  return <CourseTable columns={columns} data={courses} />;
};
export default Courses;
