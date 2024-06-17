import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import { Form } from "react-router-dom";

function App() {
  const [display, setDisplay] = useState([]);
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=";
  const url2 =
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Dark%20Magician";

  const cardImageFetch = async () => {
    try {
      const res = await fetch(url + "Blue-Eyes");

      if (!res.ok) {
        throw new Error("Fetch error");
      }

      const data = await res.json();
      setDisplay(data.data[0].card_images[0].image_url_small);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    cardImageFetch();
  }, []);

  return <Display dog={display}></Display>;
}

export default App;
