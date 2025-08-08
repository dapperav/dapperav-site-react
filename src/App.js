import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Testimonial from './components/Testimonial';
import HowItWorksStep from './components/HowItWorksStep';

const features = [
  { icon: '📺', title: 'Custom Mounting', description: 'Flawless TV installs on any surface.' },
  { icon: '🔊', title: 'Whole Home Audio', description: 'Seamless multi-room sound systems.' },
  { icon: '🌐', title: 'Smart Networks', description: 'Robust Wi-Fi and wired networking.' },
  { icon: '🏢', title: 'Commercial AV', description: 'Reliable, scalable business installs.' },
];

const testimonials = [
  { quote: 'Dapper AV transformed my living room. 5 stars!', author: 'Sarah J.' },
  { quote: 'Professional and quick install with great results.', author: 'Mike T.' },
  { quote: 'Highly recommend for commercial AV setups!', author: 'Linda K.' },
];

const howItWorks = [
  { number: 1, title: 'Consultation', text: 'We learn about your space and needs.' },
  { number: 2, title: 'Customized Plan', text: 'We tailor an AV solution just for you.' },
  { number: 3, title: 'Installation', text: 'We handle the install professionally.' },
  { number: 4, title: 'Enjoy', text: 'Sit back and enjoy your upgraded setup!' },
];

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div id="main-content" style={{ flex: 1 }}>
        <HeroSection backgroundImage="/header-bg.jpg">
          <div style={{ maxWidth: '700px', margin: '0 auto', paddingTop: '8rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Experience the Dapper AV Difference
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '2rem' }}>
              Professional, precise, and personal AV solutions for homes and businesses.
            </p>
            <a href="#contact" style={ctaButton}>Get a Free Quote</a>
          </div>
        </HeroSection>

        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Our Services</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </section>

        <section style={{ background: '#f9f9f9', padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>What Clients Say</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {testimonials.map((testimonial, i) => (
              <Testimonial key={i} {...testimonial} />
            ))}
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>How It Works</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {howItWorks.map((step, i) => (
              <HowItWorksStep key={i} {...step} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ctaButton = {
  backgroundColor: '#FFD700',
  color: '#000',
  padding: '0.75rem 1.5rem',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'background 0.3s ease',
};

export default App;
