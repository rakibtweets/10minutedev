import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCourse, updateCourseIsPublished } from '@/lib/api/courses';
import { UpdateCourseFormValues } from '@/lib/validation';
import { useToast } from '@/components/ui/use-toast';

export function useUpdateCourse(courseId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: UpdateCourseFormValues) =>
      updateCourse(courseId, values),
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['course', courseId], data);
      queryClient.invalidateQueries({
        queryKey: ['courses'],
        exact: false
      });
    }
  });
}

export function useUpdateCourseIsPublished(courseId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (isPublished: boolean) =>
      updateCourseIsPublished(courseId, isPublished),
    onSuccess: (data) => {
      queryClient.setQueryData(['course', courseId], data);
      queryClient.invalidateQueries({ queryKey: ['courses'] });

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
