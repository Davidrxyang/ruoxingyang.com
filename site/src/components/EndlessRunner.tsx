import React, { useState, useEffect, useRef, useCallback } from 'react';
import './EndlessRunner.css';

const EndlessRunner: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [playerY, setPlayerY] = useState<number>(50); // Player's Y position (for jumping)
  const [obstacles, setObstacles] = useState<Array<{ id: number, x: number }>>([]);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const gameInterval = useRef<number | undefined>(undefined);
  const jumpInterval = useRef<number | undefined>(undefined);
  const jumpDuration = 20; // Number of frames the jump lasts

  const startGame = useCallback(() => {
    setIsRunning(true);
    setScore(0);
    setPlayerY(50);
    setObstacles([]);
    setIsJumping(false);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.code === 'Space') {
      if (!isRunning) {
        startGame();
      } else if (!isJumping) { // Start jump if not already jumping
        setIsJumping(true);
        let jumpCount = 0;
        jumpInterval.current = window.setInterval(() => {
          setPlayerY((prevY) => (jumpCount < jumpDuration / 2 ? prevY + 10 : prevY - 10));
          jumpCount++;
          if (jumpCount === jumpDuration) {
            clearInterval(jumpInterval.current);
            setIsJumping(false);
          }
        }, 50);
      }
    }
  }, [isRunning, startGame, isJumping]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isRunning) {
      gameInterval.current = window.setInterval(() => {
        setScore(prevScore => prevScore + 1);

        // Generate new obstacles
        if (Math.random() < 0.01) { // Less frequent obstacles
          setObstacles(prevObstacles => [...prevObstacles, { id: Date.now(), x: 600 }]);
        }

        // Move obstacles and check for collisions
        setObstacles(prevObstacles => {
          return prevObstacles.map(obstacle => ({ ...obstacle, x: obstacle.x - 5 }))
            .filter(obstacle => {
              // Check for collision
              if (obstacle.x > 100 && obstacle.x < 150 && playerY < 100) {
                setIsRunning(false);
                clearInterval(gameInterval.current);
              }
              return obstacle.x > -50;
            });
        });
      }, 50);

      return () => {
        clearInterval(gameInterval.current);
      };
    }
  }, [isRunning, playerY]);

  return (
    <div className="game-container">
      <h1>Endless Runner Game</h1>
      <div className="game-area">
        <div className="score">Score: {score}</div>
        <div className="runner" style={{ bottom: `${playerY}px` }}></div>
        {obstacles.map(obstacle => (
          <div key={obstacle.id} className="obstacle" style={{ left: `${obstacle.x}px` }}></div>
        ))}
      </div>
      {!isRunning && <div className="start-message">Press Space to Start</div>}
    </div>
  );
};

export default EndlessRunner;
