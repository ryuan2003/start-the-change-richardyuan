import React from "react";

const Square = ({value, onClick, key}) => {
  // TODO: Create a clickable square that can contain an X or O
  return (
    <button className = 'squares'
            onClick = {onClick}
            identifier = {key}>
      {value}
    </button>
  );
};

export default Square;
