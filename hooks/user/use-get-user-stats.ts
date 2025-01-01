'use client';
import { useQuery } from '@tanstack/react-query';
import { getUserStatisticsAndEnrolledCourses } from '@/lib/api/users';

export function useUserStatisticsAndEnrolledCourses() {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: getUserStatisticsAndEnrolledCourses
  });
}
