'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { createVideo } from '@/lib/api/videos';

export const useCreateVideo = (moduleId: string) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createVideo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
      queryClient.invalidateQueries({ queryKey: ['module', moduleId] });
      queryClient.invalidateQueries({ queryKey: ['modules'] });
      toast({
        variant: 'default',
        title: 'Video uploaded',
        description: 'Your video has been uploaded successfully.'
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
