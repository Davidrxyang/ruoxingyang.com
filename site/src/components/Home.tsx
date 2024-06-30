import React from 'react';
import './Home.css';
import profileImage from '../assets/David.jpg'; // Ensure this path is correct

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="Content">
        <div className="Box">
          <img src={profileImage} alt="Profile" className="ProfileImage" />
        </div>
        <div className="Box">
          <p>Hi, I am Ruoxing (David) Yang. Welcome to my personal website</p>
        </div>
      </div>
    </div>
  );
}

export default Home;