'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobe, faStethoscope, faLaptopCode, faGraduationCap, faLayerGroup,
    faLanguage, faToolbox, faFileAlt, faDesktop
} from '@fortawesome/free-solid-svg-icons';

const keySkills = [
    'Gujarati Translation',
    'English Translation',
    'Proofreading',
    'LQA Testing',
    'Academic Content',
    'Technical Documents',
    'Subtitling',
    'Transcreation',
    'Quality Assurance',
    'Project Management',
];

const languages = [
    { name: 'Gujarati', level: 'Native', code: 'GU' },
    { name: 'English', level: 'Fluent', code: 'EN' },
    { name: 'Hindi', level: 'Fluent', code: 'HI' }
];

const toolset = [
    { category: 'Translation Tools', icon: faToolbox, items: ['SDL Trados', 'MemoQ', 'Wordfast', 'Google Translate API'] },
    { category: 'Software', icon: faDesktop, items: ['Microsoft Office', 'Adobe Acrobat', 'CAT Tools', 'Project Management Tools'] },
    { category: 'Document Types', icon: faFileAlt, items: ['Legal Documents', 'Technical Manuals', 'Business Contracts', 'Website Content'] }
];

const domains = [
    {
        name: 'Localization',
        icon: faGlobe,
        description: 'Adapting content culturally and linguistically for specific target markets.'
    },
    {
        name: 'Medical',
        icon: faStethoscope,
        description: 'Accurate translation of clinical trials, medical reports, and healthcare content.'
    },
    {
        name: 'UI/UX',
        icon: faLaptopCode,
        description: 'Translating user interfaces and experiences for apps and websites.'
    },
    {
        name: 'Education',
        icon: faGraduationCap,
        description: 'Translating educational materials, e-learning courses, and academic texts.'
    },
    {
        name: 'General',
        icon: faLayerGroup,
        description: 'Versatile translation for general business, marketing, and communication needs.'
    }
];

export function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div ref={ref} className="space-y-20">

            {/* Languages & Core Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Languages */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Languages
                    </h2>
                    <div className="grid gap-4">
                        {languages.map((lang) => (
                            <motion.div
                                key={lang.name}
                                variants={itemVariants}
                                className="glass-card p-4 rounded-xl flex items-center justify-between hover:border-primary/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                        {lang.code}
                                    </div>
                                    <span className="text-lg font-medium text-foreground">{lang.name}</span>
                                </div>
                                <span className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground border border-border">
                                    {lang.level}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Proficiencies */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Key Proficiencies
                    </h2>
                    <div className="flex flex-wrap gap-3 content-start">
                        {keySkills.map((skill) => (
                            <motion.div
                                key={skill}
                                variants={itemVariants}
                                className="px-4 py-2 bg-card glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors rounded-xl border border-border cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Tools & Document Types */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Tools & Technology
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {toolset.map((tool, index) => (
                            <motion.div
                                key={tool.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                className="glass-card p-6 rounded-2xl hover:border-primary/40 group transition-all h-full"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <FontAwesomeIcon icon={tool.icon} className="text-primary text-xl" />
                                    <h3 className="text-lg font-semibold text-foreground">{tool.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {tool.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-muted-foreground text-sm">
                                            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Domains Section */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        Specialized Domains
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {domains.map((domain, index) => (
                            <motion.div
                                key={domain.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                className="glass-card p-6 rounded-2xl hover:border-primary/40 group transition-all"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={domain.icon} className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">{domain.name}</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {domain.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
    );
}
