import React from 'react'

import Board from './components/Board'
import Moves from './components/Moves'
import Status from './components/Status'
import HistButton from './components/HistButton'
import PlayButton from './components/PlayButton'

import GameContainer from './elements/GameContainer'
import GameInfo from './elements/GameInfo'

// calculateWinner is checking if any of the same three squares are in vertcal, horizontal or diagonal line, if yes returns winning symbol and winning line, else return null
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], winnerLine: lines[i]}
    }
  }
  return {winner: null, winnerLine: null}
}

// function which allows to get rows and cols from i index
const getLocation = (index) => {
  const locationMap = {
    0: 'row: 1, col: 1',
    1: 'row: 1, col: 2',
    2: 'row: 1, col: 3',
    3: 'row: 2, col: 1',
    4: 'row: 2, col: 2',
    5: 'row: 2, col: 3',
    6: 'row: 3, col: 1',
    7: 'row: 3, col: 2',
    8: 'row: 3, col: 3',
  }
  return locationMap[index]
}

//object Game is executing all game functionalities
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      currentStepNumber: 0,
      xIsNext: true,
      isVisible: false,
    }
  }
  //following immutabilitiy idea, each of 'history' being handled inside this function is a copy of original history, made with "slice"
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.currentStepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares).winner || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: getLocation(i),
          stepNumber: history.length,
        },
      ]),
      currentStepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  //onClick function executed with PlayButton, possible to use in any game moment
  playAgain() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      currentStepNumber: 0,
      xIsNext: true,
      isVisible: false,
    })
  }

  //onClick function executed with nav buttons
  jumpTo(step) {
    this.setState({
      currentStepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  //onClick function executed with show button
  toggleMoves() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const {currentStepNumber, isVisible, xIsNext, history} = this.state
    const current = history[currentStepNumber]
    const {winner, winnerLine} = calculateWinner(current.squares)
    const hidden = isVisible ? false : true
    //rendering game components
    return (
      <GameContainer>
        <Status
          winnerLine={winnerLine}
          winner={winner}
          history={history}
          next={xIsNext}
        />
        <Board
          winnerSquares={winnerLine}
          squares={current.squares}
          onClick={i => this.handleClick(i)}
        />
        <GameInfo>
          <HistButton
            onClick={() => this.toggleMoves()}
            isVisible={isVisible}
          />
          <Moves
            hidden={hidden}
            currentStep={currentStepNumber}
            history={history}
            onClick={(move) => this.jumpTo(move)}
          />
          <PlayButton
            onClick={() => {this.playAgain()}}
          />
        </GameInfo>
      </GameContainer>
    )
  }
}

export default Game
