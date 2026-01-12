'use client';

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function SEO({
  title = 'Khilan Sakariya - Professional Gujarati Translator & Linguist',
  description = 'Professional Gujarati translator specializing in academic and industry content. Expert in translation, proofreading, LQA testing, and linguistic services. Based in Surat, Gujarat, India.',
  keywords = [
    'Khilan Sakariya',
    'Gujarati translator',
    'professional translator',
    'translation services',
    'Surat translator'
  ],
  image = '/og-image.jpg',
  url = 'https://khilansakariya.github.io',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Khilan Sakariya',
  section,
  tags = []
}: SEOProps) {
  const fullUrl = url.startsWith('http') ? url : `https://khilansakariya.github.io${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://khilansakariya.github.io${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Khilan Sakariya Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@khilan005" />
      <meta name="twitter:site" content="@khilan005" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat, Gujarat, India" />
      <meta name="geo.position" content="21.1702;72.8311" />
      <meta name="ICBM" content="21.1702, 72.8311" />
      
      {/* DC Metadata */}
      <meta name="DC.title" content={title} />
      <meta name="DC.description" content={description} />
      <meta name="DC.creator" content={author} />
      <meta name="DC.publisher" content="Khilan Sakariya" />
      <meta name="DC.date" content={new Date().toISOString()} />
      <meta name="DC.type" content="Text" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={fullUrl} />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Surat, Gujarat, India" />
      <meta name="DC.rights" content="Copyright © 2024 Khilan Sakariya" />
    </Head>
  );
} 