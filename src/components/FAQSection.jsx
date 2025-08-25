import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How long does a typical TV mounting installation take?",
      answer: "Most TV mounting installations take 1-2 hours, depending on complexity. This includes mounting the TV, concealing cables, and setting up your devices. We'll provide a time estimate during your consultation."
    },
    {
      question: "Do you provide a warranty on your work?",
      answer: "Yes! We offer a lifetime workmanship guarantee on all installations. If there's ever an issue with our installation work, we'll come back and fix it at no charge."
    },
    {
      question: "Can you mount TVs on any type of wall?",
      answer: "We can mount TVs on most wall types including drywall, brick, stone, concrete, and tile. We use the appropriate mounting hardware for each surface type to ensure a secure installation."
    },
    {
      question: "What's included in your whole home audio service?",
      answer: "Our whole home audio service includes system design, speaker placement planning, amplifier setup, multi-zone control configuration, and integration with streaming services like Spotify and Apple Music."
    },
    {
      question: "Do you work with existing equipment or only sell new gear?",
      answer: "We work with both! We can integrate your existing equipment and also recommend upgrades when needed. We'll always let you know what can be reused vs. what might need replacing."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" style={{ 
      padding: '4rem 1.5rem', 
      background: 'linear-gradient(180deg, #f9f9f9 0%, #ffffff 100%)',
      borderTop: '1px solid #e9e9e9'
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          fontSize: '2rem', 
          fontWeight: 900, 
          color: '#222' 
        }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: '#fff',
                borderRadius: 12,
                border: '1px solid #e0e0e0',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.2s ease'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#333'
                }}
              >
                <span>{faq.question}</span>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#FFD700',
                  transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}>
                  +
                </span>
              </button>
              
              {openFAQ === index && (
                <div style={{
                  padding: '0 1.25rem 1.25rem',
                  color: '#666',
                  lineHeight: 1.6,
                  borderTop: '1px solid #f0f0f0',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '2rem',
          padding: '1.5rem',
          background: '#f8f9fa',
          borderRadius: 12,
          border: '1px solid #e9ecef'
        }}>
          <p style={{ margin: '0 0 1rem', color: '#666' }}>
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            style={{
              display: 'inline-block',
              background: '#FFD700',
              color: '#000',
              padding: '0.75rem 1.5rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
