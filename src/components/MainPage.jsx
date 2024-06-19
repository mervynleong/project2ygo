import React from "react";
import img from "../../YugiohBackground.jpg";

const MainPage = () => {
  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Welcome to My Blue-Eyes & Dark-Magician Album Collection
      </h1>
      <h2 style={{ color: "indigo", textAlign: "center" }}>
        {" "}
        Please click any of the following links above to navigate
      </h2>
      <img style={{ height: "499px", width: "1535px" }} src={img}></img>
    </>
  );
};

export default MainPage;
