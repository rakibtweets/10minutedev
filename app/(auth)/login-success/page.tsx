'use client';
import { useRouter } from 'next/navigation';

const LoginSuccess = () => {
  const router = useRouter();
  router.push('/');
  return (
    <div className="text-3xl font-bold">Authenticating...</div> // Or a loading indicator
  );
};

export default LoginSuccess;
