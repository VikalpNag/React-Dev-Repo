import React, { useEffect, useRef, useState } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./ProgressCircle";
import Controls from "./Controls.jsx";
import WaveAnimation from "./WaveAnimation.jsx";

const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);

  let audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current || {};
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // useEffect(() => {
  //   if (!audioSrc) {
  //     console.warn(
  //       "Preview URL not available. Using Spotify link as fallback."
  //     );
  //     window.open(total[currentIndex]?.track.external_urls?.spotify, "_blank");
  //     return;
  //   }

  //   audioRef.current = new Audio(audioSrc);
  //   setTrackProgress(0);

  //   if (isReady.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //     startTimer();
  //   } else {
  //     isReady.current = true;
  //   }
  // }, [audioSrc, currentIndex]);

  useEffect(() => {
    if (isPlaying && audioSrc) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current?.currentTime || 0);
      }
    }, 1000);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < total.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : total.length - 1
    );
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists = currentTrack?.album?.artists
    .map((artist) => artist.name)
    .join(" | ");

  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={isPlaying}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist">{artists}</p>
        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
