import { users } from '@/constants';
import { columns } from '@/components/admin/tables/user-columns';
import { UserTable } from '../tables/user-table';

const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return users;
};

const Users = async () => {
  const users = await getUsers();
  return <UserTable columns={columns} data={users} />;
};
export default Users;
