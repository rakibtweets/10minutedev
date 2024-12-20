import { Skeleton } from '../ui/skeleton';

const VideoListSkeleton = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((videoIndex) => (
        <div key={videoIndex} className="flex items-center justify-between">
          <Skeleton className="h-8 w-3/4" />
          <div className="flex items-center">
            <Skeleton className="mr-2 size-8" />
            <Skeleton className="size-8" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default VideoListSkeleton;
