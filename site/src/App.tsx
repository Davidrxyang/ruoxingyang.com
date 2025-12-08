import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Publications from './components/Publications';

import Games from './components/Games';
import HangmanPage from './components/HangmanPage';
import TicTacToePage from './components/TicTacToePage';

import Tools from './components/Tools';
import WeatherPage from './components/WeatherPage';
import CalculatorPage from './components/CalculatorPage';
import KeyConverterPage from './components/KeyConverterPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main sections */}
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />

          {/* Games */}
          <Route path="/games" element={<Games />} />
          <Route path="/games/hangman" element={<HangmanPage />} />
          <Route path="/games/tictactoe" element={<TicTacToePage />} />

          {/* Tools */}
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/weather" element={<WeatherPage />} />
          <Route path="/tools/calculator" element={<CalculatorPage />} />
          <Route path="/tools/key-converter" element={<KeyConverterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
