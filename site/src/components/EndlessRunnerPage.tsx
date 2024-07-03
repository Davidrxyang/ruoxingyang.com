import React from 'react';
import EndlessRunner from './EndlessRunner';
import './EndlessRunnerPage.css';

const EndlessRunnerPage: React.FC = () => {
  return (
    <div className="EndlessRunnerPage">
      <h1>Endless Runner</h1>
      <EndlessRunner />
    </div>
  );
}

export default EndlessRunnerPage;
