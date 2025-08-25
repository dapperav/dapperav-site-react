import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    budget: '',
    message: '',
    address: '',
    source: 'website'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Listen for AI chat prefill data
  useEffect(() => {
    const handleChatPrefill = (event) => {
      const chatData = event.detail;
      console.log('Prefilling form with AI chat data:', chatData);
      
      setFormData(prevData => ({
        ...prevData,
        name: chatData.name || prevData.name,
        email: chatData.email || prevData.email,
        phone: chatData.phone || prevData.phone,
        service: chatData.service || prevData.service,
        timeline: chatData.timeline || prevData.timeline,
        budget: chatData.estimatedCost || chatData.budget || prevData.budget,
        message: chatData.details || prevData.message,
        address: chatData.address || prevData.address,
        source: 'ai_chat'
      }));

      // Smooth scroll to contact section
      setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    };

    window.addEventListener('chatPrefillForm', handleChatPrefill);
    return () => window.removeEventListener('chatPrefillForm', handleChatPrefill);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting contact form:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', service: '',
        timeline: '', budget: '', message: '', address: '', source: 'website'
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'TV Mounting & Installation',
    'Whole Home Audio', 
    'Smart Home Automation',
    'Home Theater Setup',
    'Network & Wi-Fi Setup',
    'Commercial AV Systems',
    'Consultation Only',
    'Other'
  ];

  return (
    <section id="contact" style={{
      padding: '4rem 1.5rem',
      background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 100%)',
      color: '#fff'
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Simplified Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 900,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #FFD700, #FFC300)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Get Started?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#ccc',
            maxWidth: 500,
            margin: '0 auto'
          }}>
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start' }}>
          
          {/* Streamlined Form */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '2rem',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,215,0,0.2)'
          }}>
            {submitStatus === 'success' && (
              <div style={{
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                color: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                ✅ Thanks! We'll contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                  placeholder="Your Name *"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                  placeholder="Email Address *"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                  placeholder="Phone Number *"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="">Service Needed</option>
                  {serviceOptions.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="">Timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">Within 1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="planning">Just planning</option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  style={inputStyle}
                >
                  <option value="">Budget Range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1500">$500 - $1,500</option>
                  <option value="1500-3000">$1,500 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                style={{ ...inputStyle, marginBottom: '1.5rem', resize: 'vertical' }}
                placeholder="Tell us about your project..."
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #FFD700, #FFC300)',
                  color: '#000',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? '⏳ Sending...' : '🚀 Get Free Quote'}
              </button>
            </form>
          </div>

          {/* Simplified Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Contact Info */}
            <div style={{
              background: 'rgba(255,215,0,0.1)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(255,215,0,0.3)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#FFD700'
              }}>
                Contact Us
              </h3>
              
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  📞 <strong>(713) 555-DAPPER</strong>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  ✉️ hello@dapperav.com
                </div>
                <div style={{ color: '#ccc' }}>
                  📍 Greater Houston Area
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#FFD700'
              }}>
                Why Choose Us?
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <div>✅ 500+ Successful Installs</div>
                <div>✅ 24-Hour Response</div>
                <div>✅ 2-Year Warranty</div>
                <div>✅ Transparent Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          section > div > div > div:first-child form > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'rgba(255,255,255,0.1)',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default ContactSection;
