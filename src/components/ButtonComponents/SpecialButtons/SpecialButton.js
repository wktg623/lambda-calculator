import React from "react";
import { tsPropertySignature } from "@babel/types";

export const SpecialButton = (props) => {
  return (
    <>
     <button>
       {props.special}
       </button> 
    </>
  );
};
