import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <p>Find my projects on my github page: </p>
      <a href="https://github.com/davidrxyang" target="_blank" rel="noopener noreferrer" className="GithubLink">
        Check out my GitHub
      </a>
    </div>
  );
}

export default Projects;
