import React from 'react';
import { Link } from 'react-router-dom';
import './Games.css';

const Games: React.FC = () => {
  return (
    <div className="Games">
      <h1>Games</h1>
      <ul>
        <li><Link to="/games/hangman">Hangman</Link></li>
        {/* Add more game links here */}
      </ul>
    </div>
  );
}

export default Games;
