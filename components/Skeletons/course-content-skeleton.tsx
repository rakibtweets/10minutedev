import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const CourseContentSkeleton = () => {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-0">
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((module) => (
            <div key={module} className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <Skeleton className="size-4" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseContentSkeleton;
