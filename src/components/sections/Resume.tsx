'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { category: 'Languages', items: ['Gujarati (Native)', 'English (Fluent)', 'Hindi (Fluent)'] },
  { category: 'Translation Tools', items: ['SDL Trados', 'MemoQ', 'Wordfast', 'Google Translate API'] },
  { category: 'Document Types', items: ['Legal Documents', 'Technical Manuals', 'Business Contracts', 'Website Content'] },
  { category: 'Software', items: ['Microsoft Office', 'Adobe Acrobat', 'CAT Tools', 'Project Management'] }
];

export function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleViewResume = () => {
    // Track resume view event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_view', {
        event_category: 'engagement',
        event_label: 'resume_pdf',
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
    <div ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Resume & Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto mb-6"></div>
        <p className="text-xl text-navy-300 max-w-3xl mx-auto mb-8">
          Discover how I can help bring your projects to life with precision and cultural sensitivity.
        </p>

        {/* Resume Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewResume}
            className="btn-primary group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-2 group-hover:animate-pulse" />
            View Resume
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Skills & Expertise
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className="bg-navy-800/50 rounded-xl p-6 border border-navy-700 hover:border-navy-600 transition-all duration-300 hover:scale-105"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-green-400" />
                {skillGroup.category}
              </h4>
              <div className="space-y-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.05, duration: 0.5 }}
                    className="flex items-center text-navy-300 hover:text-green-400 transition-colors duration-200 group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 