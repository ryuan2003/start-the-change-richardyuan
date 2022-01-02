import React from "react";
import Square from "./Square";

//The comments are my notes to myself - free free to ignore them

const Board = ({squares, onClick}) => {
  let array = []; //initialize the array of squares
  for(let i = 0; i < 9; i++){ //for loop that runs 9 times
    array.push(<Square value={squares[i]} //.push = .append //creating a square element with a value from squares array, onClick function with i parameter **that is passed in for future execution rather than immediate execution**, and a unique key value
                        onClick={() => onClick(i)} 
                        key={i} />);
  }

  return(
  // TODO: Populate the board with squares
  <div className = "board">
     {array} 
  </div> //created a board div (div = section of html) that displays your created array using board CSS formatting
  );
};


export default Board;