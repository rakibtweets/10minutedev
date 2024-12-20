'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ModuleFormValues } from '@/lib/validation';
import { updateModule } from '@/lib/api/modules';

export function useUpdateVideo(videoId: string) {
  console.log('useUpdateModule  videoId:', videoId);

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: ModuleFormValues) => updateModule(videoId, values),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['video', videoId], data);
      queryClient.invalidateQueries({ queryKey: ['videos'] });
    }
  });
}
