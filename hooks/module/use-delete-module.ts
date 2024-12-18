'use client';
import { useToast } from '@/components/ui/use-toast';
import { deleteModule } from '@/lib/api/modules';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteModule(courseId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: () => deleteModule(courseId),
    onSuccess: () => {
      // Invalidate relevant queries after successful deletion
      queryClient.invalidateQueries({ queryKey: ['modules'] });

      toast({
        variant: 'default',
        title: 'Module Deleted',
        description: 'Module has been successfully deleted'
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
