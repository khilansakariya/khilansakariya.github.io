'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/khilan005/',
    icon: Linkedin,
    color: 'hover:text-blue-500'
  },
  {
    name: 'X',
    url: 'https://twitter.com/khilan005',
    icon: Twitter,
    color: 'hover:text-sky-500'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/khilan.sk',
    icon: Instagram,
    color: 'hover:text-pink-500'
  },
  {
    name: 'ProZ',
    url: 'http://www.proz.com/profile/3562571',
    icon: Globe,
    color: 'hover:text-green-500'
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
    emailjs.init('EfjQckHjsdIeZaJSa');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        to_name: 'Khilan Sakariya'
      };

      await emailjs.send(
        'default_service',
        'template_twaupt3',
        templateParams,
        'EfjQckHjsdIeZaJSa'
      );

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }

      document.dispatchEvent(new CustomEvent('contact-submit'));
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      alert('Thank you for your message! I\'ll get back to you soon.');

    } catch (error: unknown) {
      console.error('Email sending failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitStatus('error');
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-display">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Ready to start your translation project? Let's discuss how I can help you achieve your goals.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start container-max px-4">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-display">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-medium text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:khilansakariya123@yahoo.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all text-sm sm:text-base"
                  >
                    khilansakariya123@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-medium text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-base font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-secondary text-muted-foreground transition-all duration-200 hover:scale-105 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                placeholder="Project type or inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                placeholder="Tell me about your project requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
