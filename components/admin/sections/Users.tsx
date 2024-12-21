'use client';
import { columns } from '@/components/admin/tables/user-columns';
import { UserTable } from '../tables/user-table';
import { useGetUsers } from '@/hooks/user';
import { TableSkeleton } from '@/components/ui/table-skeleton';
import NotFound from '@/components/ui/not-found';

const Users = () => {
  const { data: users, isLoading, isError, error } = useGetUsers();
  if (isLoading) {
    return <TableSkeleton columnCount={5} rowCount={5} showPagination={true} />;
  }

  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch users" />
      </div>
    );
  }

  return <UserTable columns={columns} data={users} />;
};
export default Users;
