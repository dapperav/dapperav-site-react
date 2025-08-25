import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'Portfolio', path: '/portfolio', icon: '📸' },
    { name: 'Pricing', path: '/pricing', icon: '💰' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle desktop margin adjustment
  useEffect(() => {
    if (!isMobile) {
      const content = document.getElementById('main-content');
      if (content) {
        content.style.marginLeft = isHovered ? '250px' : '80px';
        content.style.transition = 'margin-left 0.3s ease';
      }
    }
  }, [isHovered, isMobile]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => !isMobile && setIsHovered(true);
  const handleMouseLeave = () => !isMobile && setIsHovered(false);
  
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const navSlideExpandedStyle = {
    listStyle: 'none',
    margin: 0,
    padding: '0 0 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '.4rem'
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.875rem 1.25rem',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: 0, // Sharp edges for Mad Men look
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: '0.025em',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase' // Mad Men style
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {isMobile && (
        <motion.button
          onClick={toggleMobileMenu}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 1001,
            background: 'var(--color-primary)',
            color: 'var(--cream)',
            border: 'none',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={isMobileOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileOpen ? '✕' : '☰'}
          </motion.div>
        </motion.button>
      )}

      {/* Overlay for mobile menu */}
      {isMobile && isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
        />
      )}

      {/* Navigation Menu */}
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: isMobile ? '100%' : (isHovered ? '250px' : '80px'),
          maxWidth: isMobile ? '320px' : 'none',
          backgroundColor: 'var(--color-primary)',
          zIndex: 1000,
          boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
          transition: 'width 0.3s ease',
          borderRight: '1px solid rgba(255,255,255,0.1)',
          transform: isMobile ? (isMobileOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={isMobile ? {
          x: isMobileOpen ? 0 : '-100%'
        } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem' }}>
          <motion.img
            src="/logo.png"
            alt="Dapper AV Logo"
            style={{ height: '50px', cursor: 'pointer' }}
            animate={{ rotate: (isHovered || isMobileOpen) ? 360 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
        </div>

        <AnimatePresence>
          {(isHovered || (isMobile && isMobileOpen)) && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{ 
                ...navSlideExpandedStyle, 
                paddingLeft: isMobile ? '1rem' : '1.5rem', 
                alignItems: 'flex-start',
                paddingTop: isMobile ? '1rem' : '0'
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ listStyle: 'none' }}
                >
                  <Link 
                    to={item.path} 
                    style={{ 
                      ...linkStyle, 
                      color: location.pathname === item.path ? '#00ff88' : '#fff',
                      backgroundColor: location.pathname === item.path ? 'rgba(0,255,136,0.1)' : 'transparent',
                      padding: isMobile ? '1rem 1.25rem' : '0.875rem 1.25rem'
                    }} 
                    className="neon-hover"
                    onClick={() => isMobile && setIsMobileOpen(false)}
                  >
                    <span style={{ marginRight: '0.75rem', fontSize: isMobile ? '1.2rem' : '1rem' }}>
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* CSS Styles */}
      <style>{`
        .neon-hover {
          position: relative;
          color: #fff;
          text-decoration: none;
        }
        .neon-hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #00ff88, #00ccff);
          transition: width 0.3s ease;
        }
        .neon-hover:hover::after {
          width: 100%;
        }
        .neon-hover:hover {
          color: #00ff88 !important;
          text-shadow: 0 0 10px rgba(0,255,136,0.5);
        }
      `}</style>
    </>
  );
};

export default NavBar;
