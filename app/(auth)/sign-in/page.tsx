import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import SignInWithGoogle from '@/components/buttons/SignInWithGoogle';
import SignInWithGithub from '@/components/buttons/SignInWithGithub';

export default function SignInPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold">
          Sign in to{' '}
          <p className="font-bold">
            10minute<span className="text-orange-500">Dev</span>
          </p>
        </CardTitle>
        <CardDescription className="text-center">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignInWithGoogle />
        <SignInWithGithub />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-2">
        <div className="text-sm text-gray-500">
          No account?{' '}
          <Link className="text-primary underline" href="/sign-up">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
