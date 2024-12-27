'use client';
import { useQuery } from '@tanstack/react-query';
import { getEnrolledCoursesService } from '@/lib/api/users';

export function useGetUserEnrolledCourses() {
  return useQuery({
    queryKey: ['enrollment'],
    queryFn: getEnrolledCoursesService
  });
}
