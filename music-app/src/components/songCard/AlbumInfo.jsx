import React from "react";
import "./albumInfo.css";

const AlbumInfo = ({ album }) => {
  console.log(album);
  return (
    <div>
      <div className="albumName-container">
        <p>{album?.name}</p>
      </div>
      <div className="album-info">
        <p>{album?.artists[0]?.name}</p>
      </div>
      <div className="album-release">
        <p>{album?.release_date}</p>
      </div>
    </div>
  );
};

export default AlbumInfo;
