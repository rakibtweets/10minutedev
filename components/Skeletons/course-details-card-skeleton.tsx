import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CourseDetailsCardSkeleton = () => {
  return (
    <Card className="py-4">
      <CardHeader className="space-y-3 py-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2 pb-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </CardFooter>
    </Card>
  );
};

export default CourseDetailsCardSkeleton;
