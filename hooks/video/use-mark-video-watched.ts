'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { markVideoAsWatched } from '@/lib/api/videos';

export function useMarkVideoAsWatched(videoId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => markVideoAsWatched(videoId),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['video', videoId], data);
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      queryClient.invalidateQueries({ queryKey: ['module', data.module] });
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    }
  });
}
