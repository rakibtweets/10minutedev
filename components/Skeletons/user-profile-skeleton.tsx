import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function UserProfileCardSkeleton() {
  return (
    <Card className="mx-auto w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Skeleton className="size-28 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-48" />
        </div>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <Skeleton className="mb-1 h-4 w-24" />
              <Skeleton className="h-5 w-32" />
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
