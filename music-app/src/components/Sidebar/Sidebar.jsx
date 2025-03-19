import React from "react";
import "./sidebar.css";
import SidebarButtons from "./SidebarButtons";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img
        className="profile-img"
        src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
        alt="profile "
      />
      <div>
        <SidebarButtons title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButtons title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButtons title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButtons
          title="Favorites"
          to="/favorite"
          icon={<MdFavorite />}
        />
        <SidebarButtons title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButtons title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
