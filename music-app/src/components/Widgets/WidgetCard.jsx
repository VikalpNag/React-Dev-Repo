import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = ({ title, data = [], type }) => {
  return (
    <div className="WidgetCard-body">
      <p className="widget-title">{title}</p>

      {data.length > 0 &&
        data.map((item) => (
          <WidgetEntry
            key={item?.id}
            title={item?.name}
            subtitle={
              type === "artist"
                ? `${item?.follower?.total?.toLocaleString()} Followers`
                : type === "playlist"
                ? `${item?.tracks?.total} Tracks`
                : item?.artists?.map((artist) => artist.name).join(", ")
            }
            image={
              item?.images?.find((img) => img.url)?.url || // Get the first valid image
              "https://via.placeholder.com/150" // Fallback image
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
