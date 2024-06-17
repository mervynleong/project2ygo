import React, { useState, useEffect } from "react";
import "./BlueEyesDisplay.css";

const BlueEyesDisplay = () => {
  const [displayBE, setDisplayBE] = useState([]);

  const fetchBlueEyesData = async () => {
    try {
      const url =
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes";
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Fetch error");
      }

      const data = await res.json();
      // getting whole of kvp here
      setDisplayBE(data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchBlueEyesData();
  }, []);

  // Adding card data

  const addCardToAlbum = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: APIKEY },
        body: JSON.stringify({
          image_url: imageUrl,
        }),
      });

      if (!res.ok) {
        throw new Error("Fetch error");
      }
      fetchBlueEyesData();
    } catch (err) {
      console.log(err.message);
    }
  };

  const createDivs = () => {
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    // id gives the card different ids to get info later
    return displayBE.map((card, index) => (
      <div className="card-container">
        <div key={index} id={card.id} className="card-item">
          <img
            src={card.card_images[0].image_url_small}
            alt={`Card ${index}`}
          />
          <div>
            <button
              onClick={() =>
                addCardToAlbum(card.card_images[0].image_url_small)
              }
            >
              Add Card to Featured Album?
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return <div className="container">{createDivs()}</div>;
};

export default BlueEyesDisplay;
