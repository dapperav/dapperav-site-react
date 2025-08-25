import React from 'react';

const Footer = () => (
  <footer style={{ background: '#0a0a0a', color: '#bbb', padding: '2rem 1rem' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: '1.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      <div>
        <h4 style={{ color: '#FFD700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>⚡</span>
          Dapper AV
        </h4>
        <p style={{ margin: '0 0 0.5rem 0' }}>Professional AV Installations</p>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.8 }}>Houston, TX & Surrounding Areas</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href="https://instagram.com/dapperav" target="_blank" rel="noreferrer" 
             style={{ color: '#FFD700', textDecoration: 'none', fontSize: '1.3rem', 
                      transition: 'transform 0.2s ease', display: 'inline-block' }}
             onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            📸
          </a>
          <a href="https://facebook.com/dapperav" target="_blank" rel="noreferrer" 
             style={{ color: '#FFD700', textDecoration: 'none', fontSize: '1.3rem',
                      transition: 'transform 0.2s ease', display: 'inline-block' }}
             onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            📘
          </a>
          <a href="https://linkedin.com/company/dapperav" target="_blank" rel="noreferrer" 
             style={{ color: '#FFD700', textDecoration: 'none', fontSize: '1.3rem',
                      transition: 'transform 0.2s ease', display: 'inline-block' }}
             onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
             onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            💼
          </a>
        </div>
      </div>
      <div>
        <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>Contact</h4>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          <a href="mailto:contact@dapperav.com" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📧</span> contact@dapperav.com
          </a>
        </p>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          <a href="tel:+19728241303" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📱</span> +1 (972) 824‑1303
          </a>
        </p>
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.7 }}>
          <span style={{ marginRight: '0.5rem' }}>🕒</span>
          Mon-Fri 8am-6pm | Emergency service available
        </p>
      </div>
      <div>
        <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>Services</h4>
        <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.9rem' }}>• TV Mounting & Setup</p>
        <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.9rem' }}>• Whole Home Audio</p>
        <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.9rem' }}>• Smart Home Networks</p>
        <p style={{ margin: '0 0 0.3rem 0', fontSize: '0.9rem' }}>• Commercial AV Systems</p>
        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#111', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#FFD700' }}>
            ⭐ Licensed & Insured
          </p>
          <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>
            Lifetime workmanship guarantee
          </p>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
      <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Dapper AV. All rights reserved. | 
        <span style={{ margin: '0 0.5rem' }}>Made with ⚡ in Texas</span>
      </p>
    </div>
  </footer>
);

export default Footer;
