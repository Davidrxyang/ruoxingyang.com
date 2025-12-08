import React from 'react';
import TicTacToe from './TicTacToe';
import './TicTacToePage.css';

const TicTacToePage: React.FC = () => {
  return (
    <div className="tictactoe-page">
      <TicTacToe />
    </div>
  );
};

export default TicTacToePage;
