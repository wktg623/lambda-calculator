import React, { useState } from "react";
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);
  console.log(props)
  // STEP 2 - add the imported data to state
  return (
    <div>
    {
    numberState.map(number =>{
       return  <NumberButton key = {number} number = {number}/>;
      })}
    </div>
    )
};

export default Numbers; 

