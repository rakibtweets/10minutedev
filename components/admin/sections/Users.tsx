import { DataTable } from '../tables/data-table';
import { users } from '@/constants';
import { columns } from '@/components/admin/tables/user-columns';

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return users;
};

const Users = async () => {
  const users = await getUsers();
  return <DataTable columns={columns} data={users} />;
};
export default Users;
