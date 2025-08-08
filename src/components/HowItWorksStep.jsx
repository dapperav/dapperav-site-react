// src/components/HowItWorksStep.jsx
import React from 'react';

const HowItWorksStep = ({ number, title, text }) => (
  <div style={{ maxWidth: '300px', textAlign: 'center', margin: '0 auto' }}>
    <div
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#FFD700',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: '0 auto 1rem auto',
        fontSize: '1.5rem',
      }}
    >
      {number}
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default HowItWorksStep;
