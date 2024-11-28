import { columns } from '@/components/admin/tables/user-columns';
import { DataTable } from '@/components/admin/tables/data-table';
import { users } from '@/constants';

export default function UsersPage() {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">All Users</h1>
      <DataTable columns={columns} data={users} />
    </div>
  );
}
