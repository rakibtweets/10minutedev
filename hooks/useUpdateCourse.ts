import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCourse } from '../lib/api/courses';
import { CourseFormValues } from '@/lib/validation';

export function useUpdateCourse(courseId: string) {
  const queryClient = useQueryClient();
  console.log('update courseId', courseId);

  return useMutation({
    mutationFn: (values: CourseFormValues) => updateCourse(courseId, values),
    onSuccess: () => {
      // Invalidate relevant queries after successful update
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      queryClient.invalidateQueries({ queryKey: ['course', courseId] });
    }
  });
}
