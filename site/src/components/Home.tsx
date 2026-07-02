import React from 'react';
import './Home.css';
import profileImage from '../assets/me.jpeg';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="Content">
        <div className="Box">
          <img src={profileImage} alt="Profile" className="ProfileImage" />
        </div>
        <div className="Box">
          <p>
            Hi, I am Ruoxing (David) Yang. Welcome to my personal website! 
          <div>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ResumeLink" style={{ color: 'white' }}>
                  Click here for my resume
              </a>
          </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
