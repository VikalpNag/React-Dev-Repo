import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import {
  IoPause,
  IoPlay,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from "react-icons/io5";

const Controls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total,
}) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
