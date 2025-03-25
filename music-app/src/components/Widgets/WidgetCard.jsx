import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";

const WidgetCard = ({
  title,
  similar = [],
  featured = [],
  newRelease = [],
}) => {
  return (
    <div className="WidgetCard-body">
      <p className="widget-title">{title}</p>
      {similar.length > 0 &&
        similar.map((artist) => (
          <WidgetEntry
            key={artist?.id}
            title={artist?.name}
            subtitle={artist?.followers?.total || "No Followers"}
            image={
              artist?.images?.[2]?.url ||
              artist?.images?.[0]?.url ||
              "default_image.png"
            }
          />
        ))}

      {featured.length > 0 &&
        featured.map((playlist) => (
          <WidgetEntry
            key={playlist?.id}
            title={playlist?.name}
            subtitle={`${playlist?.tracks?.total} Tracks`}
            image={
              playlist?.images?.[2]?.url ||
              playlist?.images?.[0]?.url ||
              "default_image.png"
            }
          />
        ))}

      {newRelease.length > 0 &&
        newRelease.map((album) => (
          <WidgetEntry
            key={album?.id}
            title={album?.name}
            subtitle={album?.artists?.[0]?.name || "Unknown Artist"}
            image={
              album?.images?.[2]?.url ||
              album?.images?.[0]?.url ||
              "default_image.png"
            }
          />
        ))}
    </div>
  );
};

export default WidgetCard;
