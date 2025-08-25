import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';
import Analytics from './components/Analytics';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import CalculatorPage from './pages/CalculatorPage';
import HomeTheaterServicePage from './pages/HomeTheaterServicePage';
import SmartHomeServicePage from './pages/SmartHomeServicePage';
import PricingPage from './pages/PricingPage';
import { inlineCriticalCSS, preloadResources, registerServiceWorker } from './utils/performanceOptimization';

import './index.css';

export default function App() {
  useEffect(() => {
    // Initialize performance optimizations
    inlineCriticalCSS();
    preloadResources();
    registerServiceWorker();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
        {/* Mad Men Inspired Global Styles */}
        <style>{`
          @keyframes dapper-bounce { 
            0%,100% { transform: translateY(0) } 
            50% { transform: translateY(7px) } 
          }
          @media (prefers-reduced-motion: reduce) {
            * { 
              animation-duration: .001ms !important; 
              animation-iteration-count: 1 !important; 
              transition-duration: .001ms !important; 
            }
          }
          
          /* Mad Men Typography Overrides */
          .hero-title {
            font-family: var(--font-display);
            font-size: var(--text-6xl);
            font-weight: 700;
            line-height: var(--leading-tight);
            letter-spacing: -0.03em;
          }
          
          .section-title {
            font-family: var(--font-display);
            font-size: var(--text-4xl);
            font-weight: 600;
            color: var(--color-primary);
            margin-bottom: 1.5rem;
          }
          
          .section-subtitle {
            font-family: var(--font-body);
            font-size: var(--text-lg);
            line-height: var(--leading-relaxed);
            color: var(--color-text-light);
            max-width: 65ch;
          }
          
          /* Mobile Responsive Main Content */
          @media (max-width: 768px) {
            #main-content {
              margin-left: 0 !important;
              padding-top: 70px; /* Space for mobile nav button */
            }
            
            .hero-title {
              font-size: var(--text-4xl);
            }
            
            .section-title {
              font-size: var(--text-3xl);
            }
          }
          
          @media (max-width: 480px) {
            .hero-title {
              font-size: var(--text-3xl);
            }
            
            .section-title {
              font-size: var(--text-2xl);
            }
          }
        `}</style>

        <NavBar />
        
        <main id="main-content" style={{ 
          flex: 1, 
          background: 'var(--color-background)',
          marginLeft: '80px',
          transition: 'margin-left 0.3s ease'
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/home-theater" element={<HomeTheaterServicePage />} />
            <Route path="/services/smart-home" element={<SmartHomeServicePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>

          <Footer />
        </main>

        {/* Global components that appear on all pages */}
        <Analytics />
        <AIChatWidget />
      </div>
    </Router>
  );
}
