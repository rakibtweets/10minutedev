import { columns } from '@/components/admin/tables/columns';
import { DataTable } from '@/components/admin/tables/data-table';
import { coursesDatas } from '@/constants';

const AdminCoursesPage = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">All Courses</h1>
      <DataTable columns={columns} data={coursesDatas} />
    </div>
  );
};
export default AdminCoursesPage;
