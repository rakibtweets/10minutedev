'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '@/lib/api/courses';
import { ICourse } from '@/types';

interface CoursesQueryParams {
  [key: string]: any;
}

export const useGetCourses = (queryParams: CoursesQueryParams = {}) => {
  return useQuery<ICourse[] | undefined>({
    queryKey: ['courses'],
    queryFn: () => getCourses(queryParams)
  });
};
