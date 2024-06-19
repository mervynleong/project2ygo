import React from "react";
import img from "../../YGOGif.gif";
import mp3File from "../../Obliterate.mp3";

const NotFound = () => {
  // Function to play the audio
  const playAudio = () => {
    const audio = new Audio(mp3File);
    audio.play();
  };

  return (
    <div style={{ display: "grid", alignItems: "center" }}>
      <h1 style={{ color: "red", textAlign: "center" }}>
        There is no need for pathetic cards like those!
      </h1>
      <img
        style={{
          width: "600px",
          height: "400px",
          display: "block",
          margin: "auto",
        }}
        src={img}
      ></img>
      <button style={{ margin: "auto" }} onClick={playAudio}>
        OBLITERATE
      </button>
    </div>
  );
};

export default NotFound;
