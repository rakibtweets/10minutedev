import { DataTable } from '../tables/data-table';
import { coursesDatas } from '@/constants';
import { columns } from '@/components/admin/tables/course-columns';

const getCourses = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return coursesDatas;
};

const Courses = async () => {
  const courses = await getCourses();
  return <DataTable columns={columns} data={courses} />;
};
export default Courses;
