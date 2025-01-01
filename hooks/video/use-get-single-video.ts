'use client';
import { useQuery } from '@tanstack/react-query';
import { getVideo } from '@/lib/api/videos';

export const useGetSingleVideo = (videoId: string) => {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => getVideo(videoId),
    enabled: !!videoId
  });
};
