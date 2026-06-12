import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About Me', path: '#about', id: 'about' },
    { name: 'Projects', path: '#projects', id: 'projects' },
    { name: 'Contact', path: '#contact', id: 'contact' },
  ];

  // Track scrolling to highlight navbar links
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
      }}>
        {/* Logo */}
        <a 
          href="#home" 
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.4rem',
            background: 'var(--accent-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Terminal size={24} style={{ stroke: 'var(--accent-primary)', WebkitTextFillColor: 'initial' }} />
          <span>IMAL.L</span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '32px',
            alignItems: 'center',
          }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    borderBottom: activeSection === link.id ? '2px solid var(--accent-primary)' : '2px solid transparent',
                    paddingBottom: '4px',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Embedded Theme Toggle */}
            <li>
              <button
                onClick={toggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-tertiary)',
                  width: '38px',
                  height: '38px',
                }}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }} className="mobile-controls">
          <div className="only-mobile-toggle" style={{ display: 'none' }}>
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '50%',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-tertiary)',
                width: '36px',
                height: '36px',
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
          <button 
            onClick={toggleMenu} 
            className="menu-btn" 
            aria-label="Toggle Menu"
            style={{
              color: 'var(--text-primary)',
              padding: '6px',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass mobile-menu animate-fade-in" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          borderBottom: '1px solid var(--border-color)',
          gap: '20px',
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  onClick={closeMenu}
                  style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    padding: '8px 0',
                    color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: block !important;
          }
          .menu-btn {
            display: none !important;
          }
          .only-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .only-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
