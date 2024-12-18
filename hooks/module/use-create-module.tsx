'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { createModule } from '@/lib/api/modules';

export const useCreateModule = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createModule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] });
      toast({
        variant: 'default',
        title: 'Course created',
        description: 'Your course has been created successfully.'
      });
    },
    onError: (error: unknown) => {
      console.error('Form submission error', error);
      toast({
        title: 'Error',
        // @ts-ignore
        description: error?.message,
        variant: 'destructive'
      });
    }
  });
};
