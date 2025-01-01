'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourse } from '@/lib/api/courses';
import { ICourse } from '@/types';

export const useGetSingleCourse = (courseId: string) => {
  return useQuery<ICourse | undefined>({
    queryKey: ['course', courseId],
    queryFn: () => getCourse(courseId),
    enabled: !!courseId
  });
};
