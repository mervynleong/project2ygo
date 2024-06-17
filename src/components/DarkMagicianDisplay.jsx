import React, { useEffect, useState } from "react";

const DarkMagicianDisplay = () => {
  const [displayDM, setDisplayDM] = useState([]);

  useEffect(() => {
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
        setDisplayDM(data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchDarkMagicianData();
  }, []);

  const createDivs = () => {
    // mapping through with index to iterate every single card
    // alt gives the card different indexes to iterate through
    return displayDM.map((card, index) => (
      <div key={index}>
        <img src={card.card_images[0].image_url_small} alt={`Card ${index}`} />
      </div>
    ));
  };

  <div className="container">
    <div className="row">{createDivs()}</div>
  </div>;
};

export default DarkMagicianDisplay;
