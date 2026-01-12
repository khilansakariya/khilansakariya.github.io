'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Building2 } from 'lucide-react';
import { projects } from '@/data/projects';

export function AllProjects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div ref={ref} className="relative">
            {/* All Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.05 }}
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

                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
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

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-2">
                                {project.tech.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
