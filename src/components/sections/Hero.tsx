'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, FileText, Linkedin, Twitter, Instagram, Globe, CheckCircle, Languages, Award, Clock } from 'lucide-react';

export function Hero() {


  const handleViewResume = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_view', {
        event_category: 'engagement',
        event_label: 'hero_resume_button',
        value: 1
      });
    }
    document.dispatchEvent(new CustomEvent('resume-click'));
    window.open('/resume.pdf', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container-max px-4 sm:px-6 lg:px-8 py-12 lg:py-20 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto"
      >
        {/* Main Profile Card - Large (2x2 on desktop) */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-primary/10 transition-colors duration-500"></div>

          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>

            <h2 className="text-xl sm:text-2xl text-primary font-medium mb-2 font-display">
              Translate Complexity into Simplicity!
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 font-display leading-tight tracking-tight whitespace-nowrap">
              Khilan Sakariya
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-2 font-medium">
              Professional Gujarati Translator & Linguistic Expert
            </p>
            <p className="text-muted-foreground/80 text-base leading-relaxed max-w-lg">
              Enabling accurate, culturally appropriate translations for academic, medical, and business content.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Project
            </Link>
            <button
              onClick={handleViewResume}
              className="px-6 py-3 bg-secondary text-foreground hover:bg-secondary/80 rounded-full font-medium transition-all duration-300 flex items-center"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Resume
            </button>
          </div>
        </motion.div>

        {/* Stats Card 1 - Experience */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors"
        >
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-3xl font-bold text-foreground font-display">5+</span>
          <span className="text-sm text-muted-foreground">Years Experience</span>
        </motion.div>

        {/* Stats Card 2 - Projects/Words */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors"
        >
          <div className="p-3 bg-green-500/10 text-green-500 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-3xl font-bold text-foreground font-display">1M+</span>
          <span className="text-sm text-muted-foreground">Words Translated</span>
        </motion.div>

        {/* Services List - Tall (1x2) */}
        <motion.div
          variants={itemVariants}
          className="md:row-span-2 glass-card p-6 rounded-3xl flex flex-col group"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-foreground">Services</h3>
          </div>

          <div className="space-y-4 flex-1">
            {[
              "Document Translation",
              "MTPE Services",
              "Website Localization",
              "Medical Translation",
              "Legal & Business"
            ].map((service, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Links - Horizontal */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 glass-card p-6 rounded-3xl flex items-center justify-between"
        >
          <h3 className="font-semibold text-foreground hidden sm:block">Connect Online</h3>
          <div className="flex gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/khilan005/", color: "hover:text-blue-500" },
              { icon: Twitter, href: "https://twitter.com/khilan005", color: "hover:text-sky-500" },
              { icon: Instagram, href: "https://www.instagram.com/khilan.sk", color: "hover:text-pink-500" },
              { icon: Globe, href: "http://www.proz.com/profile/3562571", color: "hover:text-green-500" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-secondary rounded-xl text-muted-foreground transition-all hover:scale-110 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Specialization Pill - Small */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-6 rounded-3xl flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20"
        >
          <span className="text-primary font-bold text-lg">EN ↔ GU</span>
          <span className="text-xs text-primary/80 uppercase tracking-wider mt-1">Specialist</span>
        </motion.div>

      </motion.div>
    </div>
  );
}