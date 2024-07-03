import React from 'react';
import Hangman from './Hangman';
import './HangmanPage.css';

const HangmanPage: React.FC = () => {
  return (
    <div className="hangman-page">
      <Hangman />
    </div>
  );
};

export default HangmanPage;
