'use client';
import DeleteVideoButton from '@/components/buttons/DeleteVideoButton';
import VideoModal from '@/components/modals/video-modal';
import { VideoPopupModal } from '@/components/modals/video-popup';
import { Button } from '@/components/ui/button';
import { IVideo } from '@/types';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Video, Edit } from 'lucide-react';

interface VideoItemProps {
  videos: IVideo[];
  module: string | undefined;
  course: string | undefined;
}

const VideoItem = ({ module, videos, course }: VideoItemProps) => {
  return (
    <>
      {videos?.length > 0 ? (
        <div className="space-y-2">
          {videos?.map((video) => {
            return (
              <div
                key={video._id}
                className="flex items-center justify-between"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      key={video._id}
                      variant="ghost"
                      className="flex w-full items-center justify-start gap-1"
                    >
                      <Video className="mr-2 size-4" />
                      <span>{video.title}</span>
                      <span>({video.duration})</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="aspect-video w-full max-w-[600px] p-0">
                    <VideoPopupModal videoId={video?.videoId} />
                  </DialogContent>
                </Dialog>

                <div className="flex items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button title="Edit" variant="outline" className="mr-2">
                        <Edit className="size-4" />
                      </Button>
                    </DialogTrigger>

                    <VideoModal
                      type="Edit"
                      module={module}
                      course={course}
                      video={video}
                    />
                  </Dialog>
                  <DeleteVideoButton videoId={video._id} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No videos available</p>
      )}
    </>
  );
};
export default VideoItem;
