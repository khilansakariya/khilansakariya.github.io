'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    title: 'Gujarati Linguists',
    company: 'Magnon Sancus',
    location: 'Remote',
    period: 'Oct 2022 - Present',
    description: 'Working on content ranging across topics like Creative, UI, Help, Legal, and Marketing for various Google products.',
    achievements: [
      'Worked on content ranging across topics like Creative, UI, Help, Legal, and Marketing for various Google products (Ex. YouTube, GPay, Maps, Ads etc.)',
      'LQA testing has been conducted on the live Gujarati version of Google Docs to improve the Gujarati version.',
      'Translate, review, and proofread several types of content: UI application strings for mobile apps, Website content, FAQs, Help center content and many more.',
      'Perform LQA (Localization QA) testing of the application UI strings as well as thoroughly QA any content published on the website (FAQs, Blog posts) or other channels.'
    ],
    link: 'https://www.magnonsancus.com/'
  },
  {
    title: 'Gujarati Linguists',
    company: 'Amazon',
    location: 'Remote',
    period: 'June 2023 - Present',
    description: 'Translate, review, and proofread internal documents for Amazon.',
    achievements: [
      'Translate, review, and proofread internal documents, including questionnaires and feedback forms, for Amazon.'
    ],
    link: 'https://amazontranslationlearn.com/'
  },
  {
    title: 'Gujarati Linguists',
    company: 'GienTech',
    location: 'Remote',
    period: 'March 2023 - Dec 2023',
    description: 'Engaged in crafting content encompassing diverse subjects for TikTok LIVE project.',
    achievements: [
      'Engaged in crafting content encompassing diverse subjects such as Creativity, UI, Support, Legal, and Promotion for TikTok LIVE project.',
      'Conducted translation, assessment, and meticulous review of a variety of content types: UI text for mobile applications, web-based information, FAQs and Support hub materials, scripted replies for customer assistance, surveys, social media updates, videos, and possibly certain legally-oriented content.',
      'Translated TikTok\'s UI text components and diligently ensured the quality assurance of all content disseminated across platforms like the website (FAQs, Blog posts) and other communication channels.'
    ],
    link: 'https://en.gientech.com/'
  },
  {
    title: 'Gujarati Translator',
    company: 'Testbook',
    location: 'Remote',
    period: 'Dec 2022 - Present',
    description: 'Translated English question and answer content related to competitive exams into accurate and idiomatic Gujarati.',
    achievements: [
      'Translated English question and answer content related to competitive exams into accurate and idiomatic Gujarati, ensuring that the translated content was relevant and appropriate for the target audience.',
      'Edited and proofread translations to ensure accuracy and consistency, maintaining high standards of quality and attention to detail.',
      'Developed and maintained a strong understanding of the language, and exam-related terminology to ensure that translations were accurate and consistent across multiple projects.',
      'Successfully managed tight deadlines while maintaining high-quality standards, collaborating with the team and adapting to the unique challenges of translating educational content for the ed-tech industry.'
    ],
    link: 'https://testbook.com/'
  },
  {
    title: 'Gujarati Translator',
    company: 'Embibe',
    location: 'Remote',
    period: 'May 2021 - Sep 2022',
    description: 'Translated a wide range of content types for K-12 Physics, Maths, Chemistry, and Science subjects.',
    achievements: [
      'Translated a wide range of content types for K-12 Physics, Maths, Chemistry, and Science subjects.',
      'Translated website/mobile application content such as UI strings, error messages, and navigation menus to ensure a seamless user experience for the target audience.',
      'Edited and proofread translations to ensure accuracy and consistency, maintaining high standards of quality and attention to detail.',
      'Conducted training sessions for new joiners on translation tools and software, glossaries, and translation processes to ensure that they were familiar with the company\'s standards and procedures.'
    ],
    link: 'https://www.embibe.com/'
  },
  {
    title: 'Translator',
    company: 'Freelancing',
    location: 'Remote',
    period: 'Feb 2019 - Present',
    description: 'Provided translation services to multiple clients, ensuring accurate and culturally appropriate translations.',
    achievements: [
      'Provided translation services to multiple clients, ensuring accurate and culturally appropriate translations for a variety of industries and content types.',
      'Collaborated with clients to understand their translation needs and preferences, utilizing various translation tools and software, such as CAT tools, Translation Memory systems, and glossaries, to deliver high-quality translations.',
      'Worked on a variety of translation projects, including documents, websites, mobile applications, videos, and marketing materials, adapting to the unique challenges of each project and ensuring consistency across translations.',
      'Managed multiple projects simultaneously, prioritizing tasks effectively to meet tight deadlines, and maintaining clear and organized project files and documentation.'
    ],
    link: '#'
  },
  {
    title: 'Mathematics Teacher',
    company: 'Personal Tutor',
    location: 'Surat, India',
    period: 'May 2019 - Apr 2021',
    description: 'Designed and implemented lesson plans that incorporated Algebra I and II, Geometry, Statistics and Calculus.',
    achievements: [
      'Designed and implemented lesson plans that incorporated Algebra I and II, Geometry, Statistics and Calculus.',
      'Assessed tests and reported and analyzed student\'s results.',
      'Implemented various teaching techniques and differentiated instruction.'
    ],
    link: '#'
  }
];

export function Experience() {
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
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Left Side - Job List */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <motion.button
                  key={`${exp.company}-${exp.title}`}
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
                        <FontAwesomeIcon icon={faCalendar} className="text-navy-900 text-sm" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 truncate">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-primary-400 mb-2 truncate">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <FontAwesomeIcon icon={faCalendar} />
                        {exp.period}
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
              {activeTab >= 0 && activeTab < experiences.length && (
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
                        <FontAwesomeIcon icon={faCalendar} className="text-navy-900" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {experiences[activeTab].title}
                          </h3>
                          <h4 className="text-lg text-primary-400 font-medium mb-3">
                            {experiences[activeTab].company}
                          </h4>
                        </div>
                        
                        {experiences[activeTab].link !== '#' && (
                          <a
                            href={experiences[activeTab].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-navy-400 hover:text-green-400 transition-colors duration-200 ml-4"
                          >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-navy-300 mb-4">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} />
                          {experiences[activeTab].period}
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {experiences[activeTab].location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-navy-300 leading-relaxed">
                      {experiences[activeTab].description}
                    </p>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experiences[activeTab].achievements.map((achievement, achievementIndex) => (
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
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="card"
            >
              {/* Job Header - Always Visible */}
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
                        <FontAwesomeIcon icon={faCalendar} className="text-navy-900 text-sm" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-primary-400 mb-2 leading-tight">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <FontAwesomeIcon icon={faCalendar} />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <FontAwesomeIcon 
                      icon={activeTab === index ? faTimes : faCalendar} 
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
                          {exp.description}
                        </p>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
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