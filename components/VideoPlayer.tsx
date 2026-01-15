const VideoPlayer = ({
  src,
  poster,
  autoPlay = true,
}: {
  src: string;
  poster?: string;
  autoPlay?: boolean;
}) => {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
      <video
        className="w-full h-auto"
        muted
        autoPlay={autoPlay}
        loop
        controls
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
