'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Analytics() {
  const GA_MEASUREMENT_ID = 'G-GGX6C8MQBL'; // Your GA4 Measurement ID
  const pathname = usePathname();

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [pathname]);

  // Track custom events
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track resume downloads/views
      const trackResumeClick = () => {
        if (window.gtag) {
          window.gtag('event', 'resume_view', {
            event_category: 'engagement',
            event_label: 'resume_pdf',
            value: 1
          });
        }
      };

      // Track contact form submissions
      const trackContactSubmit = () => {
        if (window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'contact_form',
            value: 1
          });
        }
      };

      // Track project clicks
      const trackProjectClick = (projectName: string) => {
        if (window.gtag) {
          window.gtag('event', 'project_click', {
            event_category: 'engagement',
            event_label: projectName,
            value: 1
          });
        }
      };

      // Track navigation clicks
      const trackNavigationClick = (section: string) => {
        if (window.gtag) {
          window.gtag('event', 'navigation_click', {
            event_category: 'navigation',
            event_label: section,
            value: 1
          });
        }
      };

      // Add event listeners
      document.addEventListener('resume-click', trackResumeClick);
      document.addEventListener('contact-submit', trackContactSubmit);
      document.addEventListener('project-click', (e: Event) => {
        const customEvent = e as CustomEvent<string>;
        trackProjectClick(customEvent.detail);
      });
      document.addEventListener('navigation-click', (e: Event) => {
        const customEvent = e as CustomEvent<string>;
        trackNavigationClick(customEvent.detail);
      });

      // Track performance metrics
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (perfData && window.gtag) {
              window.gtag('event', 'timing_complete', {
                name: 'load',
                value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
                event_category: 'performance'
              });
            }
          }, 1000);
        });
      }

      return () => {
        document.removeEventListener('resume-click', trackResumeClick);
        document.removeEventListener('contact-submit', trackContactSubmit);
        document.removeEventListener('project-click', (e: Event) => {
          const customEvent = e as CustomEvent<string>;
          trackProjectClick(customEvent.detail);
        });
        document.removeEventListener('navigation-click', (e: Event) => {
          const customEvent = e as CustomEvent<string>;
          trackNavigationClick(customEvent.detail);
        });
      };
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
} 