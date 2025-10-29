import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://khilansakariya.github.io'
  const currentDate = new Date()
  
  return [
    // Homepage - highest priority (trailing slash is standard for root)
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Archive page (trailing slash because trailingSlash: true in next.config.js)
    {
      url: `${baseUrl}/archive/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Resume PDF document (no trailing slash for files)
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
} 