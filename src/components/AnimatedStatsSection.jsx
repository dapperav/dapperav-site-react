import React, { useState, useEffect, useRef } from 'react';

const AnimatedStatsSection = ({ compact = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    installations: 0,
    satisfaction: 0,
    responseTime: 0,
    experience: 0
  });
  
  const sectionRef = useRef(null);

  const finalValues = {
    installations: 500,
    satisfaction: 98,
    responseTime: 24,
    experience: 8
  };

  const stats = [
    {
      key: 'installations',
      value: animatedValues.installations,
      suffix: '+',
      label: compact ? 'Installs' : 'TVs Mounted',
      icon: '📺',
      color: '#FFD700'
    },
    {
      key: 'satisfaction',
      value: animatedValues.satisfaction,
      suffix: '%',
      label: 'Customer Satisfaction',
      icon: '⭐',
      color: '#00FF7F'
    },
    {
      key: 'responseTime',
      value: animatedValues.responseTime,
      suffix: 'hr',
      label: 'Response Time',
      icon: '⚡',
      color: '#FF6B6B'
    },
    {
      key: 'experience',
      value: animatedValues.experience,
      suffix: '+',
      label: 'Years Experience',
      icon: '🏆',
      color: '#4ECDC4'
    }
  ];

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60fps
      const stepDuration = duration / steps;

      stats.forEach(stat => {
        let currentStep = 0;
        const increment = finalValues[stat.key] / steps;

        const timer = setInterval(() => {
          currentStep++;
          const currentValue = Math.min(Math.ceil(increment * currentStep), finalValues[stat.key]);
          
          setAnimatedValues(prev => ({
            ...prev,
            [stat.key]: currentValue
          }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isVisible]);

  return (
    <div 
      ref={sectionRef}
      style={{
        padding: compact ? '2rem 0' : '5rem 1.5rem',
        background: compact ? 'transparent' : 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {!compact && (
        // Background Animation - only for standalone
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.05) 0%, transparent 50%)',
          animation: isVisible ? 'pulse 4s ease-in-out infinite' : 'none'
        }} />
      )}
      
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {!compact && (
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FFD700, #FFC300)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Trusted by Houston Homeowners
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#bbb', 
            maxWidth: 600, 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            These numbers tell the story of our commitment to quality and customer satisfaction.
          </p>
        </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: compact ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: compact ? '1rem' : '2rem',
          alignItems: 'center'
        }}>
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: compact ? '12px' : '20px',
                padding: compact ? '1.5rem 1rem' : '2.5rem 1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated background glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                animation: isVisible ? 'rotate 8s linear infinite' : 'none'
              }} />
              
              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: compact ? '2rem' : '3rem',
                  marginBottom: compact ? '0.5rem' : '1rem',
                  filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.3))'
                }}>
                  {stat.icon}
                </div>
                
                <div style={{
                  fontSize: compact ? '2rem' : '3.5rem',
                  fontWeight: 900,
                  marginBottom: '0.5rem',
                  color: stat.color,
                  textShadow: `0 0 20px ${stat.color}40`,
                  fontFamily: 'monospace'
                }}>
                  {stat.value}{stat.suffix}
                </div>
                
                <div style={{
                  fontSize: compact ? '0.9rem' : '1.1rem',
                  fontWeight: 600,
                  color: '#fff',
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease 1s'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: '#FFD700',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Ready to join our satisfied customers?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'linear-gradient(135deg, #FFD700, #FFC300)',
              color: '#000',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(255,215,0,0.3)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 35px rgba(255,215,0,0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(255,215,0,0.3)';
            }}
          >
            Get Your Free Quote Now
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedStatsSection;
