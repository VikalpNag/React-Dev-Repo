import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

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
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
