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
          <p>
            Hi, I am Ruoxing (David) Yang. Welcome to my personal website.
          <div>
            This project was created using React.js and Typescript with some
            help from ChatGPT. It is deployed on AWS. 
          </div>
          <div>
              <a href="https://drive.google.com/file/d/15RSLemHbxJmbeQeUBFjFvJ2niNNIefHY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ResumeLink" style={{ color: 'white' }}>
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
