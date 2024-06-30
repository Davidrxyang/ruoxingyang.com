import React from 'react';
import './Bio.css';

const Bio: React.FC = () => {
  return (
    <div className="Bio">
      <h2>About Me</h2>
      <p>
        I am currently a student at Georgetown University studying Computer Science and Economics with a minor in Mathematics. I am passionate about computer science research and software engineering. Apart from my projects, I spend my free time playing and performing music. 
      </p>

      <h2>Research</h2>
      <p>
        My research covers algorithmic improvements to public transportation systems and algorithmic analysis of network security models such as decentralized message passing algorithms. 
      </p>
      <p>
        I am currently working on a collaborative research project as a Lisa J. Raines Research Fellow at Georgetown. 
      </p>
      <p>
        I am also a member of the Georgetown SecLab, working under Professor Micah Sherr on the Cadence project, a simulator for decentralized message passing algorithms.
      </p>

      <h2>Projects</h2>
      <p>
        Apart from my research, I also enjoy engineering personal projects to explore my passion in software engineering. Some of my favorites include:
        <p>
        - RY-Game-Engine, a 2d Game Engine/Graphics Framework written in C++ and utilizing the SDL2 library. 
        </p>
      <p>
      - Boids Simulation, a simulation of flocking behavior in birds written in Java 
      </p>
      Find all of my projects on my github page, linked under "Projects"
      </p>

      <h2>Teaching</h2>
      <p>
        I am a Teaching Assistant for the Computer Science and Economics departments at Georgetown University. I am currently teaching Data Structures and Principles of Microeconomics. My past teaching experience includes Computer Science 1 and Computer Science 2.
      </p>

      <h2>Music</h2>
      <p>
        I am the drummer for the shoegaze band Araujia. Check us out on spotify!     
      <a href="https://open.spotify.com/artist/7jjxND0ZjxZsOEEX6pWr7A" target="_blank" rel="noopener noreferrer" className="SpotifyLink">
        (spotify)
      </a>
      </p>
      <p>
        I also play guitar for the official Georgetown University Jazz Ensemble, as well as trumpet for the Georgetown Pep Band. You might also find me in the pit band for various theatre productions.
      </p>
    </div>
  );
}

export default Bio;
