import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AnimatedStatsSection from '../components/AnimatedStatsSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section aria-label="Hero">
        <HeroSection backgroundImage="/header-bg.jpg">
          <div style={heroInner}>
            <div style={heroOverlay} />
            <div>
              <h1 className="hero-title elegant-float" style={heroTitle}>
                Experience the <span className="mad-men-signature">Dapper AV</span> Difference
              </h1>
            </div>
            <div>
              <p className="sophisticated-reveal" style={heroSubtitle}>
                Professional, precise, and personal AV solutions for homes and businesses.
              </p>
            </div>
            <div className="vintage-slide-in animate-delay-300">
              <div className="btn-group">
                <Link to="/contact" className="btn btn-primary btn-large">Get a Free Quote</Link>
                <Link to="/services" className="btn btn-ghost btn-large">View Our Services</Link>
              </div>
            </div>

            {/* Geometric accent */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'var(--color-accent)',
              zIndex: 2
            }}></div>
          </div>
        </HeroSection>
      </section>

      {/* Geometric Divider */}
      <div className="section-divider-geometric">
        <div className="divider-icon"></div>
      </div>

      {/* Quick Services Overview */}
      <section className="section-mad-men animate-fade-in-up art-deco-border" style={{ 
        background: 'var(--color-primary)',
        color: '#fff',
        padding: '6rem 2rem',
        position: 'relative'
      }}>
        {/* Decorative geometric elements */}
        <div style={{
          position: 'absolute',
          top: '3rem',
          left: '10%',
          width: '40px',
          height: '40px',
          border: '2px solid var(--burnt-orange)',
          opacity: 0.3,
          transform: 'rotate(45deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          right: '15%',
          width: '60px',
          height: '60px',
          border: '1px solid var(--burnt-orange)',
          opacity: 0.2,
          borderRadius: '50%'
        }}></div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="content-block text-center animate-delay-100" style={{ marginBottom: '4rem' }}>
            <div className="deco-accent">
              <h2 className="section-title headline-shadow text-shimmer" style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-4xl)', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                color: '#fff',
                letterSpacing: '-0.025em'
              }}>
                What We Do Best
              </h2>
            </div>
            <div className="pull-quote animate-delay-200" style={{
              color: 'var(--burnt-orange)',
              fontSize: '1.3rem',
              margin: '2rem 0'
            }}>
              "Precision meets artistry in every installation"
            </div>
            <p className="section-subtitle animate-delay-300" style={{ 
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)', 
              color: 'rgba(255,255,255,0.8)', 
              lineHeight: 'var(--leading-relaxed)'
            }}>
              <span className="drop-cap" style={{ color: 'var(--burnt-orange)' }}>F</span>rom TV mounting to whole-home automation, we deliver professional AV solutions that seamlessly blend with your lifestyle and elevate your space.
            </p>
          </div>
          
          <div className="grid-mad-men grid-3">
            <div className="service-card-premium animate-fade-in-left animate-delay-100" style={{ 
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              color: '#fff'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>📺</div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)', 
                fontWeight: 600, 
                marginBottom: '1rem',
                color: '#fff'
              }}>TV Mounting</h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-normal)'
              }}>Professional mounting with invisible cable management</p>
            </div>
            <div className="service-card-premium animate-fade-in-up animate-delay-200" style={{ 
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              color: '#fff'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>🔊</div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)', 
                fontWeight: 600, 
                marginBottom: '1rem',
                color: '#fff'
              }}>Whole Home Audio</h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-normal)'
              }}>Seamless multi-room sound throughout your space</p>
            </div>
            <div className="service-card-premium animate-fade-in-right animate-delay-300" style={{ 
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              color: '#fff'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>🌐</div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)', 
                fontWeight: 600, 
                marginBottom: '1rem',
                color: '#fff'
              }}>Smart Networks</h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-normal)'
              }}>Rock-solid Wi-Fi and wired infrastructure</p>
            </div>
          </div>

          <div className="mad-men-divider" style={{ margin: '4rem 0' }}>
            <div className="mad-men-divider-icon">✦</div>
          </div>

          <div className="text-center">
            <Link to="/services" className="btn btn-primary btn-large underline-effect">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="section-divider"></div>

      {/* Stats Section */}
      <section className="section-mad-men animate-fade-in-up mad-men-subtle-pattern art-deco-corners" style={{ 
        background: 'var(--color-cream)', 
        padding: '6rem 2rem',
        position: 'relative'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '5%',
          width: '100px',
          height: '2px',
          background: 'var(--color-accent)',
          opacity: 0.4
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '8%',
          width: '80px',
          height: '80px',
          border: '1px solid var(--color-accent)',
          opacity: 0.2,
          transform: 'rotate(45deg)'
        }}></div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="content-block text-center animate-delay-100" style={{ marginBottom: '4rem' }}>
            <div className="deco-accent">
              <h2 className="section-title headline-shadow text-shimmer" style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-4xl)', 
                fontWeight: 600, 
                marginBottom: '1.5rem',
                color: 'var(--color-primary)',
                letterSpacing: '-0.025em'
              }}>
                Trusted by Houston Homeowners
              </h2>
            </div>
            <div className="pull-quote animate-delay-200" style={{
              color: 'var(--color-accent)',
              fontSize: '1.2rem'
            }}>
              "Excellence isn't an accident—it's our standard"
            </div>
          </div>
          <div className="animate-delay-300">
            <AnimatedStatsSection compact={true} />
          </div>
        </div>
      </section>

      {/* Mad Men Philosophy Section */}
      <section className="art-deco-corners" style={{
        background: 'var(--gradient-cream)',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Sophisticated background elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          border: '1px solid var(--color-accent)',
          opacity: 0.05,
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '150px',
          height: '2px',
          background: 'var(--gradient-accent)',
          opacity: 0.3,
          transform: 'rotate(-15deg)'
        }}></div>

        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="animate-fade-in-up">
            <h2 className="typewriter-effect" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.2rem',
              fontWeight: 400,
              color: 'var(--color-primary)',
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              The Dapper Difference
            </h2>
            
            <div className="pull-quote animate-delay-200" style={{
              fontSize: '1.4rem',
              color: 'var(--color-accent)',
              margin: '3rem 0',
              fontStyle: 'italic'
            }}>
              "We don't just install technology—we craft experiences that enhance the way you live."
            </div>
            
            <div className="animate-delay-300" style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-light)',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                <span className="drop-cap" style={{ color: 'var(--color-accent)' }}>E</span>very project begins with understanding your vision. Our team of certified professionals brings together technical expertise and an eye for design, ensuring your AV installation is both functionally superior and aesthetically seamless.
              </p>
              <p>
                From the initial consultation to the final calibration, we handle every detail with the precision and care that has made us Houston's preferred AV specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mad Men Style */}
      <section className="mad-men-pattern" style={{
        padding: '6rem 2rem',
        background: 'var(--light-cream)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="section-header-vintage sophisticated-reveal">
            <h2 className="typewriter-effect">What Our Clients Say</h2>
            <p className="subtitle">
              Trusted by Houston's most discerning homeowners and businesses
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}>
            <div className="testimonial-vintage vintage-slide-in animate-delay-100">
              <div className="quote-text">
                The level of professionalism and attention to detail was exceptional. They transformed our living room into something straight out of Architectural Digest.
              </div>
              <div className="quote-author">
                <div className="author-photo" style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>JM</div>
                <div className="author-info">
                  <h4 className="mad-men-signature">James Mitchell</h4>
                  <p>River Oaks Residence</p>
                </div>
              </div>
            </div>

            <div className="testimonial-vintage vintage-slide-in animate-delay-200">
              <div className="quote-text">
                From consultation to completion, every step was handled with the precision you'd expect from true craftsmen. Our home theater is simply perfect.
              </div>
              <div className="quote-author">
                <div className="author-photo" style={{
                  background: 'linear-gradient(135deg, var(--color-navy), var(--color-accent))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>SC</div>
                <div className="author-info">
                  <h4 className="mad-men-signature">Sarah Chen</h4>
                  <p>Memorial Area Executive</p>
                </div>
              </div>
            </div>

            <div className="testimonial-vintage vintage-slide-in animate-delay-300" style={{ gridColumn: 'span 2' }}>
              <div className="quote-sophisticated">
                "In thirty years of business, I've never encountered such a perfect blend of technical expertise and aesthetic sensibility. They don't just install systems—they elevate spaces."
              </div>
              <div className="quote-author" style={{ justifyContent: 'center' }}>
                <div className="author-photo" style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-gold))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>DR</div>
                <div className="author-info">
                  <h4 className="mad-men-signature">David Rodriguez</h4>
                  <p>Interior Design Principal, Rodriguez & Associates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Section Transition */}
      <div className="section-transition" style={{ padding: '3rem 0' }}></div>

      {/* Quick CTA */}
      <section className="mad-men-pattern" style={{ 
        padding: '5rem 2rem', 
        background: 'var(--color-accent)',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Elegant floating elements */}
        <div className="elegant-float" style={{
          position: 'absolute',
          top: '2rem',
          right: '10%',
          width: '100px',
          height: '100px',
          border: '2px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          animationDelay: '0.5s'
        }}></div>
        <div className="elegant-float" style={{
          position: 'absolute',
          bottom: '3rem',
          left: '8%',
          width: '60px',
          height: '60px',
          border: '1px solid rgba(255,255,255,0.3)',
          transform: 'rotate(45deg)',
          animationDelay: '1s'
        }}></div>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="art-deco-border">
            <h2 className="section-title sophisticated-reveal" style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)', 
              fontWeight: 600, 
              color: '#fff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.025em'
            }}>
              Ready to Transform Your Space?
            </h2>
          </div>
          <p className="section-subtitle vintage-slide-in animate-delay-200" style={{ 
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)', 
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2.5rem',
            lineHeight: 'var(--leading-relaxed)'
          }}>
            Get a free consultation and see why over 500 Houston homeowners trust Dapper AV.
          </p>
          <div className="btn-group">
            <Link to="/calculator" className="btn btn-navy btn-large">Get Instant Quote</Link>
            <Link to="/portfolio" className="btn btn-secondary btn-large">See Our Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Styles
const heroInner = {
  position: 'relative',
  minHeight: '58vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6rem 1rem 4rem',
  textAlign: 'center',
};

const heroOverlay = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.75) 100%)',
  zIndex: 0,
};

const heroTitle = {
  position: 'relative', zIndex: 1,
  fontSize: 'clamp(1.8rem, 3.2vw + 1rem, 3rem)', 
  lineHeight: 1.12, 
  fontWeight: 900,
  color: '#FFD700', 
  textShadow: '0 4px 24px rgba(0,0,0,0.6)', 
  marginBottom: '.6rem',
};

const heroSubtitle = {
  position: 'relative', zIndex: 1, 
  fontSize: 'clamp(1rem, 1.1vw + .8rem, 1.2rem)',
  color: '#fff', 
  maxWidth: 820, 
  margin: '0 auto 1.4rem', 
  textShadow: '0 3px 16px rgba(0,0,0,0.55)',
};

const ctaButton = {
  position: 'relative', 
  zIndex: 1,
  backgroundColor: 'var(--color-accent)', 
  color: '#fff',
  padding: '1rem 2.5rem', 
  borderRadius: '2px', // Sharp Mad Men edges
  textDecoration: 'none', 
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  boxShadow: '0 8px 25px rgba(210, 105, 30, 0.25)', 
  transition: 'all 0.3s ease',
  border: 'none', 
  cursor: 'pointer', 
  fontSize: '1rem',
  display: 'inline-block'
};

const secondaryCta = {
  position: 'relative', 
  zIndex: 1,
  backgroundColor: 'transparent', 
  color: '#fff',
  padding: '1rem 2.5rem', 
  borderRadius: '2px', // Sharp Mad Men edges
  textDecoration: 'none', 
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  border: '2px solid rgba(255,255,255,0.8)', 
  cursor: 'pointer', 
  fontSize: '1rem',
  backdropFilter: 'blur(10px)', 
  transition: 'all 0.3s ease',
  display: 'inline-block'
};

const serviceCard = {
  background: 'rgba(255,255,255,0.05)',
  padding: '2rem 1.5rem',
  borderRadius: '15px',
  border: '1px solid rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  textAlign: 'center'
};

const primaryButton = {
  background: 'linear-gradient(135deg, #FFD700, #FFC300)',
  color: '#000',
  padding: '1rem 2rem',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.1rem',
  boxShadow: '0 10px 30px rgba(255,215,0,0.3)',
  transition: 'all 0.3s ease',
  display: 'inline-block'
};

export default HomePage;
