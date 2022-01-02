export function calculateWinner(board) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.

  //row cases
  if(board[0] === board[1] && board[1] === board[2]) {
    return board[0]
  } else if(board[3] === board[4] && board[4] === board[5]) {
    return board[4]
  } else if(board[6] === board[7] && board[7] === board[8]){
    return board[6]
  }

  //column cases
  if(board[0] === board[3] && board[3] === board[6]) {
    return board[0]
  } else if(board[1] === board[4] && board[4] === board[7]) {
    return board[1]
  } else if(board[2] === board[5] && board[5] === board[8]){
    return board[2]
  }

  //diagonal cases
  if(board[0] === board[4] && board[4] === board[8]) {
    return board[0]
  } if(board[2] === board[4] && board[4] === board[6]) {
    return board[2]
  }

  //no winner
  return null;
}
