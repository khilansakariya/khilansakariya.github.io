'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, MapPin, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

export function Footer() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (link: string) => {
    if (link === 'Archive') {
      router.push('/archive');
    } else if (link === 'Resume') {
      window.open('/resume.pdf', '_blank');
    } else {
      const currentPath = window.location.pathname;

      if (currentPath === '/archive') {
        router.push(`/#${link.toLowerCase()}`);
      } else {
        document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
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
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-lg font-display">K</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-display">Khilan Sakariya</h3>
                <p className="text-muted-foreground text-sm">Professional Translator</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Specializing in English to Gujarati translation services with expertise in medical, technical, and marketing documents.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg bg-background border border-border text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-lg`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
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
            <h4 className="text-foreground font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Experience', 'Skills', 'Resume', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavigation(link)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group"
                >
                  <span className="flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link}
                  </span>
                </button>
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
            <h4 className="text-foreground font-semibold mb-6 text-lg">Services</h4>
            <div className="space-y-3">
              {[
                'Document Translation',
                'Legal Translation',
                'Technical Translation',
                'Business Translation',
                'Website Localization'
              ].map((service, index) => (
                <div
                  key={service}
                  className="text-muted-foreground text-sm flex items-center group cursor-default"
                >
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-200"></span>
                  <span className="group-hover:text-primary transition-colors duration-200">{service}</span>
                </div>
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
            <h4 className="text-foreground font-semibold mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground text-sm font-medium">Email</p>
                  <a
                    href="mailto:khilansakariya123@yahoo.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm break-all"
                  >
                    khilansakariya123@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground text-sm font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">Surat, Gujarat, India</p>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                  Available for Remote Work
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center text-muted-foreground text-sm mb-4 sm:mb-0">
            <span>© {new Date().getFullYear()} Khilan Sakariya. Made with</span>
            <Heart className="mx-1.5 w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all duration-200 hover:-translate-y-1 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
