import React from 'react';
import './Bio.css';

const Bio: React.FC = () => {
  return (
    <div className="Bio">
      <h2>About Me</h2>
      <p>
        I am an incoming Computer Science Ph.D. Student at the University of Virginia. My research focuses on computer networks, network simulation, and computer security. I am also interested in secure machine learning and differential privacy. In May 2026, I graduated from Georgetown University with a B.S. in Computer Science and minors in Mathematics and Economics, Hoya Saxa! 
      </p>

      <h2>Resume</h2>
      <p>
        Find my resume here: 
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ResumeLink">
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
        My teaching experience includes being a teaching assistant for Artificial Intelligence, Data Structures, Algorithms, Computer Science 1, Computer Science 2, Principles of Microeconomics
      </p>

      <h2>Music</h2>
      <p>
        In my free time, I am an avid hobby musician! I play music with various student groups associated with Georgetown University, participating in university programs such as the Jazz Ensemble, Guild of Bands, Pep Band, and co-curricular theatre. Check out <a href="https://open.spotify.com/artist/75PZcBImwZtexzCYVMD1Nl" target="_blank" rel="noopener noreferrer" className="ResumeLink">Hieroglyph</a> and <a href="https://open.spotify.com/artist/7jjxND0ZjxZsOEEX6pWr7A" target="_blank" rel="noopener noreferrer" className="ResumeLink">Araujia</a>
      </p>
      <p>
        I played guitar for the official Georgetown University Jazz Ensemble, as well as trumpet for the Georgetown Pep Band. You might also find me in the pit band for various theatre productions. 
        In 2024, I music-directed the musical "Everybody's Talking About Jamie" at Georgetown University.
      </p>
      <p>
        Theatre credits: Heathers (drums), A Night of Musical Scenes (drums), Sweeney Todd (trumpet), Nomadic Theatre Miscast (various roles), Everybody's Talking About Jamie (music director), Autumn Leaves (drums), Pippin (guitar), No Pressure (drums), Into the Woods (trumpet)
      </p>
    </div>
  );
}

export default Bio;
