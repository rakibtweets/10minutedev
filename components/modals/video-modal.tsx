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
  videoId?: string | undefined;
}

const VideoModal = ({ type, module, videoId }: IVideoModalProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{type} Video</DialogTitle>
        <DialogDescription>
          {type === 'Add' ? 'Add new' : 'Edit'} video to module
        </DialogDescription>
      </DialogHeader>
      <div className="custom-scrollbar max-h-[60vh] overflow-y-auto pr-6">
        <VideoForm
          type={type}
          module={type === 'Edit' ? module : ''}
          videoId={type === 'Edit' ? videoId : ''}
        />
      </div>
    </DialogContent>
  );
};
export default VideoModal;
