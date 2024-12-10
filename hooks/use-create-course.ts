'use client';
import { useMutation } from '@tanstack/react-query';
import { createCourse } from '@/lib/api/courses';
import { useToast } from '@/components/ui/use-toast';

export const useCreateCourse = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
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
