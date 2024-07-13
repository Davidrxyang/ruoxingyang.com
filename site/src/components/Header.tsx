import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="Header">
      <h1>Ruoxing (David) Yang</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to ="/tools">Tools</Link></li>
          <li><Link to="/games">Games</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
