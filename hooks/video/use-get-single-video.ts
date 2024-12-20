'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '@/lib/api/courses';

export const useGetSingleModule = (videoId: string) => {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => getCourse(videoId),
    enabled: !!videoId
  });
};
