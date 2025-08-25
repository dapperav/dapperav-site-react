// Performance Optimization Utilities
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';

// Lazy Loading Images Hook
export const useLazyLoading = (ref, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return { shouldLoad: isIntersecting, isLoaded, handleLoad };
};

// Debounce Hook for Search/Input Performance
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Performance Monitoring Hook
export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    interactionDelay: 0
  });

  useEffect(() => {
    // Measure page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime)
      }));
    });

    // Measure First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            renderTime: Math.round(entry.startTime)
          }));
        }
      });
    });
    observer.observe({ entryTypes: ['paint'] });

    return () => observer.disconnect();
  }, []);

  return metrics;
};

// Optimized Image Component
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciPjxzdG9wIHN0b3AtY29sb3I9IiNmNmY3ZjgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlZWVmZjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg=='
}) => {
  const imgRef = useRef(null);
  const { shouldLoad, isLoaded, handleLoad } = useLazyLoading(imgRef);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const imgStyle = {
    width: width || '100%',
    height: height || 'auto',
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0.7,
    ...(!isLoaded && { filter: 'blur(2px)' })
  };

  if (hasError) {
    return (
      <div 
        ref={imgRef}
        className={`image-placeholder ${className}`}
        style={{
          ...imgStyle,
          background: 'linear-gradient(135deg, #f6f7f8, #eef0f2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: '0.875rem'
        }}
      >
        Image not available
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={shouldLoad || priority ? src : placeholder}
      alt={alt}
      className={className}
      style={imgStyle}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
};

// Virtual Scrolling Component for Large Lists
export const VirtualizedList = ({ 
  items, 
  renderItem, 
  itemHeight = 100, 
  containerHeight = 400,
  overscan = 5 
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + overscan,
    items.length
  );
  
  const visibleItems = useMemo(() => 
    items.slice(Math.max(0, visibleStart - overscan), visibleEnd),
    [items, visibleStart, visibleEnd, overscan]
  );

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  return (
    <div
      style={{
        height: containerHeight,
        overflow: 'auto'
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <div
            key={item.id || visibleStart - overscan + index}
            style={{
              position: 'absolute',
              top: (visibleStart - overscan + index) * itemHeight,
              height: itemHeight,
              width: '100%'
            }}
          >
            {renderItem(item, visibleStart - overscan + index)}
          </div>
        ))}
      </div>
    </div>
  );
};

// Critical CSS Inliner (for above-the-fold content)
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical Mad Men Styles - Above the fold */
    :root {
      --color-primary: #1a1a1a;
      --color-accent: #d2691e;
      --color-light: #f8f6f0;
      --color-cream: #faf9f4;
      --font-display: 'Playfair Display', serif;
      --font-body: 'Inter', sans-serif;
      --text-5xl: clamp(2.5rem, 5vw, 4rem);
      --text-4xl: clamp(2rem, 4vw, 3rem);
      --text-3xl: clamp(1.5rem, 3vw, 2.25rem);
      --leading-tight: 1.25;
    }

    body {
      font-family: var(--font-body);
      color: var(--color-primary);
      background: var(--color-light);
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }

    .hero-section {
      background: linear-gradient(rgba(26, 26, 26, 0.7), rgba(210, 105, 30, 0.8));
      color: white;
      text-align: center;
      padding: 6rem 2rem 4rem;
      min-height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: var(--text-5xl);
      font-weight: 600;
      line-height: var(--leading-tight);
      margin-bottom: 1.5rem;
    }

    .btn-primary {
      background: var(--color-accent);
      color: white;
      padding: 1rem 2rem;
      border: none;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
    }

    .card-mad-men {
      background: white;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(26, 26, 26, 0.05);
      transition: transform 0.3s ease;
    }
  `;

  // Inject critical CSS into head
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = criticalCSS;
    document.head.appendChild(styleSheet);
  }
};

// Resource Preloading Utility
export const preloadResources = () => {
  const resources = [
    { href: '/header-bg.jpg', as: 'image', type: 'image/jpeg' },
    { href: '/header-bg2.jpg', as: 'image', type: 'image/jpeg' },
    { href: '/header-bg3.jpg', as: 'image', type: 'image/jpeg' },
    { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap', as: 'style' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', as: 'style' }
  ];

  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.as === 'style') link.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(link);
  });
};

// Service Worker Registration for Caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Performance Observer for Core Web Vitals
export const observeWebVitals = (callback) => {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Largest Contentful Paint
      if (entry.entryType === 'largest-contentful-paint') {
        callback('LCP', entry.startTime);
      }
      
      // First Input Delay
      if (entry.entryType === 'first-input') {
        callback('FID', entry.processingStart - entry.startTime);
      }
      
      // Cumulative Layout Shift
      if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
        callback('CLS', entry.value);
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  
  return () => observer.disconnect();
};

// Bundle Analyzer Report Generator
export const generatePerformanceReport = () => {
  const report = {
    timestamp: new Date().toISOString(),
    navigation: performance.getEntriesByType('navigation')[0],
    resources: performance.getEntriesByType('resource').map(resource => ({
      name: resource.name,
      size: resource.transferSize,
      duration: resource.duration,
      type: resource.initiatorType
    })),
    memory: performance.memory ? {
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit
    } : null,
    timing: {
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      load: performance.timing.loadEventEnd - performance.timing.navigationStart,
      firstByte: performance.timing.responseStart - performance.timing.navigationStart
    }
  };

  console.table('Performance Report', report);
  return report;
};

// Image Optimization Utility
export const optimizeImageSrc = (src, width = 800, quality = 80) => {
  // In a real implementation, this would integrate with an image CDN
  // For now, we'll return optimized parameters
  const params = new URLSearchParams({
    w: width,
    q: quality,
    f: 'auto', // Auto format selection
    fit: 'crop',
    auto: 'compress'
  });
  
  // If using a service like Cloudinary, ImageKit, or similar
  // return `${CDN_URL}/${src}?${params.toString()}`;
  
  return src; // Return original for now
};

// Cache Management
export const CacheManager = {
  set: (key, data, ttl = 3600000) => { // 1 hour default
    const item = {
      data,
      timestamp: Date.now(),
      ttl
    };
    try {
      localStorage.setItem(`dapperav_${key}`, JSON.stringify(item));
    } catch (e) {
      console.warn('Cache storage failed:', e);
    }
  },
  
  get: (key) => {
    try {
      const item = localStorage.getItem(`dapperav_${key}`);
      if (!item) return null;
      
      const { data, timestamp, ttl } = JSON.parse(item);
      
      if (Date.now() - timestamp > ttl) {
        localStorage.removeItem(`dapperav_${key}`);
        return null;
      }
      
      return data;
    } catch (e) {
      console.warn('Cache retrieval failed:', e);
      return null;
    }
  },
  
  clear: () => {
    Object.keys(localStorage)
      .filter(key => key.startsWith('dapperav_'))
      .forEach(key => localStorage.removeItem(key));
  }
};

// Performance-focused Animation Controller
export const useOptimizedAnimation = (threshold = 0.5) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return {
    elementRef,
    shouldAnimate: isVisible && !prefersReducedMotion,
    isVisible,
    prefersReducedMotion
  };
};

export default {
  useLazyLoading,
  useDebounce,
  usePerformanceMetrics,
  OptimizedImage,
  VirtualizedList,
  inlineCriticalCSS,
  preloadResources,
  registerServiceWorker,
  observeWebVitals,
  generatePerformanceReport,
  optimizeImageSrc,
  CacheManager,
  useOptimizedAnimation
};
