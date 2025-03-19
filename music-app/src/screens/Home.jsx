import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./Library";
import Feed from "./Feed";
import Favorites from "./Favorites";
import Player from "./Player";
import Trending from "./Trending";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </Router>
  );
};

export default Home;
