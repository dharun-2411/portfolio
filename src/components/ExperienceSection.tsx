import { Briefcase, Calendar, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Internship } from '../types';
import { internshipList } from '../data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/30 dark:bg-slate-950/20 relative">
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
              <Briefcase className="w-3.5 h-3.5" /> Career Trace
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Professional Internships
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              Hands-on engineering experience gathered from developer placements.
            </p>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto relative text-left">
          {/* Vertical Trace Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 md:hidden" />

          {/* Timeline Cards */}
          <div className="space-y-12 relative">
            {internshipList.map((intern, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={intern.id} className="relative flex flex-col md:flex-row items-stretch">
                  
                  {/* Timeline Node marker */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 -translate-x-1/2 z-10 shadow-sm" />

                  {/* Left Column (Desktop Layout) */}
                  <div className={`w-full md:w-1/2 pr-0 md:pr-10 md:text-right flex flex-col justify-center ${
                    isEven ? 'md:order-1' : 'md:order-2 md:pl-10 md:pr-0 md:text-left'
                  }`}>
                    {/* Only show dates or metadata on opposite side of timeline for desktop */}
                    <div className="hidden md:block">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {intern.duration}
                      </span>
                      <h4 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mt-1">
                        {intern.company}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column / Actual Card Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? 'md:order-2 md:pl-10' : 'md:order-1 md:pr-10'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-white dark:bg-slate-900/40 border border-slate-150 dark:border-slate-800/60 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative group"
                    >
                      {/* Mobile header (shows inside the card) */}
                      <div className="md:hidden space-y-1.5 mb-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                          {intern.duration}
                        </span>
                        <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                          {intern.company}
                        </h4>
                      </div>

                      {/* Role & Core Description */}
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-lg text-indigo-600 dark:text-indigo-400">
                          {intern.role}
                        </h3>
                        <p className="font-sans text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
                          {intern.description}
                        </p>
                      </div>

                      {/* Accomplishment highlights list */}
                      <ul className="mt-5 space-y-3 pt-4 border-t border-slate-100 dark:border-slate-850">
                        {intern.highlights.map((highlight, index) => (
                          <li key={index} className="flex gap-2.5 items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                            <CheckSquare className="w-4 h-4 text-emerald-500 mt-0.5 flex-none" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
