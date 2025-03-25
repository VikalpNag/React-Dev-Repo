import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";

const WidgetCard = ({ title, similar, featured, newRelease }) => {
  return (
    <div className="WidgetCard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist?.id}
              title={artist?.name}
              subtitle={artist?.follower?.total}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              key={playlist?.id}
              title={playlist?.name}
              subtitle={playlist?.tracks?.total}
              image={playlist?.images[2]?.url}
            />
          ))
        : newRelease?.map((album) => (
            <WidgetEntry
              key={album?.id}
              title={album?.name}
              subtitle={album?.artist?.[0]?.name}
              image={album?.images[2]?.url}
            />
          ))}
    </div>
  );
};

export default WidgetCard;
