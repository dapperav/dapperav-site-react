import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: 'tv-mounting',
      icon: '📺',
      title: 'TV Mounting & Installation',
      subtitle: 'Professional mounting on any surface with invisible cable management',
      features: [
        'Wall mounting on drywall, brick, stone, or tile surfaces',
        'In-wall cable concealment and cord management',
        'Soundbar and subwoofer placement optimization',
        'Universal remote programming and setup',
        'Safety anchoring and proper weight distribution',
        'Post-installation calibration and testing'
      ],
      priceRange: '$150 - $400',
      timeEstimate: '2-4 hours'
    },
    {
      id: 'home-audio',
      icon: '🔊',
      title: 'Whole Home Audio',
      subtitle: 'Seamless multi-room sound systems for indoor and outdoor spaces',
      features: [
        'Multi-zone audio system design and installation',
        'Sonos, HEOS, and other wireless system integration',
        'In-ceiling and in-wall speaker installation',
        'Outdoor and weather-resistant speaker setup',
        'Central amplification and distribution systems',
        'Voice control and smart home integration'
      ],
      priceRange: '$800 - $5,000+',
      timeEstimate: '4-8 hours'
    },
    {
      id: 'networking',
      icon: '🌐',
      title: 'Smart Networks & Wi-Fi',
      subtitle: 'Enterprise-grade networking for reliable connectivity everywhere',
      features: [
        'Wi-Fi 6/6E mesh network design and installation',
        'Professional access point placement and optimization',
        'Ethernet wiring and structured cabling',
        'Network security and guest network setup',
        'IoT device integration and management',
        'Remote monitoring and troubleshooting'
      ],
      priceRange: '$500 - $2,500',
      timeEstimate: '3-6 hours'
    },
    {
      id: 'home-theater',
      icon: '🎬',
      title: 'Home Theater Systems',
      subtitle: 'Complete cinema experience with professional calibration',
      features: [
        'Projector and screen installation',
        '5.1, 7.1, and Dolby Atmos surround sound',
        'Universal remote and automation programming',
        'Acoustic treatment consultation',
        'Media streaming and source integration',
        'Professional calibration for optimal performance'
      ],
      priceRange: '$2,000 - $15,000+',
      timeEstimate: '6-12 hours'
    },
    {
      id: 'smart-home',
      icon: '🏠',
      title: 'Smart Home Automation',
      subtitle: 'Intelligent control of lighting, climate, security, and entertainment',
      features: [
        'Smart lighting and dimmer installation',
        'Thermostat and climate control integration',
        'Security camera and doorbell setup',
        'Smart lock and access control systems',
        'Voice assistant integration (Alexa, Google)',
        'Scene programming and automation setup'
      ],
      priceRange: '$300 - $3,000+',
      timeEstimate: '2-8 hours'
    },
    {
      id: 'commercial',
      icon: '🏢',
      title: 'Commercial AV Solutions',
      subtitle: 'Scalable audio-visual systems for businesses and venues',
      features: [
        'Multi-display video walls and digital signage',
        'Conference room AV and presentation systems',
        'Restaurant and bar entertainment systems',
        'Retail audio and background music systems',
        'Paging and announcement systems',
        'Service contracts and ongoing support'
      ],
      priceRange: '$1,000 - $25,000+',
      timeEstimate: '8-40 hours'
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'var(--charcoal)',
        color: 'var(--cream)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 className="hero-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3.5rem',
            fontWeight: 400,
            marginBottom: '1rem',
            color: 'var(--cream)',
            letterSpacing: '-0.02em'
          }}>
            Our Services
          </h1>
          <p className="hero-subtitle" style={{
            fontSize: '1.3rem',
            color: 'var(--warm-gray)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Professional audio-visual solutions tailored to your needs. From simple TV mounting to complete smart home automation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem'
          }}>
            {services.map((service, index) => (
              <div key={service.id} className="mad-men-card" style={{
                background: 'var(--white)',
                borderRadius: '4px',
                padding: '3rem',
                boxShadow: '0 8px 32px rgba(39, 43, 46, 0.08)',
                border: '1px solid var(--light-gray)',
                transition: 'all 0.4s ease',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute',
                  top: 0,
                  left: '2rem',
                  width: '3rem',
                  height: '2px',
                  background: 'var(--burnt-orange)'
                }}></div>
                
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1.5rem',
                    filter: 'grayscale(1) sepia(1) hue-rotate(15deg) saturate(2)'
                  }}>
                    {service.icon}
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                    color: 'var(--charcoal)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    color: 'var(--text-light)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    fontWeight: 300
                  }}>
                    {service.subtitle}
                  </p>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: 'var(--charcoal)',
                    marginBottom: '1.5rem'
                  }}>
                    What's Included:
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '0.75rem',
                        fontSize: '0.95rem',
                        color: 'var(--text-light)',
                        lineHeight: 1.5
                      }}>
                        <span style={{ 
                          color: 'var(--burnt-orange)', 
                          marginRight: '0.75rem', 
                          flexShrink: 0,
                          fontSize: '1rem',
                          fontWeight: '600'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'var(--light-cream)',
                  borderRadius: '4px',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Starting at</div>
                    <div style={{ 
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem', 
                      fontWeight: 400, 
                      color: 'var(--charcoal)' 
                    }}>
                      {service.priceRange}
                    </div>
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--text-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Typical time</div>
                    <div style={{ 
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem', 
                      fontWeight: 400, 
                      color: 'var(--charcoal)' 
                    }}>
                      {service.timeEstimate}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Get Free Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--charcoal)',
        color: 'var(--cream)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '80px',
          height: '80px',
          border: '1px solid var(--burnt-orange)',
          opacity: 0.3,
          transform: 'translateY(-50%) rotate(45deg)'
        }}></div>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            fontWeight: 400,
            marginBottom: '1.5rem',
            color: 'var(--cream)',
            letterSpacing: '-0.01em'
          }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--warm-gray)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Let's discuss your project and find the perfect solution for your space and budget.
          </p>
          <div className="btn-group">
            <Link to="/contact" className="btn btn-primary btn-large">
              Schedule Consultation
            </Link>
            <Link to="/pricing" className="btn btn-ghost btn-large">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
