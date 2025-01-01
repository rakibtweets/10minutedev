'use client';
import { useQuery } from '@tanstack/react-query';
import { getModulesByCourseId } from '@/lib/api/modules';
import { IModule } from '@/types';

interface ModuleQueryParams {
  [key: string]: any;
}

export const useGetModules = (queryParams: ModuleQueryParams = {}) => {
  return useQuery<IModule[] | undefined>({
    queryKey: ['modules', queryParams.courseId],
    queryFn: () => getModulesByCourseId(queryParams)
  });
};
