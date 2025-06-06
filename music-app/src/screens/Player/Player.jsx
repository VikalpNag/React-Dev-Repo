import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify.js";
import SongCard from "../../components/songCard/SongCard.jsx";
import Queue from "../../components/Queue/Queue.jsx";
import AudioPlayer from "../../components/Audio Player/AudioPlayer.jsx";
import Widgets from "../../components/Widgets/Widgets.jsx";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location?.state) {
      apiClient
        .get("playlists/" + location?.state?.id + "/tracks")
        .then((res) => {
          setTracks(res?.data?.items);
          setCurrentTrack(res?.data?.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks.length > 0 && tracks[currentIndex]) {
      setCurrentTrack(tracks[currentIndex].track);
    }
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        {currentTrack && currentTrack.album && (
          <AudioPlayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        <Widgets artistId={currentTrack?.album} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
