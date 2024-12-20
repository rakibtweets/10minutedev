'use client';
import { useToast } from '@/components/ui/use-toast';
import { deleteVideo } from '@/lib/api/videos';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteVideo(videoId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: () => deleteVideo(videoId),
    onSuccess: () => {
      // Invalidate relevant queries after successful deletion
      queryClient.invalidateQueries({ queryKey: ['videos'] });

      toast({
        variant: 'default',
        title: 'Video Deleted',
        description: 'Video has been successfully deleted'
      });
    },
    onError: (error: unknown) => {
      toast({
        title: 'Error',
        // @ts-ignore
        description: error?.message,
        variant: 'destructive'
      });
    }
  });
}
