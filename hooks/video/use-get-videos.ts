'use client';
import { useQuery } from '@tanstack/react-query';
import { IVideo } from '@/types';
import { getVideosByModuleId } from '@/lib/api/videos';

export const useGetVideos = (moduleId: string) => {
  return useQuery<IVideo[] | undefined>({
    queryKey: ['videos'],
    queryFn: () => getVideosByModuleId(moduleId)
  });
};
