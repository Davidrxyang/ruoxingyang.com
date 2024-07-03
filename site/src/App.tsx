import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Games from './components/Games';
import HangmanPage from './components/HangmanPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/hangman" element={<HangmanPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
