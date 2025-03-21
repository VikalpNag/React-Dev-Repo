import React from "react";
import "./albumImage.css";

const AlbumImage = (url) => {
  console.log(url?.url);
  return (
    <div>
      <div className="albumImage">
        <img src={url?.url} alt="album art" className="albumImage-art" />
      </div>
      <div className="albumImage-shadow">
        <img src={url?.url} alt="shadow" className="albumImage-shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
