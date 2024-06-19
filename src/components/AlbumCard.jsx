import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

const AlbumCard = (props) => {
  // assignment of props
  const { card, index, handleDelete } = props;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openModal = () => {
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      {/* // To access actual fields sent into airtable:
  // displayAlbum.records[0].fields
  // displayAlbum.records[0].fields.itemSet for item set (case Sensitive)
  // displayAlbum.records[0].fields.imageURL for image url (case sensitive)
  // displayAlbum.records[0].fields.cardID for card id (case sensitive) */}
      <div
        id={card.id}
        className="card-container"
        style={{ backgroundColor: "turqoise" }}
        key={index}
      >
        {/* converting string back to numeric */}
        <div
          key={index}
          id={parseInt(card.fields.cardID)}
          className="card-item"
          style={{ backgroundColor: "green" }}
        >
          <img src={card.fields.imageURL} alt={`Card ${index}`} />
          <label>Card Set: {card.fields.itemSet}</label>
          <div>
            <button
              onClick={() => {
                openModal();
              }}
            >
              Remove Card from Album?
            </button>
            {showDeleteModal && (
              <DeleteModal
                showDeleteModal={showDeleteModal}
                closeModal={closeModal}
                handleDelete={handleDelete}
                id={card.id}
              ></DeleteModal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
