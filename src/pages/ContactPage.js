import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
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
        <div style={{ 
          position: 'absolute',
          top: '2rem',
          right: '10%',
          width: '60px',
          height: '60px',
          border: '2px solid var(--burnt-orange)',
          opacity: 0.4,
          transform: 'rotate(45deg)'
        }}></div>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3.5rem',
            fontWeight: 400,
            marginBottom: '1.5rem',
            color: 'var(--cream)',
            letterSpacing: '-0.02em'
          }}>
            Get Your Free Consultation
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'var(--warm-gray)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Ready to transform your space? We'd love to hear about your project and provide you with a custom solution.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Additional Info */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--cream)'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem'
          }}>
            <div style={{ textAlign: 'center' }} className="mad-men-card">
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                filter: 'grayscale(1) sepia(1) hue-rotate(15deg) saturate(2)'
              }}>
                📋
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 400,
                marginBottom: '1.5rem',
                color: 'var(--charcoal)',
                letterSpacing: '-0.01em'
              }}>
                Free Consultation
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                lineHeight: 1.7,
                fontSize: '1rem'
              }}>
                We'll discuss your needs, space, and budget to create a custom solution that works perfectly for you.
              </p>
            </div>

            <div style={{ textAlign: 'center' }} className="mad-men-card">
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                filter: 'grayscale(1) sepia(1) hue-rotate(15deg) saturate(2)'
              }}>
                💰
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 400,
                marginBottom: '1.5rem',
                color: 'var(--charcoal)',
                letterSpacing: '-0.01em'
              }}>
                Transparent Pricing
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                lineHeight: 1.7,
                fontSize: '1rem'
              }}>
                No hidden fees or surprises. You'll know exactly what you're paying for before we start any work.
              </p>
            </div>

            <div style={{ textAlign: 'center' }} className="mad-men-card">
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                filter: 'grayscale(1) sepia(1) hue-rotate(15deg) saturate(2)'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 400,
                marginBottom: '1.5rem',
                color: 'var(--charcoal)',
                letterSpacing: '-0.01em'
              }}>
                2-Year Warranty
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                lineHeight: 1.7,
                fontSize: '1rem'
              }}>
                All our installations come with a comprehensive 2-year warranty for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--white)'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.8rem',
            fontWeight: 400,
            marginBottom: '1.5rem',
            color: 'var(--charcoal)',
            letterSpacing: '-0.02em'
          }}>
            Serving Greater Houston
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            marginBottom: '4rem',
            maxWidth: 600,
            margin: '0 auto 4rem',
            lineHeight: 1.6
          }}>
            We proudly serve Harris, Fort Bend, Montgomery, and surrounding counties with professional AV installation services.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'left'
          }}>
            <div className="mad-men-list-card">
              <h4 style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 400, 
                marginBottom: '1rem', 
                color: 'var(--charcoal)',
                fontSize: '1.3rem',
                borderBottom: '2px solid var(--burnt-orange)',
                paddingBottom: '0.5rem'
              }}>Harris County</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Houston</li>
                <li style={{ marginBottom: '0.5rem' }}>• Sugar Land</li>
                <li style={{ marginBottom: '0.5rem' }}>• Katy</li>
                <li style={{ marginBottom: '0.5rem' }}>• Cypress</li>
                <li style={{ marginBottom: '0.5rem' }}>• Spring</li>
                <li style={{ marginBottom: '0.5rem' }}>• Tomball</li>
              </ul>
            </div>
            
            <div className="mad-men-list-card">
              <h4 style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 400, 
                marginBottom: '1rem', 
                color: 'var(--charcoal)',
                fontSize: '1.3rem',
                borderBottom: '2px solid var(--burnt-orange)',
                paddingBottom: '0.5rem'
              }}>Fort Bend County</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Richmond</li>
                <li style={{ marginBottom: '0.5rem' }}>• Rosenberg</li>
                <li style={{ marginBottom: '0.5rem' }}>• Missouri City</li>
                <li style={{ marginBottom: '0.5rem' }}>• Stafford</li>
                <li style={{ marginBottom: '0.5rem' }}>• Pearland</li>
              </ul>
            </div>
            
            <div className="mad-men-list-card">
              <h4 style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 400, 
                marginBottom: '1rem', 
                color: 'var(--charcoal)',
                fontSize: '1.3rem',
                borderBottom: '2px solid var(--burnt-orange)',
                paddingBottom: '0.5rem'
              }}>Montgomery County</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• The Woodlands</li>
                <li style={{ marginBottom: '0.5rem' }}>• Conroe</li>
                <li style={{ marginBottom: '0.5rem' }}>• Montgomery</li>
                <li style={{ marginBottom: '0.5rem' }}>• Magnolia</li>
                <li style={{ marginBottom: '0.5rem' }}>• Willis</li>
              </ul>
            </div>
            
            <div className="mad-men-list-card">
              <h4 style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 400, 
                marginBottom: '1rem', 
                color: 'var(--charcoal)',
                fontSize: '1.3rem',
                borderBottom: '2px solid var(--burnt-orange)',
                paddingBottom: '0.5rem'
              }}>Other Areas</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-light)' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Galveston County</li>
                <li style={{ marginBottom: '0.5rem' }}>• Liberty County</li>
                <li style={{ marginBottom: '0.5rem' }}>• Waller County</li>
                <li style={{ marginBottom: '0.5rem' }}>• Brazoria County</li>
              </ul>
            </div>
          </div>
          
          <div className="mad-men-quote-box" style={{
            marginTop: '4rem',
            padding: '2.5rem',
            background: 'var(--light-cream)',
            borderRadius: '4px',
            border: '1px solid var(--light-gray)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '2rem',
              width: '4rem',
              height: '2px',
              background: 'var(--burnt-orange)'
            }}></div>
            <p style={{ 
              margin: 0, 
              color: 'var(--text-light)',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'var(--charcoal)' }}>Don't see your area?</strong> We may still be able to help! 
              Contact us to discuss service availability in your location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
