'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface LoadingScreenProps {
  children: React.ReactNode;
}

export function LoadingScreen({ children }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();

    // Simulate loading progress - faster on mobile
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Faster progress on mobile
        const increment = isMobile ? Math.random() * 30 + 15 : Math.random() * 20 + 10;
        return prev + increment;
      });
    }, isMobile ? 50 : 80); // Faster interval on mobile

    // Hide loading screen - shorter time on mobile
    const timer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false);
      }
    }, isMobile ? 500 : 800); // Reduced from 800ms to 500ms on mobile

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [progress, isMobile]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900"
          >
            <div className="text-center">
              {/* Logo/Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <FontAwesomeIcon 
                  icon={faLanguage} 
                  className={`${isMobile ? 'text-4xl' : 'text-6xl'} text-green-400 mb-4`}
                />
                <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-2`}>
                  Khilan Sakariya
                </h1>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-navy-300`}>
                  Professional Translator & Linguist
                </p>
              </motion.div>

              {/* Loading Spinner */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <FontAwesomeIcon 
                  icon={faSpinner} 
                  className={`${isMobile ? 'text-2xl' : 'text-3xl'} text-green-400 animate-spin`}
                />
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className={`${isMobile ? 'w-48' : 'w-64'} h-2 bg-navy-700 rounded-full mx-auto mb-4 overflow-hidden`}
              >
                <div className="h-full bg-gradient-to-r from-green-400 to-primary-400 rounded-full" />
              </motion.div>

              {/* Progress Text */}
              {!isMobile && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-navy-300 text-sm"
                >
                  Loading... {Math.round(progress)}%
                </motion.p>
              )}

              {/* Loading Messages */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6"
              >
                {!isMobile && (
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-navy-400 text-xs"
                  >
                    {progress < 30 && "Initializing..."}
                    {progress >= 30 && progress < 60 && "Loading content..."}
                    {progress >= 60 && progress < 90 && "Preparing portfolio..."}
                    {progress >= 90 && "Almost ready..."}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
} 