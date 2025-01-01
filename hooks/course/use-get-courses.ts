'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/lib/api/courses';
import { ICourse } from '@/types';

interface CoursesQueryParams {
  isPublished?: boolean;
  keyword?: string;
  tag?: string;
  limit?: number;
}

export const useGetCourses = (queryParams: CoursesQueryParams = {}) => {
  return useQuery<ICourse[] | undefined>({
    queryKey: ['courses', queryParams],
    queryFn: () => getCourses(queryParams)
  });
};
