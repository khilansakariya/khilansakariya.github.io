'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewResume = () => {
    // Track resume view event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_view', {
        event_category: 'engagement',
        event_label: 'hero_resume_button',
        value: 1
      });
    }
    
    // Dispatch custom event for analytics
    document.dispatchEvent(new CustomEvent('resume-click'));
    
    try {
      const resumeUrl = '/resume.pdf';
      console.log('Opening resume at:', resumeUrl);
      window.open(resumeUrl, '_blank');
    } catch (error) {
      console.error('Error opening resume:', error);
      // Fallback: try to download the file
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Khilan_Sakariya_Resume.pdf';
      link.click();
    }
  };

  return (
    <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg text-green-400 font-mono mb-4"
        >
          Professional Gujarati Translator & Linguistic Expert
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Khilan Sakariya
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-navy-300 mb-6 sm:mb-8 leading-tight"
        >
          Translate Complexity into <span className="gradient-text">Simplicity!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg text-navy-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          Experienced Gujarati translator offering English to Gujarati translation services for academic, medical, and business content. Committed to delivering accurate, culturally appropriate translations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary group w-full sm:w-auto px-6 py-3 sm:py-4 text-base sm:text-lg"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 group-hover:animate-pulse" />
            Get In Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group w-full sm:w-auto px-6 py-3 sm:py-4 text-base sm:text-lg"
            onClick={handleViewResume}
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-2 group-hover:animate-pulse" />
            Resume
          </motion.button>
        </motion.div>

        {/* SEO-optimized hidden content for search engines */}
        <div className="sr-only">
          <h2>Gujarati Translation Services</h2>
          <p>Professional Gujarati translator offering EN {'>'} GU and EN {'>'} IN-GU translation services. Expert in English to Gujarati translation, proofreading, LQA testing, and linguistic consulting. Certified translator for Indian language translation needs.</p>
          <ul>
            <li>English to Gujarati Translation (EN {'>'} GU)</li>
            <li>English to Indian Gujarati Translation (EN {'>'} IN-GU)</li>
            <li>Gujarati to English Translation</li>
            <li>Document Translation Services</li>
            <li>Legal Translation</li>
            <li>Technical Translation</li>
            <li>Business Translation</li>
            <li>Academic Translation</li>
            <li>Proofreading Services</li>
            <li>LQA Testing</li>
            <li>Linguistic Consulting</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 