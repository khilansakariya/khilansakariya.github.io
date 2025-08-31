'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendar, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const education = [
  {
    degree: 'M.Sc. Mathematics',
    institution: 'Sardar Vallabhbhai National Institute of Technology, SVNIT',
    location: 'Surat',
    period: 'May 2014 – June 2019',
    description: 'Completed a rigorous 5-year integrated program in Mathematics with a strong emphasis on theoretical concepts and practical applications of Mathematics in the field of IT.',
    achievements: [
      'Strong foundation in Mathematics - studied diverse topics including Calculus, Linear Algebra, Probability, Graph Theory, Numerical Analysis, and more.',
      'Acquired hands-on experience with various mathematical tools and software including MATLAB, and Mathematica to solve complex mathematical problems and analyze data.',
      'Conducted research in the field of optimization, specifically focusing on the development and implementation of optimization algorithms.',
      'Involved in various extracurricular activities such as music, sports, and volunteering during college.'
    ]
  },
  {
    degree: 'HSC (12th)',
    institution: 'Ankur School of Science',
    location: 'Surat',
    period: 'April 2012 – March 2014',
    description: 'Equipped with a strong foundation in Science and Mathematics, enabling the ability to approach complex problems with logical reasoning and critical thinking skills.',
    achievements: [
      'Secured a commendable score in the 12th board exams, showcasing a deep understanding of the core concepts in the field.',
      'Displayed a keen interest in pursuing a career in a technical field such as engineering, computer science or mathematics.',
      'Shown discipline and determination towards studies, consistently following a routine and managing time efficiently.'
    ]
  },
  {
    degree: 'SSC (10th)',
    institution: 'Ankur High School',
    location: 'Surat',
    period: 'March 2012',
    description: 'Demonstrated exceptional academic performance throughout school, with a particularly standout achievement in scoring among the top 5 students in the 10th board.',
    achievements: [
      'Well-versed in the curriculum of the Gujarat State Education Board, with a strong understanding of core concepts in areas such as mathematics, science, and other subjects.',
      'Demonstrated excellent academic abilities through consistently high scores and a strong work ethic.',
      'Demonstrated a keen interest in learning and actively participated in various extracurricular activities.'
    ]
  }
];

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
      
      // Reset activeTab to 0 if we're on desktop and it's -1
      if (!isMobileDevice && activeTab === -1) {
        setActiveTab(0);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    if (isMobile) {
      // On mobile, toggle the clicked tab
      setActiveTab(activeTab === index ? -1 : index);
    } else {
      // On desktop, just set the active tab
      setActiveTab(index);
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
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Side - Education List */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {education.map((edu, index) => (
                <motion.button
                  key={`${edu.institution}-${edu.degree}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                    activeTab === index
                      ? 'border-green-400 bg-green-400/10 text-green-400'
                      : 'border-navy-700 bg-navy-800/50 text-navy-300 hover:border-navy-600 hover:bg-navy-800/70'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-primary-400 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-navy-900" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 truncate">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-primary-400 mb-2 truncate">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <FontAwesomeIcon icon={faCalendar} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {activeTab >= 0 && activeTab < education.length && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-primary-400 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-navy-900" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {education[activeTab].degree}
                      </h3>
                      <h4 className="text-lg text-primary-400 font-medium mb-3">
                        {education[activeTab].institution}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-navy-300 mb-4">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          {education[activeTab].period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {education[activeTab].location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-navy-300 leading-relaxed">
                      {education[activeTab].description}
                    </p>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {education[activeTab].achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1, duration: 0.5 }}
                            className="flex items-start text-sm text-navy-300"
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout - Collapsible */}
        <div className="lg:hidden space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="card"
            >
              {/* Education Header - Always Visible */}
              <motion.button
                onClick={() => handleTabClick(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  activeTab === index
                    ? 'border-green-400 bg-green-400/10 text-green-400'
                    : 'border-navy-700 bg-navy-800/50 text-navy-300 hover:border-navy-600 hover:bg-navy-800/70'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-primary-400 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-navy-900 text-sm" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-primary-400 mb-2 leading-tight">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <FontAwesomeIcon icon={faCalendar} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <FontAwesomeIcon 
                      icon={activeTab === index ? faTimes : faGraduationCap} 
                      className={`text-sm transition-transform duration-300 ${
                        activeTab === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    />
                  </div>
                </div>
              </motion.button>

              {/* Collapsible Content */}
              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0">
                      <div className="space-y-4">
                        <p className="text-navy-300 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-3">Key Highlights:</h5>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: achievementIndex * 0.1, duration: 0.5 }}
                                className="flex items-start text-sm text-navy-300"
                              >
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 