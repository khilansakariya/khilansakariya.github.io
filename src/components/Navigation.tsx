'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#resume' },
  { name: 'Resume', href: '/Khilan_Sakariya_Resume.pdf' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      let currentSection = 'home';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) { // Section is in view
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Call once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      if (href.startsWith('/')) {
        // It's a page link (like /archive) - use Next.js router
        router.push(href);
      } else {
        // It's an anchor link (like #home, #about, etc.)
        const currentPath = window.location.pathname;
        
        if (currentPath === '/archive') {
          // If we're on archive page, go to home page first, then scroll to section
          router.push(`/${href}`);
        } else {
          // If we're on home page, just scroll to the section
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            // If element not found, try scrolling to top for home
            if (href === '#home') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        }
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-700'
          : 'bg-navy-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">K</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">Khilan Sakariya</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.href === '#home' ? activeSection === 'home' : 
                              item.href === '#about' ? activeSection === 'about' :
                              item.href === '#experience' ? activeSection === 'experience' :
                              item.href === '#resume' ? activeSection === 'resume' :
                              item.href === '#projects' ? activeSection === 'projects' :
                              item.href === '#contact' ? activeSection === 'contact' : false;
              
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-200 font-medium ${
                    isActive 
                      ? 'text-green-400' 
                      : 'text-navy-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-navy-800 transition-colors duration-200 mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700 mobile-menu"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = item.href === '#home' ? activeSection === 'home' : 
                                item.href === '#about' ? activeSection === 'about' :
                                item.href === '#experience' ? activeSection === 'experience' :
                                item.href === '#resume' ? activeSection === 'resume' :
                                item.href === '#projects' ? activeSection === 'projects' :
                                item.href === '#contact' ? activeSection === 'contact' : false;
                
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left py-4 px-4 rounded-xl transition-all duration-200 font-medium touch-manipulation cursor-pointer ${
                      isActive
                        ? 'text-green-400 bg-green-400/10 border border-green-400/30'
                        : 'text-navy-300 hover:text-white hover:bg-navy-800 bg-transparent'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 