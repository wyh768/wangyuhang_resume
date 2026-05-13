'use client';

import { motion } from 'framer-motion';
import { ResumeData } from '@/lib/types';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease } }),
};

export default function DarkTech({ data }: { data: ResumeData }) {
  const { personal, summary, aboutMe, education, services, stats, experience, testimonials, projects, awards, skills, leadership, languages, interests } = data;

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)' }} />

      {/* Navigation */}
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#00ff4115]">
        <div className="max-w-5xl mx-auto px-8 h-14 flex items-center justify-between text-xs">
          <span className="text-[#00ff41] font-bold tracking-wider">&gt;_ {personal.nameEn || personal.name}</span>
          <div className="flex items-center gap-6 text-gray-500">
            <a href="#about" className="hover:text-[#00ff41] transition-colors">about()</a>
            <a href="#services" className="hover:text-[#00ff41] transition-colors">services()</a>
            <a href="#projects" className="hover:text-[#00ff41] transition-colors">projects()</a>
            <a href="#contact" className="hover:text-[#00ff41] transition-colors">contact()</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-8 pt-16">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-8">
            <span className="text-xs text-gray-600">~/portfolio</span>
            <span className="text-[#00ff41] animate-pulse ml-1">▊</span>
          </motion.div>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-gray-600 text-sm mb-4">// name</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-2 text-white">{personal.name}</h1>
            {personal.nameEn && <h2 className="text-3xl lg:text-4xl text-[#00ff41] font-bold tracking-tight mb-8">{personal.nameEn}</h2>}
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
            <p className="text-gray-600 text-sm mb-2">// title</p>
            <p className="text-xl text-[#00ff41]">{personal.title}</p>
          </motion.div>
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mb-12 max-w-2xl">
            <p className="text-gray-600 text-sm mb-2">// summary</p>
            <p className="text-gray-400 leading-relaxed">{summary}</p>
          </motion.div>
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-4">
            <a href="#contact" className="px-6 py-2.5 bg-[#00ff41] text-[#050505] text-sm font-bold rounded hover:bg-[#00cc33] transition-colors">./contact.sh</a>
            <a href="#projects" className="px-6 py-2.5 border border-[#00ff4130] text-[#00ff41] text-sm rounded hover:border-[#00ff41] transition-colors">ls projects/</a>
          </motion.div>
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            {personal.email && <div><span className="text-gray-600">mail:</span><br /><span className="text-gray-400">{personal.email}</span></div>}
            {personal.phone && <div><span className="text-gray-600">tel:</span><br /><span className="text-gray-400">{personal.phone}</span></div>}
            {personal.github && <div><span className="text-gray-600">github:</span><br /><a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-[#00ff41] hover:underline">{personal.github.replace('https://', '')}</a></div>}
            {personal.location && <div><span className="text-gray-600">loc:</span><br /><span className="text-gray-400">{personal.location}</span></div>}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// about.json</p>
          </motion.div>
          <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm text-gray-400 leading-[1.65] max-w-2xl mb-12">{aboutMe}</motion.p>
          <div className="grid grid-cols-3 gap-8 max-w-md">
            {[{ n: '2+', l: '年经验' }, { n: '20+', l: '项目' }, { n: '10+', l: '客户' }].map((item, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-2xl font-bold text-[#00ff41]">{item.n}</p>
                <p className="text-xs text-gray-600">{item.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// services.json</p>
          </motion.div>
          <div className="space-y-4">
            {services.map((svc, i) => (
              <motion.div key={svc.id} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4 p-4 border border-[#ffffff08] rounded hover:border-[#00ff4130] transition-colors group">
                <span className="text-xs text-[#00ff41] bg-[#00ff4115] px-1.5 py-0.5 rounded">{svc.id}</span>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-[#00ff41] transition-colors mb-1">{svc.title}</p>
                  <p className="text-xs text-gray-500">{svc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// stats.log</p>
          </motion.div>
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-4">
                <span className="text-sm text-[#00ff41] font-bold w-16">{stat.value}</span>
                <div className="flex-1 h-2 bg-[#151515] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease }}
                    className="h-full bg-[#00ff41] rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-600 w-24">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// experience_and_education.log</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-gray-600 mb-6"># experience</p>
              {experience.map((exp, i) => (
                <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4 group">
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm font-bold text-white group-hover:text-[#00ff41] transition-colors">{exp.role}</p>
                    <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs text-gray-500">{exp.company}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-6"># education</p>
              {education.map((edu, i) => (
                <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6 group">
                  <h4 className="text-base font-bold text-white group-hover:text-[#00ff41] transition-colors">{edu.school}</h4>
                  <p className="text-xs text-gray-500">{edu.major} · {edu.degree}</p>
                  {edu.gpa && <p className="text-xs text-[#00ff41] mt-1">GPA: {edu.gpa}</p>}
                </motion.div>
              ))}
              <p className="text-xs text-gray-600 mt-6 mb-3"># awards</p>
              {awards.map((a, i) => (
                <motion.div key={`a-${i}`} custom={i + 3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-2 mb-2">
                  <span className="text-[10px] text-[#00ff41] bg-[#00ff4115] px-1.5 py-0.5 rounded">{i + 1}</span>
                  <p className="text-xs text-gray-400">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// projects/</p>
          </motion.div>
          <div className="space-y-8">
            {projects.map((proj, i) => (
              <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                {proj.video && (
                  <div className="mb-4 overflow-hidden rounded border border-[#00ff4115]">
                    <video src={proj.video} controls playsInline preload="metadata" className="w-full max-h-[500px] object-contain bg-[#0a0a0a]" />
                  </div>
                )}
                {proj.image && !proj.video && (
                  <div className="mb-4 overflow-hidden rounded">
                    <img src={proj.image} alt={proj.name} className="w-full max-h-[400px] object-cover" />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ff41] transition-colors flex items-center gap-2">
                    <span className="text-[#00ff41] opacity-30 text-sm">▸</span>{proj.name}
                  </h3>
                  <span className="text-xs text-gray-600 font-mono">{proj.period}</span>
                </div>
                {proj.role && <p className="text-xs text-[#00ff41] mb-2">{proj.role}</p>}
                <ul className="space-y-1 ml-4">
                  {proj.description.map((d, j) => (
                    <li key={j} className="text-xs text-gray-500 flex gap-2">
                      <span className="text-[#00ff41] opacity-30">│</span><span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-24 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-8">// skills.json</p>
          </motion.div>
          <div className="space-y-8">
            {skills.map((group, i) => (
              <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs text-gray-600 mb-3">&quot;{group.category}&quot;: [</p>
                <div className="flex flex-wrap gap-2 ml-4">
                  {group.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 text-xs border border-[#00ff4120] text-[#00ff41] rounded hover:border-[#00ff41] hover:bg-[#00ff4108] transition-all cursor-default">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-2">]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-32 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs text-gray-600 mb-6">// contact.sh</p>
          </motion.div>
          <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl lg:text-5xl font-bold text-white mb-12">
            <span className="text-[#00ff41]">$</span> get_in_touch
          </motion.p>
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 text-sm">
            {personal.email && <p><span className="text-gray-600">echo &quot;{personal.email}&quot; | mail -s &quot;Hello&quot; me</span></p>}
            {personal.github && <p><span className="text-gray-600">git clone {personal.github}.git</span></p>}
            {personal.phone && <p><span className="text-gray-600">tel://{personal.phone}</span></p>}
            {personal.location && <p><span className="text-gray-600">cd {personal.location}</span></p>}
          </motion.div>
          <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-4 text-xs text-gray-700 mt-16">
            {languages.map((l, i) => <span key={i}>{l}</span>)}
            {interests.map((int, i) => <span key={i}>{int}</span>)}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-[10px] text-gray-700">
          <span>&copy; {new Date().getFullYear()} {personal.name}</span>
          <span className="text-[#00ff41] opacity-30">exit 0</span>
        </div>
      </footer>
    </div>
  );
}
