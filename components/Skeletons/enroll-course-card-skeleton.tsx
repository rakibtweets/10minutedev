import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const EnrollCourseCardSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="mb-2 h-8 w-3/4" />
        <Skeleton className="h-6 w-1/4" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <div className="mt-4">
          <Skeleton className="mb-2 h-6 w-1/2" />
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="flex items-center">
                <Skeleton className="mr-2 size-5" />
                <Skeleton className="h-4 w-3/4" />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrollCourseCardSkeleton;
