'use client';

import YouTube from 'react-youtube';

interface VideoModalProps {
  videoId: string;
}

export function VideoPopupModal({ videoId }: VideoModalProps) {
  return (
    <YouTube
      videoId={videoId}
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1
        }
      }}
      className="size-full"
      iframeClassName="w-full h-full"
    />
  );
}
