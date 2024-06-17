import React from "react";
import Item from "./Item";

const Display = (props) => {
  return (
    <div>
      {<img src={props.dog}></img>}
      Hello World <Item></Item>
    </div>
  );
};

export default Display;
