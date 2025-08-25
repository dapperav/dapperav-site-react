import React from 'react';
import { Link } from 'react-router-dom';
import CostCalculator from '../components/CostCalculator';

const PricingPage = () => {
  const pricingTiers = [
    {
      name: 'Basic TV Mount',
      price: '$150-200',
      description: 'Perfect for standard wall mounting',
      features: [
        'Single TV wall mounting (up to 65")',
        'Basic cable management',
        'Level and secure installation',
        'Post-installation testing',
        '1-year warranty'
      ],
      popular: false
    },
    {
      name: 'Premium TV Package',
      price: '$250-350',
      description: 'Complete TV installation with all the extras',
      features: [
        'TV wall mounting (any size)',
        'In-wall cable concealment',
        'Soundbar mounting & setup',
        'Universal remote programming',
        'Power outlet relocation (if needed)',
        '2-year warranty'
      ],
      popular: true
    },
    {
      name: 'Smart Home Bundle',
      price: '$500-800',
      description: 'TV mounting plus smart home integration',
      features: [
        'Premium TV mounting package',
        'Smart home hub setup',
        'Voice control integration',
        'Smart lighting setup (3 switches)',
        'Streaming device optimization',
        '2-year warranty + ongoing support'
      ],
      popular: false
    }
  ];

  const serviceRates = [
    {
      service: 'TV Mounting',
      priceRange: '$150 - $400',
      factors: ['TV size', 'Wall type', 'Cable management needs', 'Soundbar integration']
    },
    {
      service: 'Whole Home Audio',
      priceRange: '$800 - $5,000+',
      factors: ['Number of zones', 'Speaker type', 'System complexity', 'Outdoor speakers']
    },
    {
      service: 'Network Setup',
      priceRange: '$500 - $2,500',
      factors: ['Home size', 'Internet speed', 'Number of access points', 'Ethernet wiring']
    },
    {
      service: 'Home Theater',
      priceRange: '$2,000 - $15,000+',
      factors: ['Room size', 'Equipment quality', 'Audio complexity', 'Acoustic treatment']
    },
    {
      service: 'Smart Home Automation',
      priceRange: '$300 - $3,000+',
      factors: ['Number of devices', 'System integration', 'Custom programming', 'Voice control']
    },
    {
      service: 'Commercial AV',
      priceRange: '$1,000 - $25,000+',
      factors: ['Venue size', 'Display quantity', 'Audio requirements', 'Ongoing support']
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #FFD700, #FFC300)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Transparent Pricing
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#ccc',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            No hidden fees, no surprises. Get an accurate estimate for your project with our transparent pricing structure.
          </p>
        </div>
      </section>

      {/* Cost Calculator */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            marginBottom: '1rem',
            color: '#333'
          }}>
            Get Your Instant Estimate
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            marginBottom: '3rem',
            maxWidth: 600,
            margin: '0 auto 3rem'
          }}>
            Use our calculator to get an immediate ballpark estimate for your project. Final pricing may vary based on specific requirements.
          </p>
          <CostCalculator />
        </div>
      </section>

      {/* Popular Packages */}
      <section style={{ padding: '4rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#333'
          }}>
            Popular Packages
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: 600,
            margin: '0 auto 3rem'
          }}>
            Pre-designed packages that cover the most common installation needs. All packages include professional installation and warranty.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {pricingTiers.map((tier, index) => (
              <div key={index} style={{
                background: '#fff',
                border: tier.popular ? '3px solid #FFD700' : '1px solid #e9ecef',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                boxShadow: tier.popular ? '0 15px 40px rgba(255,215,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
                transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}>
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #FFD700, #FFC300)',
                    color: '#000',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                    color: '#333'
                  }}>
                    {tier.name}
                  </h3>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: '#FFD700',
                    marginBottom: '0.5rem'
                  }}>
                    {tier.price}
                  </div>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    {tier.description}
                  </p>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0'
                }}>
                  {tier.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                      fontSize: '0.95rem',
                      color: '#555'
                    }}>
                      <span style={{ color: '#FFD700', marginRight: '0.75rem', fontSize: '1.2rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: tier.popular 
                      ? 'linear-gradient(135deg, #FFD700, #FFC300)' 
                      : 'transparent',
                    color: tier.popular ? '#000' : '#FFD700',
                    border: tier.popular ? 'none' : '2px solid #FFD700',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Rate Guide */}
      <section style={{ padding: '4rem 1.5rem', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#333'
          }}>
            Service Rate Guide
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '3rem',
            maxWidth: 600,
            margin: '0 auto 3rem'
          }}>
            Typical price ranges for our services. Final costs depend on project complexity and specific requirements.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem'
          }}>
            {serviceRates.map((rate, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid #e9ecef',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#333',
                    margin: 0
                  }}>
                    {rate.service}
                  </h3>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#FFD700'
                  }}>
                    {rate.priceRange}
                  </span>
                </div>
                <div>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>
                    Pricing factors:
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {rate.factors.map((factor, idx) => (
                      <li key={idx} style={{
                        fontSize: '0.85rem',
                        color: '#777',
                        marginBottom: '0.25rem',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#FFD700'
                        }}>•</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 900,
            marginBottom: '1rem',
            color: '#FFD700'
          }}>
            Ready for Your Free Quote?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#ccc',
            marginBottom: '2rem'
          }}>
            Get an accurate, personalized estimate for your project. No pressure, just honest pricing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: 'linear-gradient(135deg, #FFD700, #FFC300)',
              color: '#000',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}>
              Get Free Quote
            </Link>
            <Link to="/services" style={{
              background: 'transparent',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              border: '2px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}>
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
