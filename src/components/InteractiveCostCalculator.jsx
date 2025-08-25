import React, { useState, useEffect } from 'react';

const InteractiveCostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState({
    projectType: '',
    roomSize: '',
    displayType: '',
    audioLevel: '',
    smartFeatures: [],
    timeline: '',
    budget: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    }
  });
  
  const [estimate, setEstimate] = useState({
    basePrice: 0,
    totalPrice: 0,
    monthlyPayment: 0,
    savings: 0
  });

  const steps = [
    { number: 1, title: 'Project Type', description: 'What kind of project are you planning?' },
    { number: 2, title: 'Room Details', description: 'Tell us about your space' },
    { number: 3, title: 'Display Options', description: 'Choose your viewing experience' },
    { number: 4, title: 'Audio System', description: 'Select your audio preferences' },
    { number: 5, title: 'Smart Features', description: 'Add intelligent automation' },
    { number: 6, title: 'Timeline & Budget', description: 'Project planning details' },
    { number: 7, title: 'Contact Info', description: 'Get your personalized quote' }
  ];

  const projectTypes = [
    {
      id: 'home-theater',
      name: 'Home Theater',
      description: 'Dedicated cinema room or living room theater',
      basePrice: 12000,
      icon: '🎬',
      popular: true
    },
    {
      id: 'smart-home',
      name: 'Smart Home Automation',
      description: 'Whole home control and automation',
      basePrice: 8500,
      icon: '🏠',
      popular: false
    },
    {
      id: 'audio-video',
      name: 'Audio/Video Installation',
      description: 'TV mounting and sound system setup',
      basePrice: 3500,
      icon: '📺',
      popular: false
    },
    {
      id: 'outdoor-entertainment',
      name: 'Outdoor Entertainment',
      description: 'Patio and poolside AV systems',
      basePrice: 10000,
      icon: '🏖️',
      popular: false
    },
    {
      id: 'commercial',
      name: 'Commercial Installation',
      description: 'Office, restaurant, or retail AV',
      basePrice: 15000,
      icon: '🏢',
      popular: false
    }
  ];

  const roomSizes = [
    { id: 'small', name: 'Small (< 150 sq ft)', multiplier: 0.8, description: 'Bedroom or small office' },
    { id: 'medium', name: 'Medium (150-300 sq ft)', multiplier: 1.0, description: 'Living room or family room' },
    { id: 'large', name: 'Large (300-500 sq ft)', multiplier: 1.3, description: 'Great room or open concept' },
    { id: 'xl', name: 'Extra Large (500+ sq ft)', multiplier: 1.6, description: 'Dedicated theater room' }
  ];

  const displayTypes = [
    { id: 'tv-65', name: '65" 4K TV', price: 1500, description: 'Premium OLED display' },
    { id: 'tv-75', name: '75" 4K TV', price: 2500, description: 'Large format display' },
    { id: 'tv-85', name: '85" 4K TV', price: 4000, description: 'Extra large display' },
    { id: 'projector-4k', name: '4K Projector + Screen', price: 5000, description: '100" cinematic experience' },
    { id: 'projector-laser', name: 'Laser Projector + Screen', price: 8000, description: '120" premium cinema' }
  ];

  const audioLevels = [
    { id: 'basic', name: 'Basic Sound', price: 800, description: '2.1 soundbar system' },
    { id: 'surround', name: 'Surround Sound', price: 2500, description: '5.1 speaker system' },
    { id: 'premium', name: 'Premium Audio', price: 4500, description: '7.2 high-end system' },
    { id: 'atmos', name: 'Dolby Atmos', price: 7000, description: '9.2.4 immersive audio' }
  ];

  const smartFeatures = [
    { id: 'lighting', name: 'Smart Lighting Control', price: 1200, description: 'Automated room lighting' },
    { id: 'climate', name: 'Climate Integration', price: 800, description: 'Temperature control' },
    { id: 'security', name: 'Security System', price: 2000, description: 'Cameras and monitoring' },
    { id: 'voice', name: 'Voice Control', price: 600, description: 'Alexa/Google integration' },
    { id: 'motorized', name: 'Motorized Shades', price: 1500, description: 'Automated window treatments' },
    { id: 'network', name: 'Premium Networking', price: 1000, description: 'Enterprise-grade WiFi' }
  ];

  // Calculate estimate whenever selections change
  useEffect(() => {
    calculateEstimate();
  }, [selections]);

  const calculateEstimate = () => {
    let basePrice = 0;
    let totalPrice = 0;

    // Base project price
    const projectType = projectTypes.find(p => p.id === selections.projectType);
    if (projectType) {
      basePrice = projectType.basePrice;
    }

    // Room size multiplier
    const roomSize = roomSizes.find(r => r.id === selections.roomSize);
    if (roomSize) {
      basePrice *= roomSize.multiplier;
    }

    totalPrice = basePrice;

    // Add display cost
    const display = displayTypes.find(d => d.id === selections.displayType);
    if (display) {
      totalPrice += display.price;
    }

    // Add audio cost
    const audio = audioLevels.find(a => a.id === selections.audioLevel);
    if (audio) {
      totalPrice += audio.price;
    }

    // Add smart features
    selections.smartFeatures.forEach(featureId => {
      const feature = smartFeatures.find(f => f.id === featureId);
      if (feature) {
        totalPrice += feature.price;
      }
    });

    // Calculate financing
    const monthlyPayment = totalPrice / 60; // 5-year financing
    const savings = Math.round(totalPrice * 0.15); // 15% promotional savings

    setEstimate({
      basePrice,
      totalPrice,
      monthlyPayment,
      savings
    });
  };

  const handleSelection = (field, value) => {
    setSelections(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelection = (field, value) => {
    setSelections(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleContactInfo = (field, value) => {
    setSelections(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitQuote = async () => {
    // Handle quote submission
    const quoteData = {
      selections,
      estimate,
      timestamp: new Date().toISOString()
    };
    
    console.log('Quote submitted:', quoteData);
    alert('Thank you! Your personalized quote has been generated. A Dapper AV specialist will contact you within 2 hours to discuss your project.');
  };

  const ProgressBar = () => (
    <div className="progress-bar" style={{
      width: '100%',
      height: '6px',
      background: 'rgba(210, 105, 30, 0.2)',
      borderRadius: '3px',
      marginBottom: '2rem',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${(currentStep / steps.length) * 100}%`,
        height: '100%',
        background: 'linear-gradient(90deg, var(--color-accent), var(--burnt-orange))',
        transition: 'width 0.3s ease',
        borderRadius: '3px'
      }}></div>
    </div>
  );

  const EstimateDisplay = () => (
    <div className="estimate-display card-mad-men vintage-frame elegant-float" style={{
      position: 'sticky',
      top: '2rem',
      background: 'linear-gradient(135deg, var(--color-cream), #fff)',
      border: '2px solid var(--color-accent)'
    }}>
      <h3 className="mad-men-signature" style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        marginBottom: '1.5rem',
        color: 'var(--color-primary)',
        textAlign: 'center'
      }}>
        Your Project Estimate
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{ fontSize: 'var(--text-base)' }}>Base Project:</span>
          <span style={{ fontWeight: 600 }}>${estimate.basePrice.toLocaleString()}</span>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(210, 105, 30, 0.2)'
        }}>
          <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600 }}>Total Investment:</span>
          <span style={{ 
            fontSize: 'var(--text-2xl)', 
            fontWeight: 'bold',
            color: 'var(--color-accent)'
          }}>
            ${estimate.totalPrice.toLocaleString()}
          </span>
        </div>

        {estimate.savings > 0 && (
          <div className="savings-highlight" style={{
            background: 'rgba(34, 197, 94, 0.1)',
            color: '#059669',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            textAlign: 'center',
            fontWeight: 600
          }}>
            Limited Time: Save ${estimate.savings.toLocaleString()}!
          </div>
        )}
      </div>

      <div className="financing-info" style={{
        background: 'rgba(210, 105, 30, 0.05)',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1.5rem'
      }}>
        <h4 style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'var(--color-accent)',
          textTransform: 'uppercase'
        }}>
          Financing Available
        </h4>
        <div style={{
          fontSize: 'var(--text-xl)',
          fontWeight: 'bold',
          color: 'var(--color-primary)'
        }}>
          ${Math.round(estimate.monthlyPayment).toLocaleString()}/month
        </div>
        <div style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)'
        }}>
          0% APR for 60 months*
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)',
          marginBottom: '1rem'
        }}>
          This estimate includes installation, setup, and 1-year warranty
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              What type of project are you planning?
            </h2>
            
            <div className="options-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {projectTypes.map(type => (
                <div
                  key={type.id}
                  className={`option-card card-mad-men ${selections.projectType === type.id ? 'selected' : ''}`}
                  onClick={() => handleSelection('projectType', type.id)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    position: 'relative',
                    border: selections.projectType === type.id 
                      ? '3px solid var(--color-accent)' 
                      : '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {type.popular && (
                    <div className="popular-badge badge-mad-men" style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '1rem',
                      background: 'var(--color-accent)',
                      color: 'white',
                      fontSize: 'var(--text-xs)',
                      padding: '0.25rem 0.75rem'
                    }}>
                      Most Popular
                    </div>
                  )}
                  
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{type.icon}</div>
                  <h3 className="mad-men-signature" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)'
                  }}>
                    {type.name}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}>
                    {type.description}
                  </p>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)'
                  }}>
                    Starting at ${type.basePrice.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Tell us about your space
            </h2>
            
            <div className="options-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {roomSizes.map(size => (
                <div
                  key={size.id}
                  className={`option-card card-mad-men ${selections.roomSize === size.id ? 'selected' : ''}`}
                  onClick={() => handleSelection('roomSize', size.id)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: selections.roomSize === size.id 
                      ? '3px solid var(--color-accent)' 
                      : '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 className="mad-men-signature" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)'
                  }}>
                    {size.name}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)'
                  }}>
                    {size.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Choose your display option
            </h2>
            
            <div className="options-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {displayTypes.map(display => (
                <div
                  key={display.id}
                  className={`option-card card-mad-men ${selections.displayType === display.id ? 'selected' : ''}`}
                  onClick={() => handleSelection('displayType', display.id)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: selections.displayType === display.id 
                      ? '3px solid var(--color-accent)' 
                      : '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 className="mad-men-signature" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)'
                  }}>
                    {display.name}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}>
                    {display.description}
                  </p>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)'
                  }}>
                    +${display.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Select your audio experience
            </h2>
            
            <div className="options-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {audioLevels.map(audio => (
                <div
                  key={audio.id}
                  className={`option-card card-mad-men ${selections.audioLevel === audio.id ? 'selected' : ''}`}
                  onClick={() => handleSelection('audioLevel', audio.id)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: selections.audioLevel === audio.id 
                      ? '3px solid var(--color-accent)' 
                      : '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h3 className="mad-men-signature" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)'
                  }}>
                    {audio.name}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}>
                    {audio.description}
                  </p>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)'
                  }}>
                    +${audio.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '1rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Add smart home features
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-muted)',
              marginBottom: '2rem'
            }}>
              Select all features you're interested in (optional)
            </p>
            
            <div className="options-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {smartFeatures.map(feature => (
                <div
                  key={feature.id}
                  className={`option-card card-mad-men ${selections.smartFeatures.includes(feature.id) ? 'selected' : ''}`}
                  onClick={() => handleMultiSelection('smartFeatures', feature.id)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: selections.smartFeatures.includes(feature.id) 
                      ? '3px solid var(--color-accent)' 
                      : '1px solid rgba(26, 26, 26, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '24px',
                    height: '24px',
                    border: `2px solid ${selections.smartFeatures.includes(feature.id) ? 'var(--color-accent)' : '#ccc'}`,
                    borderRadius: '4px',
                    background: selections.smartFeatures.includes(feature.id) ? 'var(--color-accent)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.8rem'
                  }}>
                    {selections.smartFeatures.includes(feature.id) ? '✓' : ''}
                  </div>
                  
                  <h3 className="mad-men-signature" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    marginBottom: '0.5rem',
                    color: 'var(--color-primary)',
                    paddingRight: '3rem'
                  }}>
                    {feature.name}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text)',
                    marginBottom: '1rem'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)'
                  }}>
                    +${feature.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Timeline and budget preferences
            </h2>
            
            <div style={{ display: 'grid', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  When would you like to start?
                </h3>
                <div className="timeline-options" style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { id: 'immediate', name: 'Ready to start immediately' },
                    { id: '1-2months', name: 'Within 1-2 months' },
                    { id: '3-6months', name: '3-6 months from now' },
                    { id: 'planning', name: 'Still in planning phase' }
                  ].map(option => (
                    <label
                      key={option.id}
                      className={`timeline-option ${selections.timeline === option.id ? 'selected' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        border: selections.timeline === option.id 
                          ? '2px solid var(--color-accent)' 
                          : '1px solid rgba(26, 26, 26, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={selections.timeline === option.id}
                        onChange={(e) => handleSelection('timeline', e.target.value)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      <span style={{ fontSize: 'var(--text-base)' }}>{option.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  Budget considerations
                </h3>
                <div className="budget-options" style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    { id: 'flexible', name: 'I want the best solution regardless of cost' },
                    { id: 'budget-conscious', name: 'I\'d like to explore cost-effective options' },
                    { id: 'financing', name: 'I\'m interested in financing options' },
                    { id: 'comparing', name: 'I\'m comparing quotes from multiple companies' }
                  ].map(option => (
                    <label
                      key={option.id}
                      className={`budget-option ${selections.budget === option.id ? 'selected' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        border: selections.budget === option.id 
                          ? '2px solid var(--color-accent)' 
                          : '1px solid rgba(26, 26, 26, 0.2)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option.id}
                        checked={selections.budget === option.id}
                        onChange={(e) => handleSelection('budget', e.target.value)}
                        style={{ marginRight: '0.5rem' }}
                      />
                      <span style={{ fontSize: 'var(--text-base)' }}>{option.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="step-content">
            <h2 className="step-title text-shimmer" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              marginBottom: '2rem',
              color: 'var(--color-primary)',
              textAlign: 'center'
            }}>
              Get your personalized quote
            </h2>
            
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="contact-form card-mad-men">
                <div className="form-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="input-mad-men"
                      value={selections.contactInfo.name}
                      onChange={(e) => handleContactInfo('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="input-mad-men"
                      value={selections.contactInfo.email}
                      onChange={(e) => handleContactInfo('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="input-mad-men"
                      value={selections.contactInfo.phone}
                      onChange={(e) => handleContactInfo('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Project Address (Optional)</label>
                    <input
                      type="text"
                      className="input-mad-men"
                      value={selections.contactInfo.address}
                      onChange={(e) => handleContactInfo('address', e.target.value)}
                      placeholder="City, TX"
                    />
                  </div>
                </div>

                <div style={{
                  background: 'rgba(210, 105, 30, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  marginTop: '2rem',
                  textAlign: 'center'
                }}>
                  <h4 style={{
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    marginBottom: '0.5rem'
                  }}>
                    What happens next?
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text)'
                  }}>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Instant quote generation</li>
                    <li style={{ marginBottom: '0.5rem' }}>✓ Call from our designer within 2 hours</li>
                    <li>✓ Free in-home consultation scheduled</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="cost-calculator" style={{
      minHeight: '100vh',
      background: 'var(--color-light)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Header */}
        <div className="calculator-header text-center" style={{ marginBottom: '3rem' }}>
          <h1 className="text-shimmer typewriter-effect" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginBottom: '1rem'
          }}>
            Project Cost Calculator
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-muted)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Get an instant, personalized quote for your audio-visual project in just a few minutes.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator" style={{ marginBottom: '3rem' }}>
          <ProgressBar />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-muted)'
          }}>
            <span>Step {currentStep} of {steps.length}</span>
            <span>{steps[currentStep - 1]?.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: currentStep === 7 ? '1fr' : '1fr 350px',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Step Content */}
          <div className="calculator-content card-mad-men art-deco-corners">
            {renderStep()}

            {/* Navigation */}
            <div className="step-navigation" style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(26, 26, 26, 0.1)'
            }}>
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="btn"
                style={{
                  padding: '1rem 2rem',
                  background: currentStep === 1 ? '#ccc' : 'transparent',
                  color: currentStep === 1 ? '#999' : 'var(--color-accent)',
                  border: `2px solid ${currentStep === 1 ? '#ccc' : 'var(--color-accent)'}`,
                  cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                  fontWeight: 600
                }}
              >
                Previous
              </button>

              {currentStep === steps.length ? (
                <button
                  onClick={submitQuote}
                  disabled={!selections.contactInfo.name || !selections.contactInfo.email || !selections.contactInfo.phone}
                  className="btn btn-primary"
                  style={{
                    padding: '1rem 2rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Get My Quote
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="btn btn-primary"
                  style={{
                    padding: '1rem 2rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Continue
                </button>
              )}
            </div>
          </div>

          {/* Estimate Display - Hide on final step */}
          {currentStep !== 7 && <EstimateDisplay />}
        </div>
      </div>

      <style jsx>{`
        .option-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(210, 105, 30, 0.15);
        }
        
        .option-card.selected {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(210, 105, 30, 0.25);
        }
        
        .timeline-option:hover,
        .budget-option:hover {
          background: rgba(210, 105, 30, 0.05);
        }
        
        @media (max-width: 768px) {
          .cost-calculator > div > div {
            grid-template-columns: 1fr;
          }
          
          .options-grid {
            grid-template-columns: 1fr;
          }
          
          .calculator-header h1 {
            font-size: var(--text-3xl);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveCostCalculator;
