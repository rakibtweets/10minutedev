'use client';

import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader
} from '@/components/ui/dialog';
import VideoForm from '../forms/VideoForm';

interface IVideoModalProps {
  type: 'Add' | 'Edit';
  module?: string | undefined;
}

const VideoModal = ({ type, module }: IVideoModalProps) => {
  const descriptionId = `${type.toLowerCase()}-video-description`;
  return (
    <DialogContent
      aria-describedby={descriptionId}
      className="sm:max-w-[425px] "
    >
      <DialogHeader>
        <DialogTitle>{type} Video</DialogTitle>
        <DialogDescription id={descriptionId}>
          {type === 'Add' ? 'Add new' : 'Edit'} video to module
        </DialogDescription>
      </DialogHeader>
      <div className="custom-scrollbar flex max-h-[60vh] grow flex-col justify-between overflow-y-auto px-4">
        <VideoForm type={type} module={module} />
      </div>
    </DialogContent>
  );
};
export default VideoModal;
