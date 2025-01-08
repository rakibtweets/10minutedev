'use client';

import { useAuth } from '@/hooks/useAuth';
import { IVideo } from '@/types';
import { CircleCheck, Video } from 'lucide-react';

interface VideoListProps {
  video: IVideo;
  videoId?: boolean;
  isActive?: boolean;
  handleButtonClick?: (item: string) => void;
}

const VideoList = ({
  video,
  videoId = false,
  isActive,
  handleButtonClick
}: VideoListProps) => {
  const { user } = useAuth();

  const isWatched = user ? video?.watchedBy?.includes(user._id) : false;

  return (
    <>
      {videoId ? (
        <li
          key={video._id}
          className={`${isActive ? 'bg-green-500/60 hover:bg-green-500/80' : 'hover:bg-secondary-foreground/10'} flex cursor-pointer items-center justify-between rounded-md p-2`}
          onClick={() => {}}
          onClickCapture={() =>
            handleButtonClick && handleButtonClick(video.videoId)
          }
        >
          <div className="flex items-center">
            {isWatched ? (
              <CircleCheck className="mr-2 size-4 text-green-500" />
            ) : (
              <Video className="mr-2 size-4 text-primary" />
            )}
            <span>{video.title}</span>
          </div>
          <span
            className={`text-sm ${isActive ? 'text-white' : 'text-muted-foreground'}`}
          >
            {video.duration}
          </span>
        </li>
      ) : (
        <li
          key={video._id}
          className="flex cursor-pointer items-center justify-between"
        >
          <div className="flex items-center">
            <Video className="mr-2 size-4 text-primary" />
            <span>{video.title}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {video.duration}
          </span>
        </li>
      )}
    </>
  );
};
export default VideoList;
