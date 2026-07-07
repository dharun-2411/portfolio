import { GraduationCap, Award, Cpu, FileCheck, MapPin, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, educationList, certificationList, patentDetails } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
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
              <BookOpen className="w-3.5 h-3.5" /> About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              My Profile & Academic Credentials
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              A glimpse into my core background, formal education, and research innovations.
            </p>
          </motion.div>
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Biography & Education */}
          <div className="lg:col-span-7 space-y-10">
            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800/40 p-6 md:p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="font-sans text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>SNS College of Engineering</span>
                </div>
              </div>
            </motion.div>

            {/* Academic History */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Education Journey
              </h3>

              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative flex gap-4 p-5 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/55 rounded-xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex-none flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1 text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full self-start sm:self-center">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-slate-600 dark:text-slate-400">
                        {edu.institution}
                      </p>
                      <div className="pt-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        {edu.grade}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Patent & Certifications */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Patent Card - Styled with premium blueprint theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/20 p-6 md:p-8 rounded-2xl text-left shadow-xl group text-white"
            >
              {/* Blueprint Grid Lines Pattern */}
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
              
              {/* Glowing Corner */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all duration-500" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-mono uppercase font-bold tracking-wider">
                    Patent Published
                  </span>
                  <Cpu className="w-6 h-6 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg leading-snug tracking-tight text-white mb-2">
                    {patentDetails.title}
                  </h4>
                  <div className="w-12 h-0.5 bg-indigo-500 rounded my-3" />
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {patentDetails.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-indigo-500/10 font-mono text-[10px] text-slate-400">
                  <span>Topic: IoT & Deep Learning</span>
                  <span className="font-semibold text-indigo-300">{patentDetails.status}</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications Block */}
            <div className="space-y-5 text-left">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Professional Certifications
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {certificationList.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 p-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/50 rounded-xl shadow-sm hover:border-indigo-500/20 dark:hover:border-indigo-400/20 transition-all"
                  >
                    <div className="flex-none flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm">
                        {cert.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
