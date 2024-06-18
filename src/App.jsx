import React, { useState, useEffect } from "react";
import Display from "./components/BlueEyesDisplay";
import { Form } from "react-router-dom";
import BlueEyesDisplay from "./components/BlueEyesDisplay";
import DarkMagicianDisplay from "./components/DarkMagicianDisplay";
import Album from "./components/Album";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const [display, setDisplay] = useState([]);
  // const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=";

  // const cardImageFetch = async () => {
  //   try {
  //     const res = await fetch(url + "Blue-Eyes");

  //     if (!res.ok) {
  //       throw new Error("Fetch error");
  //     }

  //     const data = await res.json();
  //     setDisplay(data.data[0].card_images[0].image_url_small);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // useEffect(() => {
  //   cardImageFetch();
  // }, []);

  return (
    <>
      {/* <DarkMagicianDisplay></DarkMagicianDisplay> */}
      <BlueEyesDisplay putToAlbum = {setDisplay}></BlueEyesDisplay>
      <Album>{display}</Album>

      {/* <Routes>
        <Suspense fallback={<p>Loading...</p>}>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="main" element={<BlueEyesDisplay />} />
          <Route path="*" element={<NotFound />} />
        </Suspense>
      </Routes> */}
    </>
  );
}

export default App;
