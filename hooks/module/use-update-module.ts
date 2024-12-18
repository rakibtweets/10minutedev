'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCourseIsPublished } from '@/lib/api/courses';
import { ModuleFormValues } from '@/lib/validation';
import { useToast } from '@/components/ui/use-toast';
import { updateModule } from '@/lib/api/modules';

export function useUpdateModule(moduleId: string) {
  console.log('useUpdateModule  moduleId:', moduleId);

  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: ModuleFormValues) => updateModule(moduleId, values),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['module', moduleId], data);
      queryClient.invalidateQueries({ queryKey: ['modules'] });
    }
  });
}

export function useUpdateModuleIsPublished(moduleId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (isPublished: boolean) =>
      updateCourseIsPublished(moduleId, isPublished),
    onSuccess: (data) => {
      queryClient.setQueryData(['module', moduleId], data);
      queryClient.invalidateQueries({ queryKey: ['modules'] });

      // Determine success message based on `isPublished` value
      const message = data.isPublished
        ? 'Course has been successfully published'
        : 'Course has been successfully unpublished';

      const title = data.isPublished
        ? 'Course Published'
        : 'Course Unpublished';

      toast({
        variant: 'default',
        title,
        description: message
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
