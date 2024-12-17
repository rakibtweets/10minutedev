import Users from '@/components/admin/sections/Users';
import { TableSkeleton } from '@/components/ui/table-skeleton';
import { Suspense } from 'react';

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-5 text-2xl font-bold">All Users</h1>
      <Suspense
        fallback={
          <TableSkeleton columnCount={5} rowCount={5} showPagination={true} />
        }
      >
        <Users />
      </Suspense>
    </div>
  );
}
