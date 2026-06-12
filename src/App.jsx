import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // Simple state to toggle dark/light mode
  const [theme, setTheme] = useState('dark');

  // Apply the theme class to the html tag
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-wrapper">
      {/* Navbar gets the theme state and toggle function directly */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
