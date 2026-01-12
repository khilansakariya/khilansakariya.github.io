'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    role: "Gujarati Linguist",
    company: "Magnon Sancus",
    period: "Oct 2022 - Present",
    location: "Remote",
    description: "Working on content ranging across topics like Creative, UI, Help, Legal, and Marketing for various Google products.",
    achievements: [
      "Worked on content ranging across topics like Creative, UI, Help, Legal, and Marketing for various Google products (Ex. YouTube, GPay, Maps, Ads etc.)",
      "LQA testing has been conducted on the live Gujarati version of Google Docs to improve the Gujarati version.",
      "Translate, review, and proofread several types of content: UI application strings for mobile apps, Website content, FAQs, Help center content and many more.",
      "Perform LQA (Localization QA) testing of the application UI strings as well as thoroughly QA any content published on the website (FAQs, Blog posts) or other channels."
    ]
  },
  {
    role: "Gujarati Linguist",
    company: "Amazon",
    period: "June 2023 - Present",
    location: "Remote",
    description: "Translate, review, and proofread internal documents for Amazon.",
    achievements: [
      "Translate, review, and proofread internal documents, including questionnaires and feedback forms, for Amazon."
    ]
  },
  {
    role: "Gujarati Linguist",
    company: "GienTech",
    period: "March 2023 - Dec 2023",
    location: "Remote",
    description: "Engaged in crafting content encompassing diverse subjects for TikTok LIVE project.",
    achievements: [
      "Engaged in crafting content encompassing diverse subjects such as Creativity, UI, Support, Legal, and Promotion for TikTok LIVE project.",
      "Conducted translation, assessment, and meticulous review of a variety of content types: UI text for mobile applications, web-based information, FAQs and Support hub materials, scripted replies for customer assistance, surveys, social media updates, videos, and possibly certain legally-oriented content.",
      "Translated TikTok's UI text components and diligently ensured the quality assurance of all content disseminated across platforms like the website (FAQs, Blog posts) and other communication channels."
    ]
  },
  {
    role: "Gujarati Translator",
    company: "Testbook",
    period: "Dec 2022 - Present",
    location: "Remote",
    description: "Translated English question and answer content related to competitive exams into accurate and idiomatic Gujarati.",
    achievements: [
      "Translated English question and answer content related to competitive exams into accurate and idiomatic Gujarati, ensuring that the translated content was relevant and appropriate for the target audience.",
      "Edited and proofread translations to ensure accuracy and consistency, maintaining high standards of quality and attention to detail.",
      "Developed and maintained a strong understanding of the language, and exam-related terminology to ensure that translations were accurate and consistent across multiple projects.",
      "Successfully managed tight deadlines while maintaining high-quality standards, collaborating with the team and adapting to the unique challenges of translating educational content for the ed-tech industry."
    ]
  },
  {
    role: "Gujarati Translator",
    company: "Embibe",
    period: "May 2021 - Sep 2022",
    location: "Remote",
    description: "Translated a wide range of content types for K-12 Physics, Maths, Chemistry, and Science subjects.",
    achievements: [
      "Translated a wide range of content types for K-12 Physics, Maths, Chemistry, and Science subjects.",
      "Translated website/mobile application content such as UI strings, error messages, and navigation menus to ensure a seamless user experience for the target audience.",
      "Edited and proofread translations to ensure accuracy and consistency, maintaining high standards of quality and attention to detail.",
      "Conducted training sessions for new joiners on translation tools and software, glossaries, and translation processes to ensure that they were familiar with the company's standards and procedures."
    ]
  },
  {
    role: "Translator",
    company: "Freelancing",
    period: "Feb 2019 - Present",
    location: "Remote",
    description: "Provided translation services to multiple clients, ensuring accurate and culturally appropriate translations.",
    achievements: [
      "Provided translation services to multiple clients, ensuring accurate and culturally appropriate translations for a variety of industries and content types.",
      "Collaborated with clients to understand their translation needs and preferences, utilizing various translation tools and software, such as CAT tools, Translation Memory systems, and glossaries, to deliver high-quality translations.",
      "Worked on a variety of translation projects, including documents, websites, mobile applications, videos, and marketing materials, adapting to the unique challenges of each project and ensuring consistency across translations.",
      "Managed multiple projects simultaneously, prioritizing tasks effectively to meet tight deadlines, and maintaining clear and organized project files and documentation."
    ]
  },
  {
    role: "Mathematics Teacher",
    company: "Personal Tutor",
    period: "May 2019 - Apr 2021",
    location: "Surat, India",
    description: "Designed and implemented lesson plans that incorporated Algebra I and II, Geometry, Statistics and Calculus.",
    achievements: [
      "Designed and implemented lesson plans that incorporated Algebra I and II, Geometry, Statistics and Calculus.",
      "Assessed tests and reported and analyzed student's results.",
      "Implemented various teaching techniques and differentiated instruction."
    ]
  }
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="py-12 bg-secondary/30 relative overflow-hidden" id="experience">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary mb-6">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
            Career Journey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth. Click on a card to see more details.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-ml-px"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } group`}
              >
                {/* Connector Dot */}
                <div className={`absolute left-0 md:left-1/2 w-10 h-10 bg-background border-4 rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 shadow-lg transition-colors duration-300 ${activeIndex === index ? 'border-primary shadow-primary/20' : 'border-muted'}`}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  } w-full`}>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className={`glass-card rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${activeIndex === index ? 'border-primary/40 shadow-xl shadow-primary/5 -translate-y-1' : 'hover:bg-secondary/50'
                      }`}
                  >
                    {/* Header (Always Visible) */}
                    <div className="p-5 flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4 mr-1.5" />
                          <span className="font-medium mr-4">{exp.company}</span>
                        </div>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                        <span className="text-xl font-medium leading-none">+</span>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 pt-0 border-t border-border/50 mt-2">
                          <div className="flex items-center text-sm text-muted-foreground mb-4 pt-4">
                            <MapPin className="w-4 h-4 mr-1.5" />
                            <span>{exp.location}</span>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Key Achievements</h4>
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start text-xs text-muted-foreground/90">
                                <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0"></span>
                                <span className="leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}