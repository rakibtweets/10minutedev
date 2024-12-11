'use client';
import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../lib/api/courses';

export const useGetCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: getCourses
  });
};
