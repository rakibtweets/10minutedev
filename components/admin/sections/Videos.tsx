'use client';

import VideoListSkeleton from '@/components/Skeletons/video-list-skeleton';
import { useGetVideos } from '@/hooks/video';
import { ParamsProps } from '@/types';
import { useParams } from 'next/navigation';
import VideoItem from './VideoItem';

const Videos = ({ moduleId }: { moduleId: string }) => {
  const params = useParams<ParamsProps>();
  const { data: videos, isError, error, isLoading } = useGetVideos(moduleId);
  if (isLoading) {
    return <VideoListSkeleton />;
  }

  if (isError) {
    return (
      <div className="py-4 text-center text-red-500">
        Error:{' '}
        {error instanceof Error ? error.message : 'Failed to fetch videos'}
      </div>
    );
  }
  return (
    <VideoItem
      videos={videos ?? []}
      module={moduleId}
      course={params?.courseId}
    />
  );
};
export default Videos;
