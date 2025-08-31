'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faFileAlt, faCalendar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { getFeaturedProjects } from '@/data/projects';
import Link from 'next/link';

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const featuredProjects = getFeaturedProjects();

  return (
    <div ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto mb-6"></div>
        <p className="text-xl text-navy-300 max-w-3xl mx-auto mb-8">
          A showcase of my translation work across various domains and industries
        </p>
        
        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center items-center mb-12"
        >
          <Link href="/archive">
            <motion.button 
              className="btn-primary group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 group-hover:animate-pulse" />
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="card group h-full flex flex-col"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {project.category}
              </span>
              <div className="flex space-x-2">
                {project.external && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">
                {project.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-navy-400">
                  <FontAwesomeIcon icon={faBuilding} className="mr-1" />
                  {project.company}
                </div>
                <div className="flex items-center text-xs text-navy-400">
                  <FontAwesomeIcon icon={faCalendar} className="mr-1" />
                  {project.date}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-navy-300 bg-navy-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-xs text-navy-400 bg-navy-700 px-2 py-1 rounded">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 