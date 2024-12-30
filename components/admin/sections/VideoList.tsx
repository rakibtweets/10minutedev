import { IVideo } from '@/types';
import { Video } from 'lucide-react';

interface VideoListProps {
  video: IVideo;
  videoId?: boolean;
}

const VideoList = ({ video, videoId = false }: VideoListProps) => {
  console.log({ video, videoId });
  return (
    <li
      key={video._id}
      className="flex cursor-pointer items-center justify-between"
    >
      <div className="flex items-center">
        <Video className="mr-2 size-4 text-primary" />
        <span>{video.title}</span>
      </div>
      <span className="text-sm text-muted-foreground">{video.duration}</span>
    </li>
  );
};
export default VideoList;
