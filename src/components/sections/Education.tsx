'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, ChevronRight, BookOpen } from 'lucide-react';

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="py-12 relative" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary mb-6">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
          Education
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Academic background and qualifications. Click to view details.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div
              onClick={() => toggleAccordion(index)}
              className={`glass-card rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${activeIndex === index ? 'border-primary/40 shadow-xl shadow-primary/5 -translate-y-1' : 'hover:bg-secondary/50'}`}
            >
              {/* Header */}
              <div className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`p-3 rounded-xl transition-colors duration-300 ${activeIndex === index ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-0.5">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {edu.period}
                  </span>
                  {/* Expand Icon */}
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-foreground transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                    <span className="text-xl font-medium leading-none">+</span>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 border-t border-border/50 mt-2">
                    {/* Mobile Period & Location */}
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 pt-4">
                      <div className="sm:hidden flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {edu.location}
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Key Highlights</h4>
                      {edu.achievements.map((item, i) => (
                        <div key={i} className="flex items-start text-xs text-muted-foreground/90">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0"></span>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}