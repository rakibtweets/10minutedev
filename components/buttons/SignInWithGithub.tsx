'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import GithubIcon from '../icons/Github';
import { LoaderCircle } from 'lucide-react';

const SignInWithGithub = ({ method }: { method: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleGitHubLogin = () => {
    setIsLoading(true);
    router.push('http://localhost:5000/api/auth/github');
    return setIsLoading(false);
  };

  return (
    <Button
      disabled={isLoading}
      onClick={handleGitHubLogin}
      className="w-full"
      variant="outline"
    >
      {isLoading ? (
        <LoaderCircle className="mr-3 size-4 animate-spin" />
      ) : (
        <GithubIcon />
      )}
      {method} with GitHub
    </Button>
  );
};
export default SignInWithGithub;
