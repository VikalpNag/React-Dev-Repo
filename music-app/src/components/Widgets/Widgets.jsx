import React, { useState, useEffect } from "react";
import "./widgets.css";
import apiClient, { setClientToken } from "../../spotify";
import WidgetCard from "./WidgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    setClientToken(); // Ensure token is set before fetching

    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((res) => setSimilar(res.data?.artists?.slice(0, 3) || []))
        .catch((err) => console.error("Error fetching similar artists:", err));
    }

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => setFeatured(res.data?.playlists?.items?.slice(0, 3) || []))
      .catch((err) => console.error("Error fetching featured playlists:", err));

    apiClient
      .get(`/browse/new-releases`)
      .then((res) => setNewRelease(res.data?.albums?.items?.slice(0, 3) || []))
      .catch((err) => console.error("Error fetching new releases:", err));
  }, [artistID]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar" newRelease={newRelease} />
      <WidgetCard title="Featured" newRelease={newRelease} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}
