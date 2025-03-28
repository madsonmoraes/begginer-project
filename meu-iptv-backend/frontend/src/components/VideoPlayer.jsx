import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) return <p>Selecione um vídeo para assistir</p>;

  return (
    <div className="flex flex-col items-center">
      <ReactPlayer url={videoUrl} controls width="100%" height="500px" />
    </div>
  );
};

export default VideoPlayer;
