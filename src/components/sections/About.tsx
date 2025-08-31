'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faFileAlt, faCheckCircle, faAward } from '@fortawesome/free-solid-svg-icons';

const skills = [
  'Gujarati Translation',
  'English Translation',
  'Proofreading',
  'LQA Testing',
  'Academic Content',
  'Technical Documents',
  'Subtitling',
  'Transcreation',
  'Quality Assurance',
  'Project Management',
];

const services = [
  {
    icon: faLanguage,
    title: 'Translation Services',
    description: 'Professional translation between English and Gujarati for various content types.',
  },
  {
    icon: faFileAlt,
    title: 'Proofreading',
    description: 'Thorough review and correction of translated content for accuracy and fluency.',
  },
  {
    icon: faCheckCircle,
    title: 'LQA Testing',
    description: 'Linguistic Quality Assurance to ensure the highest standards of translation quality.',
  },
  {
    icon: faAward,
    title: 'Specialized Content',
    description: 'Expertise in academic, technical, and industry-specific content translation.',
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Professional Translator & Linguist
          </h3>
          
          <div className="space-y-4 text-navy-300 leading-relaxed">
            <p>
              I'm a passionate linguist with extensive experience in translation and language services. 
              My journey in the world of languages began with a deep appreciation for cultural exchange 
              and communication.
            </p>
            
            <p>
              With years of experience in both academic and industry settings, I specialize in delivering 
              high-quality translations that maintain the original meaning while ensuring natural flow 
              in the target language.
            </p>
            
            <p>
              My expertise spans various domains including academic papers, technical documentation, 
              marketing materials, and multimedia content. I'm committed to providing accurate, 
              culturally appropriate translations that meet the highest professional standards.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-white mb-4">Key Skills</h4>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center text-sm text-navy-300"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Services I Offer</h3>
          
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="card group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className="text-green-400 group-hover:text-primary-400 transition-colors duration-200 text-xl" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-navy-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 