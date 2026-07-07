import { useState } from 'react';
import { Code2, Terminal, Database, Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { skillsList } from '../data';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      skills: skillsList.filter(s => s.category === 'programming'),
      color: 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20',
      proficiency: {
        'Java': 85,
        'Python': 80
      }
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      skills: skillsList.filter(s => s.category === 'web'),
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
      proficiency: {
        'HTML5': 90,
        'CSS3': 88,
        'JavaScript': 85
      }
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <Database className="w-5 h-5 text-amber-500" />,
      skills: skillsList.filter(s => s.category === 'database'),
      color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20',
      badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20',
      proficiency: {
        'MySQL': 82
      }
    },
    {
      id: 'tools',
      title: 'Tools & Ecosystem',
      icon: <Wrench className="w-5 h-5 text-purple-500" />,
      skills: skillsList.filter(s => s.category === 'tools'),
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
      badgeColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20',
      proficiency: {
        'Flutter': 78,
        'VS Code': 90
      }
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-950/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 border border-emerald-500/15">
              <ShieldCheck className="w-3.5 h-3.5" /> Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              My Core Skill Set
            </h2>
            <p className="font-sans text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              A detailed breakdown of my technical proficiencies and workspace tools.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left">
          {categories.map((cat, categoryIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              className={`rounded-2xl border bg-linear-to-br ${cat.color} bg-white dark:bg-slate-900/40 p-6 md:p-8 backdrop-blur-xs flex flex-col justify-between hover:shadow-lg hover:border-indigo-500/10 transition-all duration-300`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-white dark:bg-slate-950 rounded-xl border border-slate-200/40 dark:border-slate-800/60 shadow-xs">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills meters */}
                <div className="space-y-5">
                  {cat.skills.map((skill) => {
                    const skillName = skill.name === 'HTML5' ? 'HTML5' : skill.name === 'CSS3' ? 'CSS3' : skill.name;
                    const level = cat.proficiency[skillName as keyof typeof cat.proficiency] || 80;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        className="space-y-1.5"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-display font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                            {skill.name}
                            {isHovered && (
                              <motion.span
                                layoutId="sparkle-skill"
                                className="inline-flex"
                              >
                                <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                              </motion.span>
                            )}
                          </span>
                          <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {level}%
                          </span>
                        </div>
                        
                        {/* Dynamic Progress Meter Track */}
                        <div className="h-2 bg-slate-200/60 dark:bg-slate-850/60 rounded-full overflow-hidden border border-slate-200/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                            className="h-full rounded-full bg-linear-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tag Pill summary */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-200/50 dark:border-slate-800/40">
                {cat.skills.map((skill) => (
                  <span
                    key={`tag-${skill.name}`}
                    className={`px-3 py-1 text-xs font-mono font-medium rounded-full border ${cat.badgeColor}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
