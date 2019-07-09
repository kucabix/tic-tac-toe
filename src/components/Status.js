import React from 'react'
import GameInfo from '../elements/GameInfo'

//checking if there's winner and giving info about next player or game result
const Status = (props) => {
  let status;
  let gameResult = '';
  if (props.winnerLine) {
    status = 'Winner: ' + props.winner;
    gameResult = true;
  } else if (props.history.length >= 10) {
    status = 'Draw! Play again.'
    gameResult = true;
  }
  else {
    status = 'Next player: ' + (props.next ? 'X' : 'O');
  }
  return(
    <GameInfo result={`${gameResult}`}>
      {status}
    </GameInfo>
  )
}

export default Status
