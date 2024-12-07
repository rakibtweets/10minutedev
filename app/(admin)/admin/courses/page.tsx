import { columns } from '@/components/admin/tables/columns';
import { DataTable } from '@/components/admin/tables/data-table';
import { Button } from '@/components/ui/button';
import { coursesDatas } from '@/constants';
import Link from 'next/link';

const AdminCoursesPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="mb-5 text-2xl font-bold">All Courses</h1>
        <Button className="w-fit" variant="default">
          <Link href="/admin/courses/new">Add Course</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={coursesDatas} />
    </div>
  );
};
export default AdminCoursesPage;
