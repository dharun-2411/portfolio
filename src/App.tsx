import { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Award, Terminal, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

// Modular Components
import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import HeroCodeEditor from './components/HeroCodeEditor';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

// Static Info
import { personalInfo } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Synchronize state with HTML class list for Tailwind v4 dark modifiers
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden relative">
      
      {/* 1. Dynamic Canvas network background */}
      <CanvasBackground isDarkMode={isDarkMode} />

      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-20 pointer-events-none animate-glow" />
      <div className="absolute top-2/3 right-1/10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-20 pointer-events-none animate-glow" style={{ animationDelay: '4s' }} />

      {/* 2. Floating Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* 3. Hero / Home Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden select-none"
      >
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 grid-pattern-light dark:grid-pattern-dark -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            
            {/* Left Hero Block: Copy / CTAs */}
            <div className="lg:col-span-6 space-y-8 text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15 font-mono text-xs font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                <span>Open for Internships & Collaborations</span>
              </motion.div>

              {/* Main Typography */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none"
                >
                  Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name}</span>
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-display text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300"
                >
                  {personalInfo.role}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-sans text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl leading-relaxed"
                >
                  {personalInfo.tagline} {personalInfo.about.slice(0, 108)}...
                </motion.p>
              </div>

              {/* Credentials highlights summary */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
              >
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 shadow-xs">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Coimbatore, TN</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 shadow-xs">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">CGPA: 8.18 (B.E.)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60 shadow-xs col-span-2 sm:col-span-1">
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Patent Publisher</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-sm font-bold shadow-md hover:shadow-indigo-500/15 hover:shadow-lg active:scale-95 transition-all"
                >
                  Explore Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-sans text-sm font-bold active:scale-95 transition-all"
                >
                  Contact Me
                </a>
              </motion.div>

            </div>

            {/* Right Hero Block: Interactive Code Sandbox */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 flex items-center justify-center w-full"
            >
              <HeroCodeEditor />
            </motion.div>

          </div>
        </div>

        {/* Floating scroll down element */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xs hover:border-indigo-500 transition-colors"
            title="Scroll Down"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* 4. Content Division Layout (Spanning all single-page section requests) */}
      <div className="relative">
        {/* Horizontal divider lines */}
        <div className="h-[1px] bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <AboutSection />
        
        <div className="h-[1px] bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <SkillsSection />
        
        <div className="h-[1px] bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <ExperienceSection />
        
        <div className="h-[1px] bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <ProjectsSection />
        
        <div className="h-[1px] bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <ContactSection />
      </div>

      {/* 5. Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 text-left font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                Dharun <span className="text-indigo-400">J</span>
              </span>
              <p className="text-xs text-slate-500">
                Aspiring Full Stack Developer • Coimbatore, India
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            </div>

            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Dharun J. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
