// components/FeatureCard.jsx
import React from 'react';

const cardStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  width: '260px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
};

const iconStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#FFD700',
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      style={{
        ...cardStyle,
        cursor: 'default',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={iconStyle}>{icon}</div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#555' }}>{description}</p>
    </div>
  );
};

export default FeatureCard;
