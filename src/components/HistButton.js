import React from 'react'
import Button from '../elements/Button'

//toggle button to show/hide history of moves
const HistButton = (props) => (
  <Button onClick={()=>props.onClick()}>
    {props.isVisible ? 'Hide history':'Show history'}
  </Button>
)

export default HistButton
