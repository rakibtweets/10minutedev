'use client';
import { useQuery } from '@tanstack/react-query';
import { getModule } from '@/lib/api/modules';
import { IModule } from '@/types';

export const useGetSingleModule = (moduleId: string) => {
  return useQuery<IModule | undefined>({
    queryKey: ['module', moduleId],
    queryFn: () => getModule(moduleId),
    enabled: !!moduleId
  });
};
