import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import "./library.css";

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
          <div>{playlist.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Library;
