import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Khilan Sakariya - Gujarati Translator",
  "image": "https://khilansakariya.github.io/og-image.jpg",
  "url": "https://khilansakariya.github.io",
  "telephone": "", // Add if public
  "priceRange": "$$",
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
  "sameAs": [
    "https://www.linkedin.com/in/khilan005/",
    "https://twitter.com/khilan005",
    "https://www.instagram.com/khilan.sk",
    "http://www.proz.com/profile/3562571"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Translation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "English to Gujarati Translation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medical Translation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Legal Translation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Localization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LQA Testing"
        }
      }
    ]
  },
  "knowsLanguage": ["en", "gu", "hi"],
  "description": "Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors."
};

export const metadata: Metadata = {
  title: {
    default: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    template: '%s | Khilan Sakariya - Gujarati Translator'
  },
  description: 'Professional Gujarati translator specializing in English to Gujarati translation services across medical, healthcare, academic, legal, business, technical, financial, manufacturing, tourism, and government sectors.',
  keywords: [
    // Brand & Name
    'Khilan Sakariya',
    'Khilan',
    'Sakariya',
    'Khilan Sakriya', // Common misspelling
    'Sakriya Guajrati', // Specific user request

    // Core Services (Correct & Common Typos)
    'Gujarati Translator',
    'Gujrati Translator', // Common misspelling
    'Gujarathi Translator', // Variation
    'English to Gujarati',
    'English to Gujrati',
    'English Gujarti', // Typo variation
    'Gujarati to English',
    'Gujrati to English',
    'Professional Translator',
    'Translater', // Common misspelling

    // Short forms
    'gu to en translator',
    'en to gu translator',
    'gu-en translation',
    'en-gu translation',

    // Services & Typos
    'Translation Services',
    'Medical Translation Gujarati',
    'Legal Translation Gujarati',
    'Business Translation Gujarati',
    'Certified Translator India',
    'Clinical Trial Translation',
    'Document Translation Services',
    'trnasltion', // Typo
    'translaton', // Typo
    'Medical Translation',
    'Legal Translation',
    'Technical Translation',
    'Website Localization',
    'App Localization',
    'LQA Testing',
    'MTPE',
    'Machine Translation Post-Editing',

    // Location
    'Surat',
    'Gujarat',
    'India',
    'Freelance Translator India'
  ],
  authors: [{ name: 'Khilan Sakariya', url: 'https://khilansakariya.github.io' }],
  creator: 'Khilan Sakariya',
  openGraph: {
    title: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    description: 'Professional Gujarati translator specializing in English to Gujarati translation services.',
    url: 'https://khilansakariya.github.io',
    siteName: 'Khilan Sakariya - Gujarati Translator',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khilan Sakariya - Professional Gujarati Translator & Linguistic Expert',
    description: 'Professional Gujarati translator specializing in English to Gujarati translation services.',
    images: ['/og-image.jpg'],
    creator: '@khilan005',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '-SWcG_-HMrbzLycO9-MTaQCFTb3kCR0blIAYWZkqShI',
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Surat, Gujarat, India',
    'geo.position': '21.1702;72.8311',
    'ICBM': '21.1702, 72.8311',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Khilan Sakariya" />
        <meta name="copyright" content={`Copyright © ${new Date().getFullYear()} Khilan Sakariya`} />
        {/* ... other meta tags ... */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-background text-foreground antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LoadingScreen>
          <Analytics />
          <PerformanceOptimizer />
        </ThemeProvider>
      </body>
    </html>
  );
}