import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

const Controls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total,
}) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className="play-pause-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <IoPlay />
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
