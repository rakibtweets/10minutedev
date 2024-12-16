'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/lib/api/users';
import { useToast } from '@/components/ui/use-toast';

export function useDeleteUser(userId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => deleteUser(userId),
    onSuccess: () => {
      // Invalidate relevant queries after successful deletion
      queryClient.invalidateQueries({ queryKey: ['users'] });

      toast({
        variant: 'default',
        title: 'User Deleted',
        description: 'User has been successfully deleted'
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
