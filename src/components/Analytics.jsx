import { useEffect } from 'react';

// Simple analytics tracking component
const Analytics = () => {
  useEffect(() => {
    // Track page view
    console.log('[Analytics] Page view:', window.location.pathname);
    
    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 25 && maxScroll < 50) {
          console.log('[Analytics] 25% scroll depth reached');
        } else if (maxScroll >= 50 && maxScroll < 75) {
          console.log('[Analytics] 50% scroll depth reached');
        } else if (maxScroll >= 75) {
          console.log('[Analytics] 75% scroll depth reached');
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 0 && timeSpent % 30 === 0) { // Every 30 seconds
        console.log(`[Analytics] Time on page: ${timeSpent} seconds`);
      }
    };

    // Track clicks on important elements
    const trackImportantClicks = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const text = target.textContent?.trim();
        const href = target.href;
        if (text && (text.includes('Contact') || text.includes('Quote') || text.includes('Call'))) {
          console.log('[Analytics] Important CTA clicked:', text, href || 'button');
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
    const timeInterval = setInterval(trackTimeOnPage, 5000);
    document.addEventListener('click', trackImportantClicks);

    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
      document.removeEventListener('click', trackImportantClicks);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
