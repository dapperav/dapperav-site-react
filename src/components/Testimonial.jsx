// components/Testimonial.jsx
import React from 'react';

const Testimonial = ({ quote, author, service, rating = 5 }) => {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #ffffff, #f8f8f8)',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
      fontStyle: 'italic',
      textAlign: 'left',
      position: 'relative',
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      {/* Quote marks */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1.5rem',
        fontSize: '3rem',
        color: '#FFD700',
        opacity: 0.3,
        lineHeight: 1,
        fontFamily: 'serif'
      }}>
        "
      </div>
      
      <div style={{ 
        marginBottom: '1.5rem', 
        fontSize: '1.1rem', 
        color: '#333', 
        lineHeight: 1.6,
        paddingLeft: '1rem'
      }}>
        {quote}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 'bold', color: '#000', fontSize: '1.1rem', fontStyle: 'normal' }}>
            {author}
          </div>
          {service && (
            <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem', fontStyle: 'normal' }}>
              {service}
            </div>
          )}
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end',
          gap: '0.25rem'
        }}>
          <div style={{ color: '#FFD700', fontSize: '1.2rem', letterSpacing: '1px' }}>
            {'★'.repeat(rating)}
          </div>
          <div style={{ 
            fontSize: '0.8rem', 
            color: '#999', 
            fontStyle: 'normal',
            fontWeight: 600
          }}>
            Verified Review
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
