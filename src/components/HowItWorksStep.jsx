// components/HowItWorksStep.jsx
import React from 'react';

const HowItWorksStep = ({ number, title, text }) => {
  return (
    <div style={{
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      width: '260px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div style={{
        background: '#FFD700',
        color: '#000',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        margin: '0 auto 1rem',
        fontWeight: 'bold'
      }}>{number}</div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#555' }}>{text}</p>
    </div>
  );
};

export default HowItWorksStep;
