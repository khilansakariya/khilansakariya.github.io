'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowUp, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khilan005/',
    icon: faLinkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'X',
    url: 'https://twitter.com/khilan005',
    icon: faXTwitter,
    color: 'hover:text-sky-400'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/khilan.sk',
    icon: faInstagram,
    color: 'hover:text-pink-400'
  },
  {
    name: 'ProZ',
    url: 'http://www.proz.com/profile/3562571',
    icon: faGlobe,
    color: 'hover:text-green-400'
  }
];

export function Footer() {
  const router = useRouter();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (link: string) => {
    if (link === 'Archive') {
      router.push('/archive');
    } else if (link === 'Resume') {
      window.open('/Khilan_Sakariya_Resume.pdf', '_blank');
    } else {
      const currentPath = window.location.pathname;
      
      if (currentPath === '/archive') {
        // If we're on archive page, go to home page first, then scroll to section
        router.push(`/#${link.toLowerCase()}`);
      } else {
        // If we're on home page, just scroll to the section
        document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-navy-900/80 border-t border-navy-700">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-400 to-primary-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-navy-900 font-bold text-sm sm:text-lg">K</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold gradient-text">Khilan Sakariya</h3>
                <p className="text-navy-400 text-xs sm:text-sm">Professional Translator</p>
              </div>
            </div>
            <p className="text-navy-300 text-xs sm:text-sm leading-relaxed mb-6">
              Specializing in English to Gujarati translation services with expertise in medical, technical, and marketing documents.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-xl bg-navy-800 text-navy-300 transition-all duration-300 ${social.color} border border-navy-700 hover:border-navy-600 shadow-lg hover:shadow-xl`}
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Experience', 'Skills', 'Resume', 'Projects', 'Contact'].map((link) => (
                <motion.button
                  key={link}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(link)}
                  className="block w-full text-left text-navy-300 hover:text-green-400 transition-colors duration-200 text-sm group"
                >
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <div className="space-y-3">
              {[
                'Document Translation',
                'Legal Translation',
                'Technical Translation',
                'Business Translation',
                'Website Localization'
              ].map((service, index) => (
                <motion.div 
                  key={service} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="text-navy-300 text-sm flex items-center group cursor-pointer p-2 rounded-lg hover:bg-navy-800/50 transition-all duration-200"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 group-hover:scale-150 group-hover:bg-green-400 transition-all duration-200"></span>
                  <span className="group-hover:text-green-400 transition-colors duration-200">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-400" />
                </div>
                <div>
                  <p className="text-navy-300 text-sm font-medium">Email</p>
                  <a 
                    href="mailto:khilansakariya123@yahoo.com"
                    className="text-navy-300 hover:text-green-400 transition-colors duration-200 text-sm group"
                  >
                    <span className="group-hover:underline">khilansakariya123@yahoo.com</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400" />
                </div>
                <div>
                  <p className="text-navy-300 text-sm font-medium">Location</p>
                  <p className="text-navy-300 text-sm">Surat, Gujarat, India</p>
                </div>
              </div>
              
              <motion.div 
                className="pt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20 hover:bg-green-400/20 hover:border-green-400/40 transition-all duration-200 cursor-pointer">
                  Available for Remote Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-navy-700 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="flex items-center text-navy-300 text-sm mb-4 sm:mb-0">
            <span>© 2025 Khilan Sakariya. Made with</span>
            <FontAwesomeIcon icon={faHeart} className="mx-1 text-red-400 animate-pulse" />
            <span>in India</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-navy-800 hover:bg-navy-700 text-navy-300 hover:text-white transition-all duration-200 border border-navy-700 hover:border-navy-600 shadow-lg"
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
} 