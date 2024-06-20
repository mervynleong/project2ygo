import React, { useEffect, useState } from "react";
import Button from "./Button";

const DarkMagicianDisplay = () => {
  const [displayDM, setDisplayDM] = useState([]);

  const fetchDarkMagicianData = async () => {
    try {
      const url =
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Dark%20Magician";
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Fetch error");
      }

      const data = await res.json();
      // getting whole of kvp here
      // data.data is to access the subset
      setDisplayDM(data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchDarkMagicianData();
  }, []);

  // Adding card to album

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
                itemSet: setName || "There is no card set available",
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
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    // id gives the card different ids to get info later
    return displayDM.map((card, index) => (
      <div className="card-container" key={index}>
        <div
          key={index}
          id={card.id}
          className="card-item"
          style={{ backgroundColor: "#720e9e" }}
        >
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
            "There is currently no card set available"
          )}
          <div>
            <Button
              onClick={() =>
                addCardToAlbum(
                  card.card_images[0].image_url_small,
                  card.card_sets[0].set_name,
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

export default DarkMagicianDisplay;
