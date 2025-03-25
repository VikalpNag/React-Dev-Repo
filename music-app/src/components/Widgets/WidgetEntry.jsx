import React from "react";
import "./widgetEntry.css";

const WidgetEntry = ({ title, subtitle, image }) => {
  return (
    <div className="entry-body flex">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle"></p>
      </div>
    </div>
  );
};

export default WidgetEntry;
