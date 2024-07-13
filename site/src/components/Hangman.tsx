import React, { useState, useEffect } from 'react';
import './Hangman.css';

const words = [
  'react', 'typescript', 'hangman', 'component', 'state', 'props', 'hooks',
  'context', 'reducer', 'effect', 'memo', 'callback', 'javascript', 'array',
  'object', 'function', 'variable', 'closure', 'promise', 'async', 'wedding',
  'beer', 'wine', 'whiskey', 'vodka', 'rum', 'tequila', 'gin', 'brandy', 'cognac',
];

const getRandomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
};

const Hangman: React.FC = () => {
  const [word, setWord] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);

  const maxWrongGuesses = 10;

  const handleLetterInput = (letter: string) => {
    if (guessedLetters.has(letter) || wrongGuesses.length >= maxWrongGuesses) return;

    setGuessedLetters(prev => new Set(prev).add(letter));

    if (!word.includes(letter)) {
      setWrongGuesses(prev => [...prev, letter]);
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      guessedLetters.has(letter) ? letter : '_'
    )).join(' ');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length === 1 && /^[a-z]$/i.test(input)) {
      handleLetterInput(input.toLowerCase());
      event.target.value = '';
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters(new Set());
    setWrongGuesses([]);
  };

  const isGameOver = wrongGuesses.length >= maxWrongGuesses;
  const isGameWon = word.split('').every(letter => guessedLetters.has(letter));

  return (
    <div className="hangman-container">
      <h1>Hangman Game</h1>
      <div className="game-box">
        <div className="stick-figure-container">
          <div className="gallows">
            <div className={`base ${wrongGuesses.length > 0 ? 'visible' : ''}`}></div>
            <div className={`pole ${wrongGuesses.length > 1 ? 'visible' : ''}`}></div>
            <div className={`beam ${wrongGuesses.length > 2 ? 'visible' : ''}`}></div>
            <div className={`rope ${wrongGuesses.length > 3 ? 'visible' : ''}`}></div>
          </div>
          <div className="stick-figure">
            <div className={`head ${wrongGuesses.length > 4 ? 'visible' : ''}`}></div>
            <div className={`body ${wrongGuesses.length > 5 ? 'visible' : ''}`}></div>
            <div className={`left-arm ${wrongGuesses.length > 6 ? 'visible' : ''}`}></div>
            <div className={`right-arm ${wrongGuesses.length > 7 ? 'visible' : ''}`}></div>
            <div className={`left-leg ${wrongGuesses.length > 8 ? 'visible' : ''}`}></div>
            <div className={`right-leg ${wrongGuesses.length > 9 ? 'visible' : ''}`}></div>
          </div>
        </div>
      </div>
      <p className="word-display">{renderWord()}</p>
      <p>Wrong Guesses: {wrongGuesses.join(', ')}</p>
      <input
        type="text"
        maxLength={1}
        onChange={handleInputChange}
        disabled={isGameOver || isGameWon}
      />
      {isGameOver && <p className="game-over">Game Over! The word was "{word}".</p>}
      {isGameWon && <p className="game-won">Congratulations! You guessed the word.</p>}
      <div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default Hangman;
