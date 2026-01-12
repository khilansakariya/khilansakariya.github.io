'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCalendar, faBuilding, faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { projects, getProjectsByCategory } from '@/data/projects';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { LoadingScreen } from '@/components/LoadingScreen';

const categories = ['All', 'Insurance', 'Corporate', 'Legal'];

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <LoadingScreen>
      <main className="min-h-screen bg-navy-900">
        <Navigation />
        <Breadcrumbs />
        
        <div className="pt-20">
          {/* Header */}
          <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline"
                  >
                    ← Back to Home
                  </motion.button>
                </Link>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Project Archive
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto mb-6"></div>
              <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                Explore my complete portfolio of translation projects across various industries and domains
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              {/* Search */}
              <div className="mb-6">
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
                  />
                  <FontAwesomeIcon icon={faFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-green-400 text-navy-900'
                        : 'bg-navy-800 text-navy-300 hover:bg-navy-700 hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-navy-300">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="container-max px-4 sm:px-6 lg:px-8 pb-16">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
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
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-navy-300 bg-navy-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <FontAwesomeIcon icon={faTimes} className="mx-auto text-navy-600 mb-4 text-6xl" />
                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p className="text-navy-300">
                  Try adjusting your search terms or category filter
                </p>
              </motion.div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </LoadingScreen>
  );
} 