// Centralized analytics utility
export const analytics = {
  // Page view tracking
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_location: url,
      });
    }
  },

  // Event tracking
  event: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },

  // Predefined events
  resumeView: (source: string) => {
    analytics.event('resume_view', 'engagement', source, 1);
  },

  contactSubmit: (method: string) => {
    analytics.event('contact_form_submit', 'conversion', method, 1);
  },

  projectView: (projectName: string) => {
    analytics.event('project_view', 'engagement', projectName, 1);
  },

  navigationClick: (section: string) => {
    analytics.event('navigation_click', 'navigation', section, 1);
  },

  serviceView: (service: string) => {
    analytics.event('service_view', 'engagement', service, 1);
  },

  // Performance tracking
  performance: (metric: string, value: number) => {
    analytics.event('performance', 'timing', metric, value);
  },

  // Error tracking
  error: (error: string, page: string) => {
    analytics.event('error', 'error', `${error}_${page}`, 1);
  }
};

// Custom hook for analytics
export const useAnalytics = () => {
  return {
    track: analytics.event,
    resumeView: analytics.resumeView,
    contactSubmit: analytics.contactSubmit,
    projectView: analytics.projectView,
    navigationClick: analytics.navigationClick,
    serviceView: analytics.serviceView,
    performance: analytics.performance,
    error: analytics.error
  };
}; 