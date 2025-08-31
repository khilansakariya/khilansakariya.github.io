// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA4 tracking ID

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Custom event tracking
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Translation service specific events
export const trackTranslationService = (service: string) => {
  event({
    action: 'translation_service_view',
    category: 'engagement',
    label: service,
    value: 1,
  })
}

export const trackResumeView = (source: string) => {
  event({
    action: 'resume_view',
    category: 'engagement',
    label: source,
    value: 1,
  })
}

export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'conversion',
    label: method,
    value: 1,
  })
}

export const trackProjectView = (projectName: string) => {
  event({
    action: 'project_view',
    category: 'engagement',
    label: projectName,
    value: 1,
  })
}

// SEO tracking events
export const trackSearchKeyword = (keyword: string) => {
  event({
    action: 'search_keyword',
    category: 'seo',
    label: keyword,
    value: 1,
  })
}

export const trackLanguageCode = (code: string) => {
  event({
    action: 'language_code_view',
    category: 'seo',
    label: code,
    value: 1,
  })
}

// Performance tracking
export const trackPageLoadTime = (loadTime: number) => {
  event({
    action: 'page_load_time',
    category: 'performance',
    label: 'load_time',
    value: Math.round(loadTime),
  })
}

// User engagement tracking
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  })
}

export const trackTimeOnPage = (timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: 'time_spent',
    value: timeInSeconds,
  })
}

// Conversion tracking
export const trackQuoteRequest = (service: string) => {
  event({
    action: 'quote_request',
    category: 'conversion',
    label: service,
    value: 1,
  })
}

export const trackServiceInquiry = (service: string) => {
  event({
    action: 'service_inquiry',
    category: 'conversion',
    label: service,
    value: 1,
  })
}

// Enhanced ecommerce tracking for translation services
export const trackServiceView = (service: string, industry: string) => {
  event({
    action: 'service_view',
    category: 'ecommerce',
    label: `${service}_${industry}`,
    value: 1,
  })
}

export const trackServiceClick = (service: string, industry: string) => {
  event({
    action: 'service_click',
    category: 'ecommerce',
    label: `${service}_${industry}`,
    value: 1,
  })
}

// Social media tracking
export const trackSocialShare = (platform: string, content: string) => {
  event({
    action: 'social_share',
    category: 'social',
    label: `${platform}_${content}`,
    value: 1,
  })
}

export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_click',
    category: 'social',
    label: platform,
    value: 1,
  })
}

// Error tracking
export const trackError = (error: string, page: string) => {
  event({
    action: 'error',
    category: 'error',
    label: `${error}_${page}`,
    value: 1,
  })
}

// Custom dimensions for better analytics
export const setCustomDimensions = (dimensions: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    Object.entries(dimensions).forEach(([key, value]) => {
      window.gtag('config', GA_TRACKING_ID, {
        custom_map: { [key]: value },
      })
    })
  }
}

// Enhanced conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  event({
    action: 'conversion',
    category: 'conversion',
    label: conversionType,
    value: value || 1,
  })
}

// User behavior tracking
export const trackUserBehavior = (behavior: string, details?: string) => {
  event({
    action: 'user_behavior',
    category: 'behavior',
    label: details ? `${behavior}_${details}` : behavior,
    value: 1,
  })
} 