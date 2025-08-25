import React, { useState } from 'react';

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Living Room Entertainment Center',
      category: 'living-room',
      image: '/header-bg.jpg',
      beforeImage: '/header-bg2.jpg',
      description: 'Complete home theater transformation with 75" display, surround sound, and smart lighting integration.',
      client: 'River Oaks Residence',
      value: '$15,000',
      features: ['4K Projection', 'Dolby Atmos', 'Smart Lighting', 'Climate Control']
    },
    {
      id: 2,
      title: 'Executive Home Office Setup',
      category: 'office',
      image: '/header-bg3.jpg',
      beforeImage: '/header-bg.jpg',
      description: 'Professional workspace with dual monitor setup, video conferencing, and automated blinds.',
      client: 'Memorial Area Executive',
      value: '$8,500',
      features: ['Dual 4K Monitors', 'Professional Audio', 'Video Conferencing', 'Automated Controls']
    },
    {
      id: 3,
      title: 'Luxury Master Bedroom Suite',
      category: 'bedroom',
      image: '/header-bg2.jpg',
      beforeImage: '/header-bg3.jpg',
      description: 'Bedroom sanctuary with motorized TV lift, ambient lighting, and climate control.',
      client: 'Galleria Area Penthouse',
      value: '$12,000',
      features: ['Motorized TV Lift', 'Ambient Lighting', 'Climate Integration', 'Voice Control']
    },
    {
      id: 4,
      title: 'Chef\'s Kitchen Display Center',
      category: 'kitchen',
      image: '/header-bg.jpg',
      beforeImage: '/header-bg2.jpg',
      description: 'Culinary workspace with integrated displays for recipes, entertainment, and smart home control.',
      client: 'West University Home',
      value: '$6,500',
      features: ['Recipe Display', 'Music Integration', 'Smart Controls', 'Under-Cabinet Lighting']
    },
    {
      id: 5,
      title: 'Outdoor Entertainment Oasis',
      category: 'outdoor',
      image: '/header-bg3.jpg',
      beforeImage: '/header-bg.jpg',
      description: 'Weather-resistant outdoor theater with premium audio and landscape lighting.',
      client: 'Memorial Area Pool House',
      value: '$18,000',
      features: ['Weather-Resistant Display', 'Outdoor Audio', 'Landscape Lighting', 'Pool Integration']
    },
    {
      id: 6,
      title: 'Corporate Boardroom Transformation',
      category: 'commercial',
      image: '/header-bg2.jpg',
      beforeImage: '/header-bg3.jpg',
      description: 'Professional presentation space with 4K displays, video conferencing, and wireless presentation.',
      client: 'Downtown Corporate Office',
      value: '$25,000',
      features: ['4K Video Wall', 'Wireless Presentation', 'Video Conferencing', 'Room Automation']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: portfolioItems.length },
    { id: 'living-room', name: 'Living Rooms', count: portfolioItems.filter(item => item.category === 'living-room').length },
    { id: 'office', name: 'Home Offices', count: portfolioItems.filter(item => item.category === 'office').length },
    { id: 'bedroom', name: 'Bedrooms', count: portfolioItems.filter(item => item.category === 'bedroom').length },
    { id: 'kitchen', name: 'Kitchens', count: portfolioItems.filter(item => item.category === 'kitchen').length },
    { id: 'outdoor', name: 'Outdoor Spaces', count: portfolioItems.filter(item => item.category === 'outdoor').length },
    { id: 'commercial', name: 'Commercial', count: portfolioItems.filter(item => item.category === 'commercial').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-gallery">
      {/* Portfolio Header */}
      <div className="portfolio-header section-header-vintage" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title text-shimmer typewriter-effect" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-4xl)',
          fontWeight: 600,
          color: 'var(--color-primary)',
          marginBottom: '1.5rem',
          letterSpacing: '-0.025em'
        }}>
          Our Signature Projects
        </h2>
        <p className="section-subtitle vintage-slide-in" style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-muted)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Transforming Houston homes and businesses with premium audio-visual solutions. 
          Each project reflects our commitment to excellence and attention to detail.
        </p>
      </div>

      {/* Category Filter */}
      <div className="portfolio-filters art-deco-border" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        padding: '2rem'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'var(--text-sm)',
              padding: '0.75rem 1.5rem',
              border: '2px solid var(--color-accent)',
              background: selectedCategory === category.id ? 'var(--color-accent)' : 'transparent',
              color: selectedCategory === category.id ? 'white' : 'var(--color-accent)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="portfolio-item card-mad-men vintage-frame"
            onClick={() => openLightbox(item)}
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
          >
            {/* Project Image */}
            <div className="portfolio-image" style={{
              position: 'relative',
              height: '280px',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div className="portfolio-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(210, 105, 30, 0.9), rgba(26, 26, 26, 0.8))',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 600
              }}>
                View Project Details
              </div>
            </div>

            {/* Project Info */}
            <div className="portfolio-info">
              <div className="project-value badge-mad-men" style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--color-accent)',
                color: 'white',
                padding: '0.5rem 1rem',
                fontSize: 'var(--text-sm)',
                fontWeight: 'bold'
              }}>
                {item.value}
              </div>

              <h3 className="mad-men-signature" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '0.5rem'
              }}>
                {item.title}
              </h3>

              <p className="project-client" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-accent)',
                fontWeight: 600,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {item.client}
              </p>

              <p className="project-description" style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: '1.5rem'
              }}>
                {item.description}
              </p>

              {/* Feature Tags */}
              <div className="feature-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {item.features.map((feature, index) => (
                  <span
                    key={index}
                    className="feature-tag"
                    style={{
                      fontSize: 'var(--text-xs)',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(210, 105, 30, 0.1)',
                      color: 'var(--color-accent)',
                      borderRadius: '20px',
                      fontWeight: 500
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="portfolio-lightbox" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeLightbox}
        >
          <div 
            className="lightbox-content card-mad-men"
            style={{
              maxWidth: '900px',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--color-accent)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.5rem',
                zIndex: 10
              }}
            >
              ×
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              {/* Before/After Images */}
              <div>
                <h4 style={{ 
                  fontFamily: 'var(--font-display)', 
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  Before & After
                </h4>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: 'var(--text-sm)', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Before</p>
                    <img src={selectedImage.beforeImage} alt="Before" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--text-sm)', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>After</p>
                    <img src={selectedImage.image} alt="After" style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="mad-men-signature" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  marginBottom: '1rem',
                  color: 'var(--color-primary)'
                }}>
                  {selectedImage.title}
                </h3>

                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--color-accent)', 
                    fontWeight: 600, 
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                  }}>
                    {selectedImage.client}
                  </p>
                  <p style={{ 
                    fontSize: 'var(--text-xl)', 
                    color: 'var(--color-accent)', 
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}>
                    Project Value: {selectedImage.value}
                  </p>
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                  color: 'var(--color-text)',
                  marginBottom: '2rem'
                }}>
                  {selectedImage.description}
                </p>

                <div>
                  <h4 style={{ 
                    fontFamily: 'var(--font-display)', 
                    marginBottom: '1rem',
                    color: 'var(--color-primary)'
                  }}>
                    Features & Technologies
                  </h4>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    {selectedImage.features.map((feature, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          background: 'var(--color-accent)',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{ fontSize: 'var(--text-base)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button className="btn btn-primary" style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    padding: '1rem 2rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 'var(--text-base)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Get A Similar Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        
        .portfolio-item:hover img {
          transform: scale(1.05);
        }
        
        .filter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(210, 105, 30, 0.3);
        }
        
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
          
          .lightbox-content > div {
            grid-template-columns: 1fr;
          }
          
          .portfolio-filters {
            padding: 1rem;
          }
          
          .filter-btn {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioGallery;
