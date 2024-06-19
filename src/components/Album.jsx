import React, { useState, useEffect } from "react";
import AlbumCard from "./AlbumCard";

const Album = () => {
  const [displayAlbum, setDisplayAlbum] = useState([]);

  const fetchAlbum = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
        },
        // fetching does not need a body
      });

      if (!res.ok) {
        throw new Error("Fetch error");
      }
      const data = await res.json();
      // setting the state
      setDisplayAlbum(data.records);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAlbum();
    // re-rendering of displayAlbum
  }, [displayAlbum]);

  const handleDelete = async (id) => {
    // to get unique airtable id to delete
    try {
      const res = await fetch(
        import.meta.env.VITE_REACT_APP_API_URL + "?records[]=" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Fetch error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="container">
        {displayAlbum.map((card, index) => {
          return (
            <AlbumCard
              key={index}
              card={card}
              index={index}
              handleDelete={handleDelete}
            ></AlbumCard>
          );
        })}
      </div>
    </>
  );
};

export default Album;
