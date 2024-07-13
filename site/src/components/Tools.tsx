import React from 'react';
import { Link } from 'react-router-dom';
import './Tools.css';

const Tools: React.FC = () => {
  return (
    <div className="Tools">
      <h1>Tools</h1>
      <ul className="tool-list">
        <li className="tool-item">
          <Link to="/tools/weather" className="tool-link">Weather</Link>
        </li>
        <li className="tool-item">
          <Link to="/tools/calculator" className="tool-link">Calculator</Link>
        </li>
        {/* Add more tools links here */}
      </ul>
    </div>
  );
}

export default Tools;
