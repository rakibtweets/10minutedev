import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const CourseCardSkeleton = () => {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-40 w-full" />
      <div className="flex flex-col px-3 py-2">
        <Skeleton className="mb-2 h-5 w-3/4" />
        <div className="my-3 flex items-center gap-2">
          <Badge
            variant="secondary"
            className="flex items-center gap-2 rounded-md"
          >
            <Skeleton className="size-4" />
            <Skeleton className="h-4 w-16" />
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default CourseCardSkeleton;
