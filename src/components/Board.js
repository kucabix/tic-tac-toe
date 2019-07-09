import React from 'react'
import Square from './Square'

import BoardRow from '../elements/BoardRow'

// Board is a component build with Squares
class Board extends React.Component {
  //createBoard is looping through given rows and cols values and creates square playing board, whith each j-iteration it renders squares in columns, with each i-iteration it creates another board-row
  createBoard(rows,cols) {
    const board = [];
    let squareNum = 0;
    for (let i = 0; i < rows; i++) {
      const columns = [];
      for (let j = 0; j < cols; j++) {
        columns.push(this.renderSquare(squareNum++));
      }
      board.push(<BoardRow key={i}>{columns}</BoardRow>);
    }
    return board;
  }
  //renderSquare is changing class to square-win for winning squares and generates Square obcjets
  renderSquare(i) {
    const winnerClass = this.props.winnerSquares && (
      this.props.winnerSquares[0] === i ||
      this.props.winnerSquares[1] === i ||
      this.props.winnerSquares[2] === i) ? 'win': '';
    return (
      <Square
        winnerClass={winnerClass}
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  //rendering the board for play
  render() {
    return (
      <div>
        {this.createBoard(3,3)}
      </div>
    );
  }
}

export default Board
