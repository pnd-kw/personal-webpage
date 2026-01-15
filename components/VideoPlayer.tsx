"use client";

import { useState } from "react";

const VideoPlayer = ({
  src,
  poster,
  autoPlay = true,
}: {
  src: string;
  poster?: string;
  autoPlay?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black shadow-lg rounded-lg overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex w-full h-full items-center justify-center bg-black">
          <div className="h-12 w-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />
        </div>
      )}
      <video
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        muted
        autoPlay={autoPlay}
        loop
        controls
        preload="metadata"
        poster={poster}
        onLoadedMetadata={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
