import React, { useState } from 'react';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Living Room TV Mount",
      category: "tv-mounting",
      beforeImage: "/placeholder-before.jpg",
      afterImage: "/placeholder-after.jpg",
      description: "75\" Samsung QLED with hidden cable management",
      location: "Houston, TX",
      tags: ["TV Mount", "Cable Management", "Sound Bar"]
    },
    {
      id: 2,
      title: "Whole Home Sonos Installation",
      category: "audio",
      beforeImage: "/placeholder-before-2.jpg",
      afterImage: "/placeholder-after-2.jpg", 
      description: "6-zone Sonos system with in-ceiling speakers",
      location: "Katy, TX",
      tags: ["Sonos", "Multi-Zone", "In-Ceiling"]
    },
    {
      id: 3,
      title: "Sports Bar Commercial Install",
      category: "commercial",
      beforeImage: "/placeholder-before-3.jpg",
      afterImage: "/placeholder-after-3.jpg",
      description: "12 TV sports bar with distributed audio",
      location: "Downtown Houston",
      tags: ["Commercial", "Multiple TVs", "Audio Distribution"]
    },
    {
      id: 4,
      title: "Home Network Upgrade",
      category: "networking",
      beforeImage: "/placeholder-before-4.jpg", 
      afterImage: "/placeholder-after-4.jpg",
      description: "Wi-Fi 6E mesh network with enterprise APs",
      location: "Sugar Land, TX",
      tags: ["Wi-Fi 6E", "Mesh Network", "Enterprise Grade"]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: '📋' },
    { key: 'tv-mounting', label: 'TV Mounting', icon: '📺' },
    { key: 'audio', label: 'Audio Systems', icon: '🔊' },
    { key: 'networking', label: 'Networking', icon: '🌐' },
    { key: 'commercial', label: 'Commercial', icon: '🏢' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" style={{ 
      padding: '4rem 1.5rem', 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          fontSize: '2.2rem', 
          fontWeight: 900, 
          color: '#222' 
        }}>
          Our Work
        </h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '2.5rem', 
          color: '#666',
          maxWidth: 600,
          margin: '0 auto 2.5rem'
        }}>
          See the difference professional installation makes. Every project is completed with precision and care.
        </p>

        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: '25px',
                border: 'none',
                background: selectedCategory === cat.key ? '#FFD700' : '#f1f3f4',
                color: selectedCategory === cat.key ? '#000' : '#666',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                if (selectedCategory !== cat.key) {
                  e.target.style.background = '#e8f0fe';
                }
              }}
              onMouseOut={(e) => {
                if (selectedCategory !== cat.key) {
                  e.target.style.background = '#f1f3f4';
                }
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #FFD700, #FFC300)',
          borderRadius: '16px',
          color: '#000'
        }}>
          <h3 style={{ margin: '0 0 1rem', fontSize: '1.5rem', fontWeight: 900 }}>
            Ready to Transform Your Space?
          </h3>
          <p style={{ margin: '0 0 1.5rem', opacity: 0.8 }}>
            Let's discuss your project and create something amazing together.
          </p>
          <a 
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#000',
              color: '#FFD700',
              padding: '1rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 900,
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    }}>
      {/* Before/After Image Container */}
      <div style={{ 
        position: 'relative', 
        height: '240px',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      onClick={() => setShowAfter(!showAfter)}>
        {/* Placeholder for now - you'll replace with actual images */}
        <div style={{
          width: '100%',
          height: '100%',
          background: showAfter 
            ? 'linear-gradient(135deg, #4CAF50, #81C784)'
            : 'linear-gradient(135deg, #757575, #BDBDBD)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '1.2rem',
          fontWeight: 700,
          transition: 'all 0.3s ease'
        }}>
          {showAfter ? '✨ After' : '📷 Before'}
        </div>
        
        {/* Before/After Toggle */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 700
        }}>
          {showAfter ? 'AFTER' : 'BEFORE'} • Click to toggle
        </div>
      </div>

      {/* Project Info */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ 
          margin: '0 0 0.5rem', 
          fontSize: '1.3rem', 
          fontWeight: 900,
          color: '#222'
        }}>
          {project.title}
        </h3>
        <p style={{ 
          margin: '0 0 1rem', 
          color: '#666',
          lineHeight: 1.5
        }}>
          {project.description}
        </p>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '1rem',
          color: '#888',
          fontSize: '0.9rem'
        }}>
          <span>📍</span>
          {project.location}
        </div>
        
        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              background: '#f1f3f4',
              color: '#555',
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
