'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserById } from '@/lib/api/users';
import { UserFormValues } from '@/lib/validation';
import { useToast } from '@/components/ui/use-toast';

export function useUpdateUser(userId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (values: UserFormValues) => updateUserById(userId, values),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['user', userId], data);
      queryClient.invalidateQueries({ queryKey: ['users'] });

      toast({
        variant: 'default',
        title: 'User Updated',
        description: 'User has been successfully updated'
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
