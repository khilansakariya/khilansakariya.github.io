'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faFileAlt, faCheckCircle, faAward } from '@fortawesome/free-solid-svg-icons';



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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Professional Translator & Linguist
          </h3>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
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

          {/* View Resume Button */}
          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              View Resume
            </a>
          </div>

        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid gap-6"
        >
          <h3 className="text-2xl font-semibold text-foreground">Services I Offer</h3>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="glass-card p-6 rounded-xl hover:bg-card/80"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-primary text-xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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