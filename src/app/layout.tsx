import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';

const inter = Inter({ subsets: ['latin'] });

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khilan Sakariya",
  "jobTitle": "Professional Gujarati Translator & Linguistic Expert",
  "description": "Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors. Expert in document translation, Proofreading/Editing, MTPE (Machine Translation Post-Editing), LQA testing, and certified translation services.",
  "url": "https://khilansakariya.github.io",
  "image": "https://khilansakariya.github.io/og-image.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/khilan005/",
    "https://twitter.com/khilan005",
    "https://www.instagram.com/khilan.sk"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1702,
    "longitude": 72.8311
  },
  "knowsLanguage": ["en", "gu", "hi"],
  "knowsAbout": [
    "Gujarati Translation",
    "English to Gujarati",
    "Gujarati to English",
    "EN > GU",
    "EN > IN-GU",
    "EN-GU Translation",
    "EN-IN-GU Translation",
    "Translation Services",
    "Linguistic Services",
    "Language Consulting",
    "Proofreading",
    "Editing",
    "Proofreading/Editing",
    "MTPE",
    "Machine Translation Post-Editing",
    "Post-Editing",
    "AI Translation Editing",
    "Machine Translation Review",
    "Translation Quality Control",
    "LQA Testing",
    "Document Translation",
    "Medical Translation",
    "Healthcare Translation",
    "Pharmaceutical Translation",
    "Clinical Trial Translation",
    "Medical Document Translation",
    "Academic Translation",
    "Educational Translation",
    "Research Paper Translation",
    "Thesis Translation",
    "University Translation",
    "Legal Translation",
    "Legal Document Translation",
    "Contract Translation",
    "Court Document Translation",
    "Business Translation",
    "Corporate Translation",
    "Marketing Translation",
    "Technical Translation",
    "Technical Document Translation",
    "Software Translation",
    "IT Translation",
    "Financial Translation",
    "Banking Translation",
    "Insurance Translation",
    "Real Estate Translation",
    "Tourism Translation",
    "Travel Translation",
    "Manufacturing Translation",
    "Industrial Translation",
    "Government Translation",
    "Official Document Translation",
    "Certified Translation",
    "Notarized Translation",
    "Website Localization",
    "Cross-cultural Translation",
    "Cultural Adaptation",
    "Translation Quality Assurance",
    "Translation Review",
    "Translation Editing",
    "Translation Validation",
    "Translation Certification",
    "Regulatory Translation",
    "Compliance Translation",
    "Indic Language Translation",
    "Indian Language Services"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Professional Gujarati Translator",
    "description": "Specializing in English to Gujarati translation services and linguistic consulting"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance Gujarati Translator",
    "description": "Professional Gujarati translation and linguistic services"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "khilansakariya123@yahoo.com",
    "availableLanguage": ["English", "Gujarati", "Hindi"]
  },
  "serviceType": [
    "Gujarati Translation",
    "English to Gujarati Translation",
    "EN > GU Translation",
    "EN > IN-GU Translation",
    "Linguistic Consulting",
    "Document Translation",
    "Medical Translation",
    "Healthcare Translation",
    "Academic Translation",
    "Educational Translation",
    "Legal Translation",
    "Business Translation",
    "Corporate Translation",
    "Technical Translation",
    "Financial Translation",
    "Banking Translation",
    "Insurance Translation",
    "Real Estate Translation",
    "Tourism Translation",
    "Manufacturing Translation",
    "Government Translation",
    "Certified Translation",
    "Notarized Translation",
    "Website Localization",
    "Proofreading Services",
    "Editing Services",
    "Proofreading/Editing Services",
    "MTPE Services",
    "Machine Translation Post-Editing Services",
    "Post-Editing Services",
    "AI Translation Editing Services",
    "Machine Translation Review Services",
    "Translation Quality Control Services",
    "LQA Testing",
    "Translation Review",
    "Translation Editing",
    "Translation Validation",
    "Translation Certification"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "availableLanguage": ["English", "Gujarati", "Hindi"]
};

export const metadata: Metadata = {
  title: {
    default: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    template: '%s | Khilan Sakariya - Gujarati Translator'
  },
  description: 'Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors. Expert in document translation, Proofreading/Editing, MTPE (Machine Translation Post-Editing), LQA testing, and certified translation services.',
  keywords: [
    'Khilan Sakariya',
    'Gujarati translator',
    'Gujarati translation',
    'English to Gujarati',
    'Gujarati to English',
    'EN > GU',
    'EN > IN-GU',
    'EN-GU translation',
    'EN-IN-GU translation',
    'professional translator',
    'translation services',
    'linguistic expert',
    'linguistic services',
    'language consultant',
    'Gujarati linguistic',
    'Indian translator',
    'Indic language translator',
    'Gujarat translator',
    'Surat translator',
    'proofreading',
    'editing',
    'proofreading/editing',
    'MTPE',
    'Machine Translation Post-Editing',
    'post-editing',
    'machine translation editing',
    'AI translation editing',
    'translation post-editing',
    'LQA testing',
    'linguistic services',
    'document translation',
    'medical translation',
    'healthcare translation',
    'pharmaceutical translation',
    'clinical trial translation',
    'medical document translation',
    'healthcare document translation',
    'medical report translation',
    'patient information translation',
    'medical device translation',
    'academic translation',
    'educational translation',
    'university translation',
    'research paper translation',
    'thesis translation',
    'dissertation translation',
    'academic document translation',
    'educational content translation',
    'legal translation',
    'legal document translation',
    'contract translation',
    'legal agreement translation',
    'court document translation',
    'legal certificate translation',
    'business translation',
    'corporate translation',
    'business document translation',
    'marketing translation',
    'website translation',
    'technical translation',
    'technical document translation',
    'manual translation',
    'instruction translation',
    'software translation',
    'IT translation',
    'technology translation',
    'financial translation',
    'banking translation',
    'financial document translation',
    'banking document translation',
    'insurance translation',
    'insurance document translation',
    'real estate translation',
    'property translation',
    'real estate document translation',
    'tourism translation',
    'travel translation',
    'hospitality translation',
    'tourism document translation',
    'travel guide translation',
    'manufacturing translation',
    'industrial translation',
    'manufacturing document translation',
    'quality assurance translation',
    'certification translation',
    'certificate translation',
    'government translation',
    'official document translation',
    'government document translation',
    'certified translation',
    'notarized translation',
    'official translation',
    'website localization',
    'translation expert',
    'certified translator',
    'India translator',
    'Gujarati language expert',
    'translation consultant',
    'language services',
    'Gujarati interpreter',
    'translation agency',
    'professional translation',
    'industry translation',
    'Gujarati linguistic expert',
    'language translation services',
    'Gujarati document translation',
    'translation specialist',
    'Gujarati language consultant',
    'EN to GU translator',
    'EN to IN-GU translator',
    'English Gujarati translation',
    'English Indian Gujarati translation',
    'multilingual translation',
    'cross-cultural translation',
    'cultural adaptation',
    'localization services',
    'translation quality assurance',
    'translation review',
    'translation editing',
    'translation proofreading',
    'translation validation',
    'translation certification',
    'MTPE services',
    'Machine Translation Post-Editing services',
    'AI translation post-editing',
    'machine translation review',
    'AI translation review',
    'translation post-editing services',
    'machine translation editing services',
    'AI translation editing services',
    'translation quality control',
    'translation revision',
    'translation refinement',
    'translation improvement',
    'translation enhancement',
    'translation optimization',
    'translation compliance',
    'regulatory translation',
    'compliance translation',
    'audit translation',
    'report translation',
    'presentation translation',
    'brochure translation',
    'catalog translation',
    'manual translation',
    'guide translation',
    'instruction manual translation',
    'user manual translation',
    'product description translation',
    'service description translation',
    'company profile translation',
    'corporate communication translation',
    'internal communication translation',
    'external communication translation',
    'press release translation',
    'newsletter translation',
    'blog translation',
    'content translation',
    'digital content translation',
    'online content translation',
    'web content translation',
    'social media translation',
    'advertising translation',
    'marketing material translation',
    'promotional material translation',
    'brand translation',
    'branding translation',
    'logo translation',
    'slogan translation',
    'tagline translation'
  ],
  authors: [{ name: 'Khilan Sakariya', url: 'https://khilansakariya.github.io' }],
  creator: 'Khilan Sakariya',
  publisher: 'Khilan Sakariya',
  category: 'Professional Services',
  classification: 'Translation Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://khilansakariya.github.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'gu-IN': '/',
    },
  },
  openGraph: {
    title: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    description: 'Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors. Expert in document translation, Proofreading/Editing, MTPE (Machine Translation Post-Editing), LQA testing, and certified translation services.',
    url: 'https://khilansakariya.github.io',
    siteName: 'Khilan Sakariya - Gujarati Translator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    description: 'Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors. Expert in document translation, Proofreading/Editing, MTPE (Machine Translation Post-Editing), LQA testing, and certified translation services.',
    images: ['/og-image.jpg'],
    creator: '@khilan005',
    site: '@khilan005',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Surat, Gujarat, India',
    'geo.position': '21.1702;72.8311',
    'ICBM': '21.1702, 72.8311',
    'DC.title': 'Khilan Sakariya - Professional Gujarati Translator',
    'DC.creator': 'Khilan Sakariya',
    'DC.subject': 'Gujarati Translation Services, English to Gujarati, Linguistic Expert',
    'DC.description': 'Professional Gujarati translator and linguistic expert specializing in English to Gujarati translation services.',
    'DC.publisher': 'Khilan Sakariya',
    'DC.contributor': 'Khilan Sakariya',
    'DC.date': new Date().toISOString(),
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://khilansakariya.github.io',
    'DC.language': 'en',
    'DC.coverage': 'Surat, Gujarat, India',
    'DC.rights': 'Copyright © 2024 Khilan Sakariya',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Khilan Sakariya" />
        <meta name="copyright" content="Copyright © 2024 Khilan Sakariya" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Gujarati Translation SEO Meta Tags */}
        <meta name="keywords" content="Gujarati translator, English to Gujarati, EN > GU, EN > IN-GU, EN-GU translation, EN-IN-GU translation, Gujarati translation, translation services, medical translation, healthcare translation, academic translation, legal translation, business translation, technical translation, financial translation, banking translation, insurance translation, real estate translation, tourism translation, manufacturing translation, government translation, certified translation, proofreading/editing, MTPE, Machine Translation Post-Editing, AI translation editing, linguistic expert, language consultant, Khilan Sakariya, Surat translator, Gujarat translator, Indian translator, Indic language translator" />
        <meta name="subject" content="Gujarati Translation Services" />
        <meta name="classification" content="Translation Services" />
        <meta name="category" content="Professional Services" />
        <meta name="audience" content="Businesses, Individuals, Organizations needing Gujarati translation" />
        <meta name="target" content="Global audience seeking Gujarati translation services" />
        
        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat, India" />
        <meta name="geo.position" content="21.1702;72.8311" />
        <meta name="ICBM" content="21.1702, 72.8311" />
        <meta name="location" content="Surat, Gujarat, India" />
        <meta name="region" content="Gujarat" />
        <meta name="country" content="India" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-navy-900 text-white antialiased`}>
        {children}
        <Analytics />
        <PerformanceOptimizer />
      </body>
    </html>
  );
} 