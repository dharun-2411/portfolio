import { useState } from 'react';
import { ExternalLink, Github, FolderGit2, X, PlusCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { projectList } from '../data';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4 border border-indigo-500/15">
              <FolderGit2 className="w-3.5 h-3.5" /> Selected Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              My Engineering Projects
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              A curated display of full-stack products, hybrid applications, and interactive systems.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projectList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between bg-white dark:bg-slate-900/40 border border-slate-150 dark:border-slate-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/20 dark:hover:border-indigo-400/20 transition-all duration-300"
            >
              <div className="p-6 md:p-8 space-y-5">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action trigger */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-600 font-sans text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Learn More</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal popup using AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Dialog Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 p-2 rounded-lg text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Project Overview
                    </h4>
                    <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Core Implementation Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {selectedProject.highlights.map((highlight, index) => (
                        <li key={index} className="flex gap-3 items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-none" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map(t => (
                        <span
                          key={`modal-tech-${t}`}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outbound/Social CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-sans text-sm font-semibold shadow-sm transition-all active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      <span>Explore Repository</span>
                    </a>
                    <button
                      onClick={() => alert(`Launching live preview environment for ${selectedProject.title}...`)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-sm font-semibold shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live App Preview</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
