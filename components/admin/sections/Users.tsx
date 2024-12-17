'use client';
import { columns } from '@/components/admin/tables/user-columns';
import { UserTable } from '../tables/user-table';
import { useGetUsers } from '@/hooks/user';
import { TableSkeleton } from '@/components/ui/table-skeleton';

const Users = () => {
  const { data: users, isLoading, isError, error } = useGetUsers();
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

  return <UserTable columns={columns} data={users} />;
};
export default Users;
