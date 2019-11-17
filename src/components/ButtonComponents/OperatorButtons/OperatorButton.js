import React from "react";

export const OperatorButton = (props) => {
  
  
  
  console.log(props);

  return (
    <>
    <button className = 'operatorButtons'>
    {props.operator.char}
    </button>
   
    </>
  );
};
