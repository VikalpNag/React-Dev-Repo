import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library";
import Feed from "../Feeds/Feed";
import Favorites from "../Favorites/Favorites";
import Player from "../Player/Player";
import Trending from "../Trending/Trending";
import "./home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Login from "../auth/Login";

const Home = () => {
  return (
    <Router>
      <div className="main-body">
        {/* <Login /> */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
