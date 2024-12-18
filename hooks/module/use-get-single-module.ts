'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '@/lib/api/courses';

export const useGetSingleModule = (moduleId: string) => {
  return useQuery({
    queryKey: ['module', moduleId],
    queryFn: () => getCourse(moduleId),
    enabled: !!moduleId
  });
};
