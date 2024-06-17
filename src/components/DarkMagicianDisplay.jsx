import React, { useEffect, useState } from "react";

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

  const addCardToAlbum2 = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER}/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: APIKEY },
        body: JSON.stringify({
          id,
        }),
      });

      if (!res.ok) {
        throw new Error("Fetch error");
      }
      fetchDarkMagicianData();
    } catch (err) {
      console.log(err.message);
    }
  };

  const createDivs = () => {
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    // id gives the card different ids to get info later
    return displayDM.map((card, index) => (
      <div key={index} id={card.id}>
        <img src={card.card_images[0].image_url_small} alt={`Card ${index}`} />
        <div>
          <button
            onClick={() => addCardToAlbum2(card.card_images[0].image_url_small)}
          >
            Add Card to Featured Album?
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">{createDivs()}</div>
    </div>
  );
};

export default DarkMagicianDisplay;
