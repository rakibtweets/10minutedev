'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createModule } from '@/lib/api/modules';

export const useCreateModule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    }
  });
};
