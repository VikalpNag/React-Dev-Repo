import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";

const WidgetCard = ({ title, newRelease = [] }) => {
  return (
    <div className="WidgetCard-body">
      <p className="widget-title">{title}</p>

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
