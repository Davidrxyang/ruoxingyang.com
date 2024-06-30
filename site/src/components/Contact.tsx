import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <p>Reach Me: </p>
      <p>
        <p>
        Email: davidruoxingyang@gmail.com
        </p>
        <p>
        <a href="https://www.linkedin.com/in/ruoxing-yang-527304228/" target="_blank" rel="noopener noreferrer" className="LinkedInLink">
        Connect with me on LinkedIn
        </a>        
      </p>
      </p>
    </div>
  );
}

export default Contact;
