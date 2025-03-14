import React from "react";
import { assets } from "../../assets/assets.js";
import "./Mainbar.css";

const Mainbar = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
    </div>
  );
};

export default Mainbar;
