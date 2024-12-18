'use client';
import { useQuery } from '@tanstack/react-query';
import { getModulesByCourseId } from '@/lib/api/modules';
import { IModule } from '@/types';

export const useGetModules = (courseId: string) => {
  return useQuery<IModule[] | undefined>({
    queryKey: ['modules'],
    queryFn: () => getModulesByCourseId(courseId)
  });
};
