'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '@/lib/api/courses';

export const useGetSingleCourse = (courseId: string) => {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: () => getCourse(courseId),
    enabled: !!courseId
  });
};
