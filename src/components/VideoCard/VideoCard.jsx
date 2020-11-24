import React from "react";
import ReactPlayer from "react-player/youtube";

import "./VideoCard.scss";

const VideoCard = ({ showCard, otherClass, height, description }) => {
  return (
    <div className={`video_card_container ${otherClass}`}>
      {showCard && (
        <div className="w-100 bg-white">
          <ReactPlayer
            width="100%"
            height={height ? height : 300}
            cl
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
          <p className="w-100 p-2">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
