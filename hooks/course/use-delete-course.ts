import { useToast } from '@/components/ui/use-toast';
import { deleteCourse } from '@/lib/api/courses';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteCourse(courseId: string) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: () => deleteCourse(courseId),
    onSuccess: () => {
      // Invalidate relevant queries after successful deletion
      queryClient.invalidateQueries({ queryKey: ['courses'] });

      toast({
        variant: 'default',
        title: 'Course Deleted',
        description: 'Course has been successfully deleted'
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
