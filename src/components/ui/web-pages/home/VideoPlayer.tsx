"use client"
import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative border-2 border-white/50 p-1.5 bg-gradient-to-b from-[#494949] to-[#464545]  backdrop-blur-md  rounded-2xl shadow-lg">
      <div className="relative rounded-2xl overflow-hidden bg-black aspect-video ">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dd0giqouc/video/upload/v1756794983/Home_Page_Video_cd66tv.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Play/Pause button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-gray-800" />
            ) : (
              <Play className="w-8 h-8 text-gray-800 ml-1" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
