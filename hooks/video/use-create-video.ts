'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createVideo } from '@/lib/api/videos';

export const useCreateVideo = (moduleId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      queryClient.invalidateQueries({ queryKey: ['module', moduleId] });
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    }
  });
};
