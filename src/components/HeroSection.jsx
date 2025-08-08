// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ backgroundImage, children }) => (
  <section
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      textAlign: 'center',
      padding: '4rem 2rem',
      color: '#FFD700',
    }}
  >
    {children}
  </section>
);

export default HeroSection;
