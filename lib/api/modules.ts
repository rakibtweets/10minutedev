import api from '@/utils/api';
import { ModuleFormValues } from '../validation';

export const createModule = async (values: ModuleFormValues) => {
  const response = await api.post(
    'http://localhost:5000/api/v1/modules',
    values,
    {
      withCredentials: true
    }
  );

  return response.data;
};

export const getModulesByCourseId = async (queryParams = {}) => {
  const queryString = new URLSearchParams(queryParams).toString();

  const response = await api.get(
    `/modules${queryString ? `?${queryString}` : ''}`
  );

  return response.data;
};

export const getModule = async (moduleId: string) => {
  const response = await api.get(`/modules/${moduleId}`);

  return response.data;
};

export const updateModule = async (
  moduleId: string,
  values: ModuleFormValues
) => {
  const response = await api.put(`/modules/${moduleId}`, values, {
    withCredentials: true
  });

  return response.data;
};

export const updateModuleStatus = async (
  moduleId: string,
  isPublished: boolean
) => {
  const response = await api.put(
    `/modules/${moduleId}/publish`,
    { isPublished },
    {
      withCredentials: true
    }
  );

  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await api.delete(`/modules/${moduleId}`, {
    withCredentials: true
  });

  return response.data;
};
