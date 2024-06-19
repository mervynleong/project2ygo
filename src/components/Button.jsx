import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: "black", color: "whitesmoke" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
