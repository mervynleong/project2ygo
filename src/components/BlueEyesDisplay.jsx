import React, { useState, useEffect } from "react";
import "./BlueEyesDisplay.css";
import Button from "./Button";

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

  const addCardToAlbum = async (imageLink, setName, cardID) => {
    console.log({ imageLink, setName, cardID });
    try {
      const res = await fetch(import.meta.env.VITE_REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({
          // following airtable format
          records: [
            {
              fields: {
                // airtable don't accept numbers. need to convert to string first
                cardID: cardID.toString(),
                imageURL: imageLink,
                itemSet: setName,
              },
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("Fetch error");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const createDivs = () => {
    // to access card sets: card_sets[0].set_name
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    // id gives the card different ids to get info later
    return displayBE.map((card, index) => (
      <div className="card-container" key={index}>
        <div key={index} id={card.id} className="card-item">
          <img
            src={card.card_images[0].image_url_small}
            alt={`Card ${index}`}
          />
          {/* there is an undefined cardset */}

          {card.card_sets ? (
            <label>
              Card Set: {JSON.stringify(card.card_sets[0].set_name)}
            </label>
          ) : (
            <label>There is currently no card set available</label>
          )}
          <div>
            <Button
              onClick={() =>
                addCardToAlbum(
                  card.card_images[0].image_url_small,
                  card.card_sets
                    ? // condition to check the card sets availability, to assign the card set availability
                      card.card_sets[0].set_name
                    : "There is currently no card set available",
                  card.id
                )
              }
            >
              {" "}
              Add Card to Featured Album?
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container">{createDivs()}</div>
    </>
  );
};

export default BlueEyesDisplay;
