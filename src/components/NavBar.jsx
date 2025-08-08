// NavBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const content = document.getElementById('main-content');
    if (content) {
      content.style.marginLeft = isHovered ? '250px' : '80px';
      content.style.transition = 'margin-left 0.3s ease';
    }
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <nav
      ref={navRef}
      style={{
        background: '#000',
        width: isHovered ? '250px' : '80px',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: '2px 0 10px rgba(0,0,0,0.4)',
        transition: 'width 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem' }}>
        <motion.img
          src="/logo.png"
          alt="Dapper AV Logo"
          style={{ height: '50px', cursor: 'pointer' }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ ...navSlideExpandedStyle, paddingLeft: '1.5rem', alignItems: 'flex-start' }}
          >
            {['Home', 'Services', 'About', 'Contact'].map((text, index) => (
              <motion.li
                key={text}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{ listStyle: 'none' }}
              >
                <a href={`/#${text.toLowerCase()}`} style={linkStyle} className="neon-hover">{text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style>{`
        .neon-hover {
          position: relative;
          color: #fff;
          text-decoration: none;
        }
        .neon-hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #FFD700;
          box-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .neon-hover:hover::after {
          transform: scaleX(1);
        }
        .neon-hover:hover {
          color: #FFD700;
          text-shadow: 0 0 3px #FFD700, 0 0 8px #FFD700;
        }
      `}</style>
    </nav>
  );
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s ease, text-shadow 0.3s ease',
  position: 'relative',
  fontSize: '1.2rem'
};

const navSlideExpandedStyle = {
  backdropFilter: 'blur(8px)',
  background: 'rgba(0, 0, 0, 0.9)',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  zIndex: 999,
  overflow: 'hidden'
};

export default NavBar;
