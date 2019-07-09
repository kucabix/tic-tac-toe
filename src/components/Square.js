import React from 'react'
import SquareButton from '../elements/SquareButton'

//rendering each of the Board squares
const Square = (props) => (
    <SquareButton win={`${props.winnerClass}`} onClick={props.onClick}>
      {props.value}
    </SquareButton>
)

export default Square
