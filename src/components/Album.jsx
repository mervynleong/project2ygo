import React, { useState, useEffect } from "react";
import DeleteModal from "./DeleteModal";

const Album = () => {
  const [displayAlbum, setDisplayAlbum] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  // To access actual fields sent into airtable:
  // displayAlbum.records[0].fields
  // displayAlbum.records[0].fields.itemSet for item set (case Sensitive)
  // displayAlbum.records[0].fields.imageURL for image url (case sensitive)
  // displayAlbum.records[0].fields.cardID for card id (case sensitive)

  const createDivs = () => {
    return displayAlbum.map((card, index) => (
      <div
        className="card-container"
        style={{ backgroundColor: "turqoise" }}
        key={index}
      >
        {/* converting string back to numeric */}
        <div
          key={index}
          id={card.id}
          className="card-item"
          style={{ backgroundColor: "green" }}
        >
          <img src={card.fields.imageURL} alt={`Card ${index}`} />
          <label>Card Set: {card.fields.itemSet}</label>
          <div>
            <button
              onClick={(id) => {
                openModal(id);
              }}
            >
              Remove Card from Album?
            </button>
            <DeleteModal
              showDeleteModal={showDeleteModal}
              closeModal={closeModal}
              handleDelete={handleDelete}
              id={card.id}
            ></DeleteModal>
          </div>
        </div>
      </div>
    ));
  };

  const openModal = () => {
    setShowDeleteModal(true);
  };
  const closeModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="container">{createDivs()}</div>
    </>
  );
};

export default Album;
