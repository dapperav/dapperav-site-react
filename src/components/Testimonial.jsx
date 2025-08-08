// src/components/Testimonial.jsx
import React from 'react';

const Testimonial = ({ quote, author }) => (
  <div style={{ padding: '1rem', color: '#333' }}>
    <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>
      “{quote}”
    </p>
    <p style={{ fontWeight: 'bold', textAlign: 'right' }}>- {author}</p>
    <div style={{ color: '#FFD700', textAlign: 'right', marginTop: '0.25rem' }}>
      {'\u2B50\u2B50\u2B50\u2B50\u2B50'}
    </div>
  </div>
);

export default Testimonial;
