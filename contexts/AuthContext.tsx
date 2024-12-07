'use client';

import React, { createContext } from 'react';
import { AuthContextType, UserProfile } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    isError
  } = useQuery<UserProfile>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/user', {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    }
  });

  // const logoutMutation = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch('http://localhost:5000/api/logout', {
  //       method: 'GET',
  //       credentials: 'include' // Important for including cookies in the request
  //     });
  //     if (!response.ok) {
  //       toast({
  //         variant: 'destructive',
  //         title: 'Uh oh! Something went wrong.',
  //         description: 'There was a problem with your request.'
  //       });
  //     }
  //   },
  //   onSuccess: () => {
  //     queryClient.clear(); // Clear all queries in the cache
  //     toast({
  //       description: 'Logged out successfully'
  //     });
  //     router.push('/sign-in'); // Redirect to sign-in page
  //   }
  // });
  const logout = () => {
    // logoutMutation.mutate();
    router.push('http://localhost:5000/api/logout');
  };

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        isError,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
