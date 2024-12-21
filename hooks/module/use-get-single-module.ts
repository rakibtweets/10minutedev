'use client';
import { useQuery } from '@tanstack/react-query';
import { getModule } from '@/lib/api/modules';

export const useGetSingleModule = (moduleId: string) => {
  return useQuery({
    queryKey: ['module', moduleId],
    queryFn: () => getModule(moduleId),
    enabled: !!moduleId
  });
};
