import React, { useContext } from "react";
import { assets } from "../../assets/assets.js";
import "./Mainbar.css";
import { Context } from "../../context/context.jsx";

const Mainbar = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Vikalp</span>
          </p>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a Prompt here"
            />
            <div className="icon">
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" />
            </div>
          </div>
          <div className="bottom-info">
            <p>Gemini can make mistakes,so double check it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
