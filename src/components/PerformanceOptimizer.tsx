'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Note: Preloading og-image and resume.pdf removed as they caused warnings
    // og-image.jpg is for OG tags (not displayed on page), resume.pdf is downloaded on click

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    // Performance monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            // Log performance metrics
            // Performance metrics tracked
            analytics.performance('dom_content_loaded', Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart));
            analytics.performance('load_complete', Math.round(perfData.loadEventEnd - perfData.loadEventStart));
            analytics.performance('first_paint', Math.round(perfData.responseEnd - perfData.fetchStart));
          }
        }, 1000);
      });
    }

    return () => {
      // Cleanup
      imageObserver.disconnect();
    };
  }, []);

  return null;
} 