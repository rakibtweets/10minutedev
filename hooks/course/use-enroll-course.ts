import { useMutation } from '@tanstack/react-query';
import { enrollToCourseService } from '@/lib/api/courses';
import { EnrollFormValues } from '@/lib/validation';

export function useEnrollCourse(courseId: string) {
  return useMutation({
    mutationFn: (values: EnrollFormValues) =>
      enrollToCourseService(courseId, values)
  });
}
