import React from 'react'
import Button from '../elements/Button'

//reseting game history
const PlayButton = (props) => (
  <Button active={true} onClick={() => props.onClick()}>
    Play again!
  </Button>
)

export default PlayButton
