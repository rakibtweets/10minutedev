'use client';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const LoginSuccess = () => {
  const { isLoading } = useAuth();
  const router = useRouter();
  if (isLoading) {
    return <div className="text-3xl font-bold">Authenticating...</div>;
  } else {
    router.push('/');
  }
};

export default LoginSuccess;
