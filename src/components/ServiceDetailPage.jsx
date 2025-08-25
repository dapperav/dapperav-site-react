import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailPage = ({ serviceId }) => {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const services = {
    'home-theater': {
      title: 'Premium Home Theater Installation',
      subtitle: 'Transform Your Living Space Into a Cinematic Experience',
      hero: '/header-bg.jpg',
      description: 'Create the ultimate entertainment experience with our professional home theater installation services. From intimate family rooms to dedicated cinema spaces, we design and install premium audio-visual systems that bring the magic of movies home.',
      benefits: [
        'Immersive 4K/8K projection and display systems',
        'Professional-grade surround sound audio',
        'Automated lighting and climate integration', 
        'Custom seating and acoustic treatments',
        'Smart home integration with voice control',
        'Lifetime technical support and maintenance'
      ],
      process: [
        {
          step: 1,
          title: 'Consultation & Design',
          description: 'Our certified designers visit your home to assess the space, understand your vision, and create a custom proposal.',
          duration: '1-2 hours'
        },
        {
          step: 2,
          title: 'Professional Installation',
          description: 'Our licensed technicians handle all wiring, mounting, and system configuration with minimal disruption to your home.',
          duration: '1-3 days'
        },
        {
          step: 3,
          title: 'Training & Support',
          description: 'We provide comprehensive training on your new system and offer ongoing support to ensure optimal performance.',
          duration: 'Ongoing'
        }
      ],
      packages: {
        essential: {
          name: 'Essential Theater',
          price: '$8,500',
          priceRange: '$6,500 - $12,000',
          features: [
            '65" 4K QLED Display',
            '5.1 Surround Sound System',
            'Universal Remote Control',
            'Basic Cable Management',
            '1-Year Warranty',
            'Installation & Setup'
          ],
          popular: false
        },
        standard: {
          name: 'Premium Theater',
          price: '$15,000',
          priceRange: '$12,000 - $25,000', 
          features: [
            '75" 4K OLED Display or Projector',
            '7.2.4 Dolby Atmos System',
            'Smart Home Integration',
            'Professional Cable Management',
            'Custom Acoustic Treatment',
            '3-Year Extended Warranty',
            'White-Glove Installation'
          ],
          popular: true
        },
        luxury: {
          name: 'Luxury Cinema',
          price: '$35,000',
          priceRange: '$25,000 - $75,000+',
          features: [
            '4K Laser Projector + 120" Screen',
            '9.2.6 Premium Audio System',
            'Motorized Seating & Lighting',
            'Climate Control Integration',
            'Dedicated Equipment Room',
            'Lifetime Support Package',
            'Concierge Installation Service'
          ],
          popular: false
        }
      },
      testimonial: {
        text: "The team at Dapper AV transformed our basement into something that rivals any commercial theater. The attention to detail and quality of work exceeded our expectations. Our family movie nights will never be the same!",
        author: "Michael Chen",
        location: "Memorial Area",
        project: "Luxury Home Theater"
      },
      gallery: ['/header-bg.jpg', '/header-bg2.jpg', '/header-bg3.jpg'],
      faqs: [
        {
          question: 'How long does installation typically take?',
          answer: 'Most home theater installations take 1-3 days depending on complexity. We work efficiently while maintaining the highest quality standards.'
        },
        {
          question: 'Do you handle all the wiring and electrical work?',
          answer: 'Yes, our licensed electricians handle all wiring, including running cables through walls and connecting to your electrical panel safely and up to code.'
        },
        {
          question: 'Can you work with my existing furniture and decor?',
          answer: 'Absolutely. Our designers work with your existing space and style preferences to create a theater that feels natural in your home.'
        }
      ]
    },
    'smart-home': {
      title: 'Complete Smart Home Automation',
      subtitle: 'Control Your Entire Home From Anywhere',
      hero: '/header-bg2.jpg',
      description: 'Experience the future of home living with our comprehensive smart home automation solutions. Control lighting, climate, security, and entertainment from a single interface.',
      benefits: [
        'Centralized control of all home systems',
        'Energy savings through intelligent automation',
        'Enhanced security and monitoring capabilities',
        'Seamless integration with existing devices',
        'Voice control and mobile app access',
        'Professional installation and configuration'
      ],
      process: [
        {
          step: 1,
          title: 'Home Assessment',
          description: 'Complete evaluation of your home\'s infrastructure and automation potential.',
          duration: '2-3 hours'
        },
        {
          step: 2,
          title: 'System Installation',
          description: 'Professional installation of smart hubs, sensors, and control systems.',
          duration: '2-5 days'
        },
        {
          step: 3,
          title: 'Configuration & Training', 
          description: 'Custom programming and comprehensive user training.',
          duration: '1 day'
        }
      ],
      packages: {
        essential: {
          name: 'Smart Starter',
          price: '$5,500',
          priceRange: '$3,500 - $8,000',
          features: [
            'Smart Lighting Controls (10 zones)',
            'Thermostat Integration',
            'Basic Security System',
            'Mobile App Control',
            'Voice Assistant Setup',
            '1-Year Support'
          ],
          popular: false
        },
        standard: {
          name: 'Complete Smart Home',
          price: '$12,000', 
          priceRange: '$8,000 - $18,000',
          features: [
            'Whole-Home Lighting Control',
            'Climate & HVAC Integration',
            'Advanced Security System',
            'Entertainment Integration',
            'Automated Window Treatments',
            '3-Year Premium Support'
          ],
          popular: true
        },
        luxury: {
          name: 'Luxury Automation',
          price: '$25,000',
          priceRange: '$18,000 - $50,000+',
          features: [
            'Enterprise-Grade Control System',
            'Integrated Pool/Spa Controls',
            'Professional Security Suite',
            'Multi-Zone Audio/Video',
            'Landscape Integration',
            'Lifetime Concierge Support'
          ],
          popular: false
        }
      },
      testimonial: {
        text: "Our smart home system has completely changed how we live. Everything works seamlessly together, and the energy savings have been remarkable. The Dapper AV team made the complex simple.",
        author: "Sarah Williams",
        location: "River Oaks",
        project: "Complete Home Automation"
      },
      gallery: ['/header-bg2.jpg', '/header-bg3.jpg', '/header-bg.jpg'],
      faqs: [
        {
          question: 'Will smart home automation work with my existing devices?',
          answer: 'We specialize in integrating with existing systems and can work with most major smart home brands and protocols.'
        },
        {
          question: 'What happens if the internet goes down?',
          answer: 'Our systems include local processing capabilities so core functions continue working even during internet outages.'
        },
        {
          question: 'Is my data and privacy secure?',
          answer: 'We implement enterprise-grade security protocols and can set up local-only processing for maximum privacy protection.'
        }
      ]
    }
  };

  // Default to home-theater if serviceId not found
  const service = services[serviceId] || services['home-theater'];

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      package: selectedPackage,
      timeline: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
    };

    return (
      <form onSubmit={handleSubmit} className="contact-form card-mad-men" style={{ padding: '2rem' }}>
        <h3 className="mad-men-signature" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          marginBottom: '1.5rem',
          color: 'var(--color-primary)'
        }}>
          Get Your Free Consultation
        </h3>
        
        <div className="form-grid" style={{ display: 'grid', gap: '1rem' }}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="input-mad-men"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="input-mad-men"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              className="input-mad-men"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <select
              className="input-mad-men"
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
            >
              <option value="">Project Timeline</option>
              <option value="immediate">Ready to start immediately</option>
              <option value="1-2months">Within 1-2 months</option>
              <option value="3-6months">3-6 months planning</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Tell us about your project..."
              className="input-mad-men"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary" style={{
          width: '100%',
          marginTop: '1.5rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          padding: '1rem',
          background: 'var(--color-accent)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: 'var(--text-base)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Schedule Free Consultation
        </button>
      </form>
    );
  };

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero" style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.7), rgba(210, 105, 30, 0.8)), url(${service.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem 4rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 className="text-shimmer typewriter-effect" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 600,
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            {service.title}
          </h1>
          <p className="vintage-slide-in" style={{
            fontSize: 'var(--text-xl)',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            {service.subtitle}
          </p>
          <Link to="#packages" className="btn btn-primary sophisticated-reveal" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'var(--color-accent)',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            View Packages & Pricing
          </Link>
        </div>
      </section>

      {/* Service Overview */}
      <section className="mad-men-subtle-pattern" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 className="section-title mad-men-signature" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                marginBottom: '2rem',
                color: 'var(--color-primary)'
              }}>
                Why Choose Our {service.title}?
              </h2>
              
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--color-text)',
                marginBottom: '2rem'
              }}>
                {service.description}
              </p>

              <div className="benefits-list">
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  marginBottom: '1.5rem',
                  color: 'var(--color-primary)'
                }}>
                  What You Get:
                </h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item vintage-slide-in" style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <div style={{
                        width: '24px',
                        height: '24px',
                        background: 'var(--color-accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>
                        ✓
                      </div>
                      <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text)',
                        margin: 0
                      }}>
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="elegant-float">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-mad-men art-deco-border" style={{ 
        padding: '6rem 2rem',
        background: 'var(--color-cream)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="section-title text-shimmer text-center" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            marginBottom: '4rem',
            color: 'var(--color-primary)'
          }}>
            Our Proven Process
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {service.process.map((step, index) => (
              <div key={index} className="process-step card-mad-men vintage-slide-in" style={{
                textAlign: 'center',
                position: 'relative',
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="step-number" style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--color-accent)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'bold',
                  margin: '0 auto 1.5rem'
                }}>
                  {step.step}
                </div>
                
                <h3 className="mad-men-signature" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  {step.title}
                </h3>
                
                <p style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--color-text)',
                  marginBottom: '1rem'
                }}>
                  {step.description}
                </p>
                
                <span className="badge-mad-men" style={{
                  fontSize: 'var(--text-sm)',
                  padding: '0.5rem 1rem',
                  background: 'rgba(210, 105, 30, 0.1)',
                  color: 'var(--color-accent)',
                  borderRadius: '20px'
                }}>
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section id="packages" className="packages-section mad-men-pattern" style={{ 
        padding: '6rem 2rem',
        background: 'var(--color-light)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="section-title text-shimmer text-center" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            marginBottom: '4rem',
            color: 'var(--color-primary)'
          }}>
            Choose Your Perfect Package
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {Object.entries(service.packages).map(([key, pkg]) => (
              <div 
                key={key}
                className={`package-card card-mad-men ${pkg.popular ? 'popular' : ''}`}
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  border: pkg.popular ? '3px solid var(--color-accent)' : '1px solid rgba(26, 26, 26, 0.1)',
                  transform: pkg.popular ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {pkg.popular && (
                  <div className="popular-badge" style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-accent)',
                    color: 'white',
                    padding: '0.5rem 2rem',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    Most Popular
                  </div>
                )}

                <h3 className="mad-men-signature" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  {pkg.name}
                </h3>

                <div className="price-display" style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: 'var(--text-4xl)',
                    fontWeight: 'bold',
                    color: 'var(--color-accent)',
                    marginBottom: '0.5rem'
                  }}>
                    {pkg.price}
                  </div>
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-muted)'
                  }}>
                    Typical range: {pkg.priceRange}
                  </div>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '2rem',
                  textAlign: 'left'
                }}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: 'var(--text-base)'
                    }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        background: 'var(--color-accent)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.7rem',
                        flexShrink: 0
                      }}>
                        ✓
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedPackage(key)}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: pkg.popular ? 'var(--color-accent)' : 'transparent',
                    color: pkg.popular ? 'white' : 'var(--color-accent)',
                    border: `2px solid var(--color-accent)`,
                    cursor: 'pointer',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {selectedPackage === key ? 'Selected Package' : 'Select Package'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section mad-men-subtle-pattern" style={{ 
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="testimonial-vintage sophisticated-reveal">
            <p className="testimonial-text" style={{
              fontSize: 'var(--text-xl)',
              lineHeight: 'var(--leading-relaxed)',
              fontStyle: 'italic',
              color: 'var(--color-text)',
              marginBottom: '2rem'
            }}>
              "{service.testimonial.text}"
            </p>
            
            <div className="testimonial-author">
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '0.25rem'
              }}>
                {service.testimonial.author}
              </h4>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)'
              }}>
                {service.testimonial.location} • {service.testimonial.project}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section art-deco-corners" style={{ 
        padding: '6rem 2rem',
        background: 'var(--color-cream)'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="section-title text-shimmer text-center" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            marginBottom: '3rem',
            color: 'var(--color-primary)'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: '2rem' }}>
            {service.faqs.map((faq, index) => (
              <div key={index} className="faq-item card-mad-men vintage-slide-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '1rem'
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--color-text)'
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta mad-men-pattern" style={{ 
        padding: '6rem 2rem',
        background: 'var(--color-accent)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 className="sophisticated-reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 600,
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em'
          }}>
            Ready to Get Started?
          </h2>
          <p className="vintage-slide-in" style={{
            fontSize: 'var(--text-lg)',
            marginBottom: '2.5rem',
            opacity: 0.9
          }}>
            Schedule your free consultation today and take the first step toward transforming your space.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn elegant-float" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Schedule Consultation
            </Link>
            <Link to="/portfolio" className="btn elegant-float" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              textDecoration: 'none',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-page .service-hero {
            padding: 4rem 1rem 2rem;
          }
          
          .service-detail-page section > div {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .packages-section > div > div {
            grid-template-columns: 1fr;
          }
          
          .final-cta > div > div {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
