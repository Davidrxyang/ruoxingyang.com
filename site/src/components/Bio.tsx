import React from 'react';
import './Bio.css';

const Bio: React.FC = () => {
  return (
    <div className="Bio">
      <h2>About Me</h2>
      <p>
        I am a student and researcher at Georgetown University studying Computer Science with minors in Mathematics and Economics. I am passionate about network security, differential privacy, and secure machine learning. Apart from my research projects, I spend my free time playing and performing music. 
      </p>

      <h2>Resume</h2>
      <p>
        Find my resume here: 
        <a href="https://drive.google.com/file/d/15RSLemHbxJmbeQeUBFjFvJ2niNNIefHY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ResumeLink">
        (link)
        </a>
      </p>

      <h2>Research</h2>
      <p>
        My main research covers network security, especially involving decentralized message-passing routing algorithms through HumaNets. I am interested in investigating ways to add security to distributed systems. I am also interested in quantifying privacy through the differential privacy framework. I have experience studying secure machine learning through differentially-private fine-tuning.
      </p>
      <p>
        I am a member of the Georgetown SecLab working under Professor Micah Sherr. I am the lead software developer for the Cadence project, a simulator for decentralized message passing algorithms. I am currently designing a secure push-notifications system leveraging a distributed file system network.
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
        I am a Teaching Assistant for the Computer Science and Economics departments at Georgetown University. I am currently teaching Data Structures, Algorithms, and Artificial Intelligence. My past teaching experience includes Computer Science 1 and Computer Science 2.
      </p>

      <h2>Music</h2>
      <p>
        I am the drummer for the shoegaze band Araujia. Check us out on spotify!     
      <a href="https://open.spotify.com/artist/7jjxND0ZjxZsOEEX6pWr7A" target="_blank" rel="noopener noreferrer" className="SpotifyLink">
        (spotify)
      </a>
      </p>
      <p>
      	I am the singer, guitarist, and lead songwriter for "Hieroglyph". We will be releasing music soon!
      </p>
      <p>
        I also play guitar for the official Georgetown University Jazz Ensemble, as well as trumpet for the Georgetown Pep Band. You might also find me in the pit band for various theatre productions. 
        In 2024, I music-directed the musical "Everybody's Talking About Jamie" at Georgetown University.
      </p>
    </div>
  );
}

export default Bio;
