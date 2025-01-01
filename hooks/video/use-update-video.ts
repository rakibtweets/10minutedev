'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { VideoFormValues } from '@/lib/validation';
import { updateVideo } from '@/lib/api/videos';

export function useUpdateVideo(videoId: string, moduleId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: VideoFormValues) => updateVideo(videoId, values),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['video', videoId], data);
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      queryClient.invalidateQueries({ queryKey: ['module', moduleId] });
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    }
  });
}
