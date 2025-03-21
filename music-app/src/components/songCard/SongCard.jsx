import React from "react";
import "./songCard.css";

const SongCard = () => {
  return (
    <div className="songCard-body">
      <AlbumImage />
      <AlbumInfo />
    </div>
  );
};

export default SongCard;
