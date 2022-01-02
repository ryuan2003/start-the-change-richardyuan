import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.

  /* Dummy functions
  function onClick(){
    alert('hello');
  }

  let square = 'x'
  */

  //State variables - should work
  const [board, setBoard] = useState([null,null,null,null,null,null,null,null,null]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);


  //Helper functions
  let calculateLetter = (xIsNext) => {
    // Determines current player's letter
    if (xIsNext){
      return '🎃'
    } else {
      return '🦇'
    }
  }

  let handleClick = (index) => { //returns true if click can be made, false otherwise
    if (calculateWinner(board) === null && board[index] === null){ //no winner and empty square
      let newBoard = [...board]
      newBoard[index] = turnLetter
      setBoard(newBoard)
      if (xIsNext){ //xIsNext only updates upon a successful board change
        setXisNext(false) 
      } else {
        setXisNext(true)
      }
      setStepNumber(stepNumber + 1)
    }
  };

  let jumpToStart = () => { //I think this is working
    setBoard([null,null,null,null,null,null,null,null,null])
    setStepNumber(0)
    setXisNext(true)
    currentWinner = calculateWinner(board)
    turnLetter = calculateLetter(xIsNext)
  };

  let result = (currentWinner) => { //I think this is working too
    if (currentWinner === '🎃'){
      return '🎃 WINS!'
    } else if (currentWinner === '🦇'){
      return '🦇 WINS!'
    } else if (currentWinner === null){
      if (stepNumber === 9){
        return 'Tie Game 👿'
      } else {
        return ('Next Player: ' + turnLetter)
      }
    }
  };


  //Regular variables
  let currentWinner = calculateWinner(board)
  let turnLetter = calculateLetter(xIsNext)


  //TODO: Render the board here along with the title, game status,
      //and 'Go to Start' button.

  return (
  <>
    <h1 className = 'title'><em>Spooky &nbsp;</em>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick}/>
      <div className='info-wrapper'>
          <div>
            <button className='button' onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3>{result(currentWinner)}</h3>
      </div>
  </>

   // <Square value={square} onClick={() => onClick()} />
   // <Board squares={[1,2,3,4,5,6,7,8,9]} onClick={onClick}/>
  
  );
};

export default Game;
