// components/Testimonial.jsx
import React from 'react';

const Testimonial = ({ quote, author }) => {
  return (
    <div style={{
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
      fontStyle: 'italic',
      textAlign: 'left',
      position: 'relative',
    }}>
      <div style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#333' }}>"{quote}"</div>
      <div style={{ fontWeight: 'bold', color: '#000' }}>{author}</div>
      <div style={{ color: '#FFD700', marginTop: '0.5rem' }}>
        {'★'.repeat(5)}
      </div>
    </div>
  );
};

export default Testimonial;
