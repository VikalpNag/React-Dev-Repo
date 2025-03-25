import React, { useEffect, useState } from "react";
import "./widgets.css";
import apiClient from "../../spotify.js";
import WidgetCard from "./WidgetCard.jsx";

const Widgets = ({ artistId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistId?.artists[0]?.id;

  useEffect(() => {
    apiClient
      .get(`/artists/${id}/related-artists`)
      .then((res) => {
        const a = res.data?.artists.slice(0, 3);
        setSimilar(a);
      })
      .catch((err) => {
        console.log(err);
      });

    apiClient
      .get(`/browse/featured-playlists`)
      .then((res) => {
        const a = res.data?.playlists.items.slice(0, 3);
        setFeatured(a);
      })
      .catch((err) => {
        console.log(err);
      });

    apiClient
      .get(`/browse/new-release`)
      .then((res) => {
        const a = res.data?.albums.items.slice(0, 3);
        setNewRelease(a);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made for you" similar={featured} />
      <WidgetCard title="New Release" similar={newRelease} />
    </div>
  );
};

export default Widgets;
