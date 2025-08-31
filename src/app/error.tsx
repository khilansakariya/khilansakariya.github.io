'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRefresh, faExclamationTriangle, faBug } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon 
                  icon={faBug} 
                  className="text-white text-4xl" 
                />
              </div>
            </motion.div>

            {/* Error Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              Something Went Wrong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-navy-300 mb-8 max-w-2xl mx-auto"
            >
              An unexpected error occurred. Don't worry, this is not your fault. Our team has been notified and we're working to fix it.
            </motion.p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-8 text-left"
              >
                <h3 className="text-red-400 font-semibold mb-2">Error Details (Development):</h3>
                <p className="text-red-300 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-red-300 text-sm font-mono mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="btn-primary group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faRefresh} className="mr-2 group-hover:animate-pulse" />
                Try Again
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline group flex items-center px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2 group-hover:animate-pulse" />
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-navy-800/50 rounded-xl p-6 border border-navy-700 max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Need Help?
              </h3>
              <div className="space-y-3 text-left">
                <p className="text-navy-300">
                  If this problem persists, you can:
                </p>
                <ul className="text-navy-300 space-y-2 ml-4">
                  <li>• Refresh the page and try again</li>
                  <li>• Clear your browser cache and cookies</li>
                  <li>• Try accessing the site from a different browser</li>
                  <li>• Contact me directly if the issue continues</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-navy-600">
                  <Link 
                    href="/#contact" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-200 font-medium"
                  >
                    → Contact Support
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Technical Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-8 p-4 bg-navy-800/30 rounded-lg border border-navy-700 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-2 text-navy-300">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-sm" />
                <span className="text-sm">
                  Error occurred at {new Date().toLocaleString()}
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