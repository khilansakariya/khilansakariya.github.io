'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  // faPhone, // Commented out - phone section disabled
  faMapMarkerAlt, 
  faPaperPlane,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faXTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

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

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('EfjQckHjsdIeZaJSa');
    
    // EmailJS initialized successfully
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject, // Changed from 'subject' to 'title' to match template
        message: formData.message,
        to_name: 'Khilan Sakariya'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'default_service', // Changed from 'khilan_github' to 'default_service'
        'template_twaupt3', // Your EmailJS template ID
        templateParams,
        'EfjQckHjsdIeZaJSa' // Your EmailJS public key
      );

      // Email sent successfully
      
      // Track contact form submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
      
      // Dispatch custom event for analytics
      document.dispatchEvent(new CustomEvent('contact-submit'));
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      
      // Show success message
      alert('Thank you for your message! I\'ll get back to you soon.');
      
    } catch (error: unknown) {
      console.error('Email sending failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error details:', {
        message: errorMessage,
        error
      });
      setSubmitStatus('error');
      
      // Show detailed error message
      alert(`Email sending failed: ${errorMessage}. Please check the console for details or contact me directly at khilansakariya123@yahoo.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-primary-400 mx-auto"></div>
        <p className="text-navy-300 mt-4 max-w-2xl mx-auto">
          Ready to start your translation project? Let's discuss how I can help you achieve your goals.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Let's Connect
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-green-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-medium text-white mb-1">Email</h4>
                <a 
                  href="mailto:khilansakariya123@yahoo.com"
                  className="text-sm sm:text-base text-navy-300 hover:text-green-400 transition-colors duration-200 break-all"
                >
                  khilansakariya123@yahoo.com
                </a>
              </div>
            </div>

            {/* Phone section - commented out for now
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faPhone} size="lg" className="text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <a 
                  href="tel:+91-XXXXXXXXXX"
                  className="text-navy-300 hover:text-green-400 transition-colors duration-200"
                >
                  +91-XXXXXXXXXX
                </a>
              </div>
            </div>
            */}

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="text-green-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-sm sm:text-base text-navy-300">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-navy-800 text-navy-300 transition-all duration-200 ${social.color}`}
                  title={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-base"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Project type or inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-3 bg-navy-800 border border-navy-600 rounded-lg text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 resize-none text-base"
                placeholder="Tell me about your project requirements..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Send Message
                </span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 