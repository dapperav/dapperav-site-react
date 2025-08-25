import React, { useState, useEffect, useRef } from 'react';

const ProcessTimelineSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    {
      title: 'Free Consultation',
      icon: '📞',
      description: 'We discuss your vision, measure space, and provide expert recommendations tailored to your needs.'
    },
    {
      title: 'Custom Planning',
      icon: '📋',
      description: 'Our team creates a detailed installation plan with precise measurements and mounting solutions.'
    },
    {
      title: 'Professional Installation',
      icon: '🔧',
      description: 'Expert technicians mount your TV with precision, ensuring perfect placement and clean cable management.'
    },
    {
      title: 'Enjoy Your Setup',
      icon: '✨',
      description: 'Relax and enjoy your perfectly mounted TV with ongoing support and warranty coverage.'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance steps when visible
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible, steps.length]);

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(180deg, #f7f7f7 0%, #e8e8e8 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            color: '#0b0b0b'
          }}>
            Our Simple 4-Step Process
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: 600, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            From consultation to completion, we make TV mounting stress-free and professional.
          </p>
        </div>

        <div style={{ position: 'relative', marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  background: activeStep >= index 
                    ? 'linear-gradient(135deg, #FFD700, #FFC300)'
                    : 'linear-gradient(135deg, #fff, #f9f9f9)',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: activeStep >= index 
                    ? '0 15px 40px rgba(255,215,0,0.3)' 
                    : '0 10px 30px rgba(0,0,0,0.1)',
                  transform: isVisible 
                    ? `translateY(0) ${activeStep >= index ? 'scale(1.02)' : 'scale(1)'}` 
                    : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${index * 0.2}s`,
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center'
                }}
              >
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    color: activeStep >= index ? '#000' : '#FFD700'
                  }}>
                    {step.icon}
                  </div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: activeStep >= index 
                      ? '#000'
                      : '#FFD700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: activeStep >= index ? '#FFD700' : '#000',
                    margin: '0 auto 1rem',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    {activeStep > index ? '✓' : index + 1}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    marginBottom: '0.8rem',
                    color: activeStep >= index ? '#000' : '#0b0b0b'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    color: activeStep >= index ? '#333' : '#666',
                    margin: 0
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease 1.5s'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0b0b0b, #333)',
            padding: '2.5rem',
            borderRadius: '25px',
            color: '#fff',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FFD700, #FFC300)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ready to Get Started?
            </h3>
            <p style={{
              fontSize: '1rem',
              marginBottom: '2rem',
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Join hundreds of satisfied Houston homeowners. Get your free consultation today!
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFC300)',
                color: '#000',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(255,215,0,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(255,215,0,0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 30px rgba(255,215,0,0.3)';
              }}
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
