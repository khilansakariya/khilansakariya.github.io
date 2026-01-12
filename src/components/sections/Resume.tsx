'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, CheckCircle, Award } from 'lucide-react';

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
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_view', {
        event_category: 'engagement',
        event_label: 'resume_pdf',
        value: 1
      });
    }

    document.dispatchEvent(new CustomEvent('resume-click'));

    try {
      window.open('/resume.pdf', '_blank');
    } catch (error) {
      console.error('Error opening resume:', error);
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
          Resume & Skills
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover how I can help bring your projects to life with precision and cultural sensitivity.
        </p>

        {/* Resume Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={handleViewResume}
            className="group flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            View Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-display">
          Skills & Expertise
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              className="glass-card p-6 rounded-2xl hover:bg-card/80 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Award className="mr-3 text-primary w-5 h-5" />
                {skillGroup.category}
              </h4>
              <div className="space-y-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.05, duration: 0.5 }}
                    className="flex items-center text-muted-foreground group"
                  >
                    <CheckCircle className="w-4 h-4 text-primary/60 mr-3 group-hover:text-primary transition-colors" />
                    <span className="text-sm">{item}</span>
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
