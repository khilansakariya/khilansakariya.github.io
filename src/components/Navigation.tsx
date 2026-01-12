'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, User, Briefcase, Mail, FolderKanban, FileText, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Work', href: '/work', icon: FolderKanban },
  { name: 'Skills', href: '/skills', icon: Zap },
  { name: 'About', href: '/about', icon: User },
  { name: 'Resume', href: '/resume.pdf', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent py-2"
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-display hover:opacity-80 transition-opacity"
            >
              Khilan Sakariya
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-1 bg-secondary/50 p-1.5 rounded-full border border-border/50">
                {navItems.map((item) => {
                  const isActive = item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname?.startsWith(`${item.href}/`);
                  const isPdf = item.href.endsWith('.pdf');
                  const LinkComponent = isPdf ? 'a' : Link;
                  const linkProps = isPdf
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {};
                  return (
                    <LinkComponent
                      key={item.name}
                      href={item.href}
                      {...linkProps}
                      className={clsx(
                        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        {item.name}
                      </span>
                    </LinkComponent>
                  );
                })}
              </div>

              <div className="pl-4 border-l border-border">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[64px] sm:top-[80px] left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden overflow-hidden"
          >
            <div className="container-max px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isPdf = item.href.endsWith('.pdf');
                const LinkComponent = isPdf ? 'a' : Link;
                const linkProps = isPdf
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                return (
                  <LinkComponent
                    key={item.name}
                    href={item.href}
                    {...linkProps}
                    className={clsx(
                      "flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div className={clsx(
                      "p-2 rounded-lg",
                      isActive ? "bg-white/20" : "bg-primary/10"
                    )}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">{item.name}</span>
                  </LinkComponent>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}