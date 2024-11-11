import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch

import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<><HeroSection /><AboutSection /><ProjectsSection /><ContactSection /></>} />
      </Routes>
    </Router>
  );
};

export default App;
