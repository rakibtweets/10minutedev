'use client';
import { useQuery } from '@tanstack/react-query';
import { getAdminStats } from '@/lib/api/users';

export function useGetAdminStats() {
  return useQuery({ queryKey: ['adminStats'], queryFn: getAdminStats });
}
