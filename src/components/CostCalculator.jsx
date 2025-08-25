import React, { useState, useEffect } from 'react';

const CostCalculator = () => {
  const [selections, setSelections] = useState({
    service: '',
    tvSize: '',
    wallType: '',
    cableManagement: false,
    soundbar: false,
    mounting: '',
    rooms: 1,
    speakerType: '',
    zones: 1
  });
  
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const services = [
    { id: 'tv-mount', name: '📺 TV Mounting', basePrice: 150 },
    { id: 'audio', name: '🔊 Whole Home Audio', basePrice: 500 },
    { id: 'network', name: '🌐 Network Setup', basePrice: 300 },
    { id: 'commercial', name: '🏢 Commercial AV', basePrice: 1000 }
  ];

  const tvSizes = [
    { id: '32-50', name: '32" - 50"', multiplier: 1 },
    { id: '55-65', name: '55" - 65"', multiplier: 1.3 },
    { id: '70-75', name: '70" - 75"', multiplier: 1.6 },
    { id: '80-plus', name: '80"+', multiplier: 2 }
  ];

  const wallTypes = [
    { id: 'drywall', name: 'Drywall', multiplier: 1 },
    { id: 'brick', name: 'Brick/Stone', multiplier: 1.5 },
    { id: 'concrete', name: 'Concrete', multiplier: 1.8 }
  ];

  const mountingTypes = [
    { id: 'fixed', name: 'Fixed Mount', multiplier: 1 },
    { id: 'tilt', name: 'Tilt Mount', multiplier: 1.2 },
    { id: 'full-motion', name: 'Full Motion', multiplier: 1.5 }
  ];

  const speakerTypes = [
    { id: 'ceiling', name: 'In-Ceiling', multiplier: 1 },
    { id: 'wall', name: 'In-Wall', multiplier: 1.2 },
    { id: 'outdoor', name: 'Outdoor', multiplier: 1.5 }
  ];

  useEffect(() => {
    calculateCost();
  }, [selections]);

  const calculateCost = () => {
    const service = services.find(s => s.id === selections.service);
    if (!service) {
      setEstimatedCost(0);
      setShowResults(false);
      return;
    }

    let cost = service.basePrice;

    // TV Mounting calculations
    if (selections.service === 'tv-mount') {
      const tvSize = tvSizes.find(s => s.id === selections.tvSize);
      const wallType = wallTypes.find(w => w.id === selections.wallType);
      const mounting = mountingTypes.find(m => m.id === selections.mounting);
      
      if (tvSize) cost *= tvSize.multiplier;
      if (wallType) cost *= wallType.multiplier;
      if (mounting) cost *= mounting.multiplier;
      if (selections.cableManagement) cost += 100;
      if (selections.soundbar) cost += 75;
    }

    // Audio system calculations
    if (selections.service === 'audio') {
      const speakerType = speakerTypes.find(s => s.id === selections.speakerType);
      if (speakerType) cost *= speakerType.multiplier;
      cost += (selections.rooms - 1) * 200;
      cost += (selections.zones - 1) * 150;
    }

    // Network setup calculations  
    if (selections.service === 'network') {
      cost += (selections.rooms - 1) * 75;
    }

    setEstimatedCost(Math.round(cost));
    setShowResults(true);
  };

  const handleSelectionChange = (field, value) => {
    setSelections(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setSelections({
      service: '',
      tvSize: '',
      wallType: '',
      cableManagement: false,
      soundbar: false,
      mounting: '',
      rooms: 1,
      speakerType: '',
      zones: 1
    });
    setShowResults(false);
  };

  return (
    <section id="calculator" style={{ 
      padding: '4rem 1.5rem', 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: '2.2rem', 
          fontWeight: 900, 
          color: '#222' 
        }}>
          💰 Cost Calculator
        </h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '3rem', 
          color: '#666',
          maxWidth: 600,
          margin: '0 auto 3rem'
        }}>
          Get a rough estimate for your project. Final pricing will be provided during your free consultation.
        </p>

        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Service Selection */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#333', fontWeight: 900 }}>
              What service do you need?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => handleSelectionChange('service', service.id)}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: selections.service === service.id ? '2px solid #FFD700' : '2px solid #e9ecef',
                    background: selections.service === service.id ? 'rgba(255,215,0,0.1)' : '#fff',
                    cursor: 'pointer',
                    textAlign: 'center',
                    fontWeight: 700,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* TV Mounting Options */}
          {selections.service === 'tv-mount' && (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#333' }}>TV Size</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                  {tvSizes.map(size => (
                    <button
                      key={size.id}
                      onClick={() => handleSelectionChange('tvSize', size.id)}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: selections.tvSize === size.id ? '2px solid #FFD700' : '1px solid #ddd',
                        background: selections.tvSize === size.id ? 'rgba(255,215,0,0.1)' : '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#333' }}>Wall Type</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                  {wallTypes.map(wall => (
                    <button
                      key={wall.id}
                      onClick={() => handleSelectionChange('wallType', wall.id)}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: selections.wallType === wall.id ? '2px solid #FFD700' : '1px solid #ddd',
                        background: selections.wallType === wall.id ? 'rgba(255,215,0,0.1)' : '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {wall.name}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#333' }}>Mount Type</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                  {mountingTypes.map(mount => (
                    <button
                      key={mount.id}
                      onClick={() => handleSelectionChange('mounting', mount.id)}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: selections.mounting === mount.id ? '2px solid #FFD700' : '1px solid #ddd',
                        background: selections.mounting === mount.id ? 'rgba(255,215,0,0.1)' : '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {mount.name}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={selections.cableManagement}
                    onChange={(e) => handleSelectionChange('cableManagement', e.target.checked)}
                  />
                  Cable Management (+$100)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input 
                    type="checkbox"
                    checked={selections.soundbar}
                    onChange={(e) => handleSelectionChange('soundbar', e.target.checked)}
                  />
                  Soundbar Setup (+$75)
                </label>
              </div>
            </>
          )}

          {/* Audio System Options */}
          {selections.service === 'audio' && (
            <>
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ marginBottom: '1rem', color: '#333' }}>Speaker Type</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                  {speakerTypes.map(speaker => (
                    <button
                      key={speaker.id}
                      onClick={() => handleSelectionChange('speakerType', speaker.id)}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: selections.speakerType === speaker.id ? '2px solid #FFD700' : '1px solid #ddd',
                        background: selections.speakerType === speaker.id ? 'rgba(255,215,0,0.1)' : '#fff',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {speaker.name}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h4 style={{ marginBottom: '1rem', color: '#333' }}>Number of Rooms</h4>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={selections.rooms}
                    onChange={(e) => handleSelectionChange('rooms', parseInt(e.target.value))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 700, color: '#FFD700' }}>
                    {selections.rooms} room{selections.rooms > 1 ? 's' : ''}
                  </div>
                </div>

                <div>
                  <h4 style={{ marginBottom: '1rem', color: '#333' }}>Audio Zones</h4>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={selections.zones}
                    onChange={(e) => handleSelectionChange('zones', parseInt(e.target.value))}
                    style={{ width: '100%' }}
                  />
                  <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 700, color: '#FFD700' }}>
                    {selections.zones} zone{selections.zones > 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Network Setup Options */}
          {selections.service === 'network' && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: '#333' }}>Coverage Area (Rooms)</h4>
              <input
                type="range"
                min="1"
                max="15"
                value={selections.rooms}
                onChange={(e) => handleSelectionChange('rooms', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 700, color: '#FFD700' }}>
                {selections.rooms} room{selections.rooms > 1 ? 's' : ''}
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && estimatedCost > 0 && (
            <div style={{
              background: 'linear-gradient(135deg, #FFD700, #FFC300)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              marginTop: '2rem'
            }}>
              <h3 style={{ margin: '0 0 1rem', color: '#000', fontSize: '1.5rem', fontWeight: 900 }}>
                Estimated Cost Range
              </h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#000', marginBottom: '1rem' }}>
                ${estimatedCost - 50} - ${estimatedCost + 100}
              </div>
              <p style={{ margin: '0 0 1.5rem', color: '#333', fontWeight: 600 }}>
                *This is a rough estimate. Final pricing determined during free consultation.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="#contact"
                  style={{
                    background: '#000',
                    color: '#FFD700',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 900,
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Get Exact Quote
                </a>
                <button
                  onClick={resetCalculator}
                  style={{
                    background: 'transparent',
                    color: '#000',
                    border: '2px solid #000',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#000';
                    e.target.style.color = '#FFD700';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#000';
                  }}
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
