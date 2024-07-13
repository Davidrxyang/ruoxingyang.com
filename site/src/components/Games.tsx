import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const Games: React.FC = () => {
  return (
    <div className="Games">
      <h1>Games</h1>
      <ul className="game-list">
        <li className="game-item">
          <Link to="/games/hangman" className="game-link">Hangman</Link>
        </li>
        {/* Add more games links here */}
      </ul>
    </div>
  );
}

export default Games;
