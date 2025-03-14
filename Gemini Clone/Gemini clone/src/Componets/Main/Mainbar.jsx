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
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello Vikalp</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest some places?</p>
            <img src={assets.compass_icon} alt="question" />
          </div>
          <div className="card">
            <p>Summarize about poverty</p>
            <img src={assets.bulb_icon} alt="question" />
          </div>
          <div className="card">
            <p>What is the capital of India?</p>
            <img src={assets.message_icon} alt="question" />
          </div>
          <div className="card">
            <p>What is React.js</p>
            <img src={assets.code_icon} alt="question" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
