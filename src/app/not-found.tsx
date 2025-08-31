'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft, faSearch, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon 
                  icon={faExclamationTriangle} 
                  className="text-white text-4xl" 
                />
              </div>
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl sm:text-8xl font-bold text-white mb-4"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl sm:text-3xl font-semibold text-navy-300 mb-6"
            >
              Page Not Found
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-navy-300 mb-8 max-w-2xl mx-auto"
            >
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2 group-hover:animate-pulse" />
                  Back to Home
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="btn-outline group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:animate-pulse" />
                Go Back
              </motion.button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-navy-800/50 rounded-xl p-6 border border-navy-700 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Looking for something specific?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link href="/#about" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → About Me
                </Link>
                <Link href="/#experience" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → Experience
                </Link>
                <Link href="/#skills" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → Skills
                </Link>
                <Link href="/#projects" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → Projects
                </Link>
                <Link href="/#contact" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → Contact
                </Link>
                <Link href="/archive" className="text-navy-300 hover:text-green-400 transition-colors duration-200">
                  → All Projects
                </Link>
              </div>
            </motion.div>

            {/* Search Suggestion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 p-4 bg-navy-800/30 rounded-lg border border-navy-700 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 text-navy-300">
                <FontAwesomeIcon icon={faSearch} className="text-sm" />
                <span className="text-sm">
                  Try checking the URL for typos or use the navigation menu above
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 