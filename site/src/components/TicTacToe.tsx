import React, { useState } from 'react';
import './TicTacToe.css';

type Player = 'X' | 'O';
type SquareValue = Player | null;

const winningLines: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares: SquareValue[]): Player | null => {
  for (const [a, b, c] of winningLines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
};

const isBoardFull = (squares: SquareValue[]): boolean => {
  return squares.every((square) => square !== null);
};

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && isBoardFull(squares);

  const handleClick = (index: number) => {
    if (winner || squares[index]) {
      return;
    }

    setSquares((prevSquares) => {
      const nextSquares = [...prevSquares];
      nextSquares[index] = isXNext ? 'X' : 'O';
      return nextSquares;
    });
    setIsXNext((prev) => !prev);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const renderSquare = (index: number) => (
    <button
      key={index}
      className="ttt-square"
      onClick={() => handleClick(index)}
    >
      {squares[index]}
    </button>
  );

  return (
    <div className="tictactoe-container">
      <h1 className="tictactoe-title">Tic Tac Toe</h1>
      <p className="tictactoe-subtitle">
        Player X goes first. Click a square to place your mark.
      </p>
      <div className="tictactoe-status">{status}</div>
      <div className="ttt-board">
        <div className="ttt-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="ttt-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="ttt-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="tictactoe-reset" onClick={handleReset}>
        New Game
      </button>
    </div>
  );
};

export default TicTacToe;
