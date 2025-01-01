import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

interface NotFoundProps {
  statusCode?: number;
  title?: string;
  message?: string;
  actionText?: string;
  actionHref?: string;
}

export default function NotFound({
  statusCode,
  title = 'Not Found',
  message = "The resource you're looking for doesn't exist or has been moved.",
  actionText = 'Go back home',
  actionHref = '/'
}: NotFoundProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-yellow-100">
          <AlertTriangle className="size-6 text-yellow-600" />
        </div>
        <CardTitle className="text-center text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {statusCode && (
          <p className="text-center text-muted-foreground">
            Status Code: {statusCode}
          </p>
        )}
        <p className="mt-4 text-center text-muted-foreground">{message}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href={actionHref}>{actionText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
