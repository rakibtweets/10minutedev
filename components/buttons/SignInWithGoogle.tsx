'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import GmailIcon from '../icons/Gmail';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const SignInWithGoogle = ({ method }: { method: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleGoolgeLogin = () => {
    setIsLoading(true);
    router.push(`http://localhost:5000/api/auth/google`);
    return setIsLoading(false);
  };
  return (
    <Button
      disabled={isLoading}
      onClick={handleGoolgeLogin}
      className="w-full"
      variant="outline"
    >
      {isLoading ? (
        <LoaderCircle className="mr-3 size-4 animate-spin" />
      ) : (
        <GmailIcon />
      )}
      {method} with Google
    </Button>
  );
};
export default SignInWithGoogle;
