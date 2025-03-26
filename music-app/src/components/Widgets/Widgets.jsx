import React, { useState, useEffect } from "react";
import "./widgets.css";
import apiClient, { setClientToken } from "../../spotify";
import WidgetCard from "./WidgetCard";

export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    setClientToken();

    if (artistID) {
      apiClient
        .get(`/browse/new-releases`)
        .then((res) =>
          setNewRelease(res.data?.albums?.items?.slice(0, 3) || [])
        )
        .catch((err) => console.error("Error fetching new releases:", err));
    }
  }, [artistID]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar" newRelease={newRelease} />
      <WidgetCard title="Featured" newRelease={newRelease} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
}
