'use client';
import { useMarkVideoAsWatched } from '@/hooks/video';
import { useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const YouTubeVideoPlayer = () => {
  const playerRef = useRef(null);
  const searchParams = useSearchParams();
  const videoId = searchParams.get('videoId') || '';

  const { mutate: markVideoAsWatched } = useMarkVideoAsWatched(videoId);

  const opts: YouTubeProps['opts'] = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleVideoEnd = () => {
    console.log('Video ended!');
    // Call your function here
    // yourFunction();
    markVideoAsWatched();
  };

  // Your function to be triggered when the video ends
  // const yourFunction = () => {
  //   // Perform any action you want here
  //   console.log('video player ended');
  // };
  return (
    <div>
      <YouTube
        videoId={videoId} // Replace VIDEO_ID with your actual YouTube video ID
        onReady={(event: any) => event.target.playVideo()} // Ensure the video starts playing automatically
        onEnd={handleVideoEnd} // Trigger the function when the video ends
        ref={playerRef}
        opts={opts}
      />
    </div>
  );
};

export default YouTubeVideoPlayer;
