import React from 'react';
import PortfolioGallery from '../components/PortfolioGallery';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page" style={{ padding: '2rem 0', minHeight: '100vh' }}>
      {/* Page Header */}
      <section className="page-hero mad-men-subtle-pattern" style={{
        padding: '4rem 2rem 3rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 className="text-shimmer sophisticated-reveal" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em'
          }}>
            Our Portfolio
          </h1>
          <p className="vintage-slide-in" style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-muted)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: '2rem'
          }}>
            Discover how we've transformed Houston homes and businesses with premium audio-visual solutions. 
            Each project showcases our commitment to excellence, attention to detail, and innovative design.
          </p>
          
          <div className="stats-row elegant-float" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <div className="stat-item">
              <div style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'bold',
                color: 'var(--color-accent)',
                marginBottom: '0.5rem'
              }}>500+</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Projects Completed</div>
            </div>
            
            <div className="stat-item">
              <div style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'bold',
                color: 'var(--color-accent)',
                marginBottom: '0.5rem'
              }}>$2.5M+</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Total Project Value</div>
            </div>
            
            <div className="stat-item">
              <div style={{
                fontSize: 'var(--text-3xl)',
                fontWeight: 'bold',
                color: 'var(--color-accent)',
                marginBottom: '0.5rem'
              }}>98%</div>
              <div style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <PortfolioGallery />
        </div>
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta mad-men-pattern" style={{
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
            Ready for Your Own Transformation?
          </h2>
          <p className="vintage-slide-in" style={{
            fontSize: 'var(--text-lg)',
            marginBottom: '2.5rem',
            opacity: 0.9
          }}>
            Join hundreds of satisfied Houston homeowners who have elevated their spaces with Dapper AV.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/calculator" className="btn elegant-float" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'white',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Get Instant Quote
            </a>
            <a href="/contact" className="btn elegant-float" style={{
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
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
