'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, Building2, ArrowRight, FolderKanban } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import Link from 'next/link';

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const featuredProjects = getFeaturedProjects().slice(0, 3); // Strictly showing top 3

  return (
    <div ref={ref} className="py-20 relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">

        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground font-display">Featured Projects</h2>
              <p className="text-muted-foreground mt-1 text-sm">A selection of my recent translation work.</p>
            </div>
          </div>

          <Link href="/work">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col p-5 rounded-2xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                  {project.category}
                </span>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-border/50 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                    {project.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    {project.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
