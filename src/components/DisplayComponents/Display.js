import React from "react";
//import { NumberButton } from "./NumberButton";

const Display = (props) => {
  console.log("Display", props, props.number);
  return <div className="display">
    
    {props.number}</div>;
};

export default Display;

