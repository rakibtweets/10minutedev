'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse } from '@/lib/api/courses';
import { useToast } from '@/components/ui/use-toast';

export const useCreateCourse = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      toast({
        variant: 'default',
        title: 'Course created',
        description: 'Your course has been created successfully.'
      });
    },
    onError: (error: unknown) => {
      console.error('Form submission error', error);
      toast({
        variant: 'destructive',
        title: 'Form submission error',
        description: 'error form submission'
      });
    }
  });
};
