import React, { useState } from 'react';

const ServiceAreasSection = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const serviceAreas = [
    {
      name: "Houston",
      description: "Downtown Houston and surrounding neighborhoods",
      responseTime: "Same day",
      color: "#FFD700",
      coverage: "Full service area"
    },
    {
      name: "Katy", 
      description: "Katy, Cinco Ranch, and West Houston",
      responseTime: "Next day",
      color: "#FFC300",
      coverage: "Full service area"
    },
    {
      name: "Sugar Land",
      description: "Sugar Land, Missouri City, and Fort Bend County",
      responseTime: "1-2 days",
      color: "#FFB000",
      coverage: "Full service area"
    },
    {
      name: "The Woodlands",
      description: "The Woodlands, Spring, and North Houston",
      responseTime: "1-2 days", 
      color: "#FF9500",
      coverage: "Full service area"
    },
    {
      name: "Pearland",
      description: "Pearland, Friendswood, and South Houston",
      responseTime: "1-2 days",
      color: "#FF8C00",
      coverage: "Full service area"
    }
  ];

  return (
    <section id="areas" style={{ 
      padding: '4rem 1.5rem', 
      background: 'linear-gradient(180deg, #0b0b0b 0%, #1a1a1a 100%)',
      color: '#fff'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: '2.2rem', 
          fontWeight: 900, 
          color: '#FFD700' 
        }}>
          Service Areas
        </h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          color: '#bbb',
          maxWidth: 600,
          margin: '0 auto 3rem'
        }}>
          We proudly serve the Greater Houston area with fast, reliable AV installation services.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Map Visualization */}
          <div style={{
            background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid #333',
            position: 'relative',
            minHeight: '400px'
          }}>
            <h3 style={{ 
              margin: '0 0 2rem', 
              color: '#FFD700', 
              textAlign: 'center',
              fontSize: '1.4rem',
              fontWeight: 900
            }}>
              🗺️ Coverage Map
            </h3>
            
            {/* Simple visual map representation */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '280px',
              background: 'radial-gradient(circle at center, rgba(255,215,0,0.1), rgba(255,215,0,0.02))',
              borderRadius: '16px',
              border: '2px dashed rgba(255,215,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏠</div>
              <div style={{ color: '#FFD700', fontWeight: 900, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Greater Houston Area
              </div>
              <div style={{ color: '#bbb', fontSize: '0.9rem' }}>
                30+ mile radius coverage
              </div>
              
              {/* Service area indicators */}
              {serviceAreas.map((area, index) => (
                <div
                  key={area.name}
                  style={{
                    position: 'absolute',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: selectedArea === area.name ? '#FFD700' : area.color,
                    cursor: 'pointer',
                    transform: selectedArea === area.name ? 'scale(1.5)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    // Positioning areas around the center
                    ...(index === 0 && { top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(' + (selectedArea === area.name ? '1.5' : '1') + ')' }),
                    ...(index === 1 && { top: '30%', left: '20%' }),
                    ...(index === 2 && { bottom: '25%', left: '35%' }),
                    ...(index === 3 && { top: '20%', right: '25%' }),
                    ...(index === 4 && { bottom: '30%', right: '30%' })
                  }}
                  onMouseEnter={() => setSelectedArea(area.name)}
                  onMouseLeave={() => setSelectedArea(null)}
                />
              ))}
            </div>
          </div>

          {/* Service Areas List */}
          <div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {serviceAreas.map(area => (
                <div 
                  key={area.name}
                  style={{
                    background: selectedArea === area.name 
                      ? 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))'
                      : 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: selectedArea === area.name 
                      ? '2px solid #FFD700'
                      : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={() => setSelectedArea(area.name)}
                  onMouseLeave={() => setSelectedArea(null)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ 
                      margin: 0, 
                      color: selectedArea === area.name ? '#FFD700' : '#fff',
                      fontSize: '1.3rem',
                      fontWeight: 900
                    }}>
                      📍 {area.name}
                    </h4>
                    <span style={{
                      background: area.color,
                      color: '#000',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}>
                      {area.responseTime}
                    </span>
                  </div>
                  <p style={{ 
                    margin: '0 0 0.75rem', 
                    color: '#bbb', 
                    lineHeight: 1.5 
                  }}>
                    {area.description}
                  </p>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#FFD700',
                    fontWeight: 600
                  }}>
                    ✅ {area.coverage}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '1.5rem',
              background: 'rgba(255,215,0,0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255,215,0,0.3)'
            }}>
              <h4 style={{ margin: '0 0 1rem', color: '#FFD700', fontWeight: 900 }}>
                🚚 Free On-Site Consultations
              </h4>
              <p style={{ margin: 0, color: '#bbb', lineHeight: 1.5 }}>
                We travel to you for all consultations and quotes. No trip charges within our service areas. 
                Emergency and weekend service available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
