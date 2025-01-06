import api from '@/utils/api';
import { UserFormValues } from '../validation';

export const updateUserById = async (
  userId: string,
  values: UserFormValues
) => {
  const response = await api.put(`/users/${userId}`, values);

  return response.data;
};

export const getUsers = async () => {
  const response = await api.get(`/users`);
  return response.data;
};

export const getAdminStats = async () => {
  const response = await api.get(`/users/admin-stats`, {
    withCredentials: true
  });
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await api.delete(`/users/${userId}`, {
    withCredentials: true
  });

  return response.data;
};

export const getEnrolledCoursesService = async () => {
  const response = await api.get(`/users/enrolled-courses`, {
    withCredentials: true
  });

  return response.data;
};
export const getUserStatisticsAndEnrolledCourses = async () => {
  const response = await api.get(`/users/dashboard`, {
    withCredentials: true
  });

  return response.data;
};
