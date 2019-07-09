import React from 'react'
import Button from '../elements/Button'
import List from '../elements/List'

//using map() to create nav button based on history changes
const Moves = (props) => {
  const moves = props.history.map((step, move) => {
    const location = step.location ? `${step.location}` : '';
    const desc = step.stepNumber ?
      `Go to move #${step.stepNumber}`:
      'Go to game start';
    const classButton = (move === props.currentStep);
    return (
      <li key={move}>
        <Button
          active={classButton}
          onClick={() => props.onClick(move)}
        >
          {`${desc} ${location}`}
        </Button>
      </li>
    )
  })
  return(
    <List hidden={props.hidden}>
      {moves}
    </List>
  )
}

export default Moves
