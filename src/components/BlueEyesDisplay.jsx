import React, { useState, useEffect } from "react";

const BlueEyesDisplay = () => {
  const [displayBE, setDisplayBE] = useState([]);

  useEffect(() => {
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

    fetchBlueEyesData();
  }, []);

  const createDivs = () => {
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    return displayBE.map((card, index) => (
      <div key={index}>
        <img src={card.card_images[0].image_url_small} alt={`Card ${index}`} />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">{createDivs()}</div>
    </div>
  );
};

export default BlueEyesDisplay;
