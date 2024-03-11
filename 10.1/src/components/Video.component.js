import { useRef } from "react";
import "./style.css";
const Video = ({ videoUrl }) => {
  const videoItemRef = useRef();
  const handlePlay = () => {
    videoItemRef.current.play();
  };

  const handlePause = () => {
    videoItemRef.current.pause();
  };

  const handleStop = () => {
      videoItemRef.current.pause();
      videoItemRef.current.currentTime = 0;
  };

  return (
    <>
      <video ref={videoItemRef} controls width="100%">
        <source src={videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="btn-container">
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
};

export default Video;
