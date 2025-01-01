import EnrollmentTable from '@/components/admin/tables/enrollment-table';
import { TableSkeleton } from '@/components/ui/table-skeleton';
import { Suspense } from 'react';

const EmrollmentPage = () => {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Enrolled Courses</h2>
      <Suspense
        fallback={
          <TableSkeleton columnCount={5} rowCount={5} showPagination={false} />
        }
      >
        <EnrollmentTable />
      </Suspense>
    </div>
  );
};
export default EmrollmentPage;
