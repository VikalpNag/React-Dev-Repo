import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import "./library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div className="playlist-card">
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name.substring(0, 18)}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
