import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah M.",
    quote: "Mark was fast, clean, and professional. We love our new setup!",
    title: "Home Theater Installation"
  },
  {
    name: "James L.",
    quote: "Dapper AV made our conference room look and sound amazing!",
    title: "Commercial AV Overhaul"
  },
  {
    name: "Tina R.",
    quote: "Best experience ever. Super friendly and detail-oriented.",
    title: "Smart Home Setup"
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { name, quote, title } = testimonials[index];

  return (
    <section style={styles.section}>
      <h2 style={styles.header}>What Clients Say</h2>
      <div style={styles.card}>
        <p style={styles.quote}>
          “{quote}”
        </p>
        <h4 style={styles.name}>{name}</h4>
        <p style={styles.title}>{title}</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5'
  },
  header: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '2rem'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
  },
  quote: {
    fontSize: '1.25rem',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '1.5rem'
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#000'
  },
  title: {
    fontSize: '0.9rem',
    color: '#777'
  }
};

export default TestimonialSlider;