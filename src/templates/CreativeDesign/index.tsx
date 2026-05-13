'use client';

import { motion } from 'framer-motion';
import { ResumeData } from '@/lib/types';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease } }),
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CreativeDesign({ data }: { data: ResumeData }) {
  const { personal, summary, aboutMe, education, services, stats, experience, testimonials, projects, awards, skills, leadership, languages, interests } = data;
  const accent = '#f97316';

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-lg font-bold">{personal.nameEn || personal.name}</span>
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">关于</a>
            <a href="#services" className="hover:text-white transition-colors">服务</a>
            <a href="#projects" className="hover:text-white transition-colors">项目</a>
            <a href="#contact" className="px-5 py-2 rounded-full text-sm font-medium text-[#0e0e0e] hover:opacity-90 transition-opacity" style={{ backgroundColor: accent }}>联系我</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-8 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: accent, opacity: 0.15 }} />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl bg-blue-500 opacity-10" />
        </div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="text-sm tracking-widest uppercase text-gray-500 mb-6">
                {personal.title}
              </motion.p>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                打造流畅的<br />
                <span style={{ color: accent }}>数字化</span>体验
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="max-w-lg text-gray-400 text-lg leading-relaxed">
                {summary}
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-4 mt-10">
                <a href="#contact" className="px-8 py-3.5 rounded-full text-sm font-medium text-[#0e0e0e] hover:opacity-90 transition-opacity" style={{ backgroundColor: accent }}>开始对话</a>
                <a href="#projects" className="px-8 py-3.5 border border-white/10 rounded-full text-sm font-medium hover:border-white/30 transition-colors">查看项目</a>
              </motion.div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative">
                {personal.photo && (
                  <div className="relative">
                    <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10">
                      <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-2 -right-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: accent, color: '#0e0e0e' }}>
                      Hi, 我是{personal.name}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-8">关于我</motion.h2>
          <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-lg leading-[1.65] text-gray-300 max-w-3xl mb-12">{aboutMe}</motion.p>
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            {[{ n: '2+', l: '年经验' }, { n: '20+', l: '项目' }, { n: '10+', l: '客户' }].map((item, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-3xl font-bold" style={{ color: accent }}>{item.n}</p>
                <p className="text-xs text-gray-500 mt-1">{item.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-4">我的服务</motion.h2>
          <motion.h3 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12">核心能力</motion.h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
              <motion.div key={svc.id} variants={fadeUp} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs" style={{ color: accent }}>[{svc.id}]</span>
                  <span className="text-gray-600 group-hover:text-orange-400 transition-colors">↗</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">{svc.title}</h3>
                <p className="text-sm text-gray-400 leading-[1.5]">{svc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-4">成果数据</motion.h2>
          <motion.h3 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12">用数据说话</motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-3xl font-bold mb-1" style={{ color: accent }}>{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="px-8 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-8">工作经历</motion.h2>
              {experience.map((exp, i) => (
                <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="py-4 border-b border-white/5 group">
                  <div className="flex justify-between items-baseline">
                    <p className="text-base font-semibold group-hover:text-orange-400 transition-colors">{exp.role}</p>
                    <span className="text-xs text-gray-600 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-8">教育 & 荣誉</motion.h2>
              {education.map((edu, i) => (
                <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
                  <h4 className="text-lg font-bold">{edu.school}</h4>
                  <p className="text-sm text-gray-500">{edu.major} · {edu.degree}</p>
                  {edu.gpa && <p className="text-sm mt-1" style={{ color: accent }}>GPA {edu.gpa}</p>}
                </motion.div>
              ))}
              {awards.map((a, i) => (
                <motion.div key={`a-${i}`} custom={i + 3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: `${accent}20`, color: accent }}>{i + 1}</span>
                  <p className="text-sm text-gray-400">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-4">项目经历</motion.h2>
          <motion.h3 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12">我的项目</motion.h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {projects.map((proj, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                {proj.video && (
                  <div className="mb-6 overflow-hidden rounded-xl border border-white/10">
                    <video src={proj.video} controls playsInline preload="metadata" className="w-full max-h-[500px] object-contain bg-[#0a0a0a]" />
                  </div>
                )}
                {proj.image && !proj.video && (
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img src={proj.image} alt={proj.name} className="w-full max-h-[400px] object-cover" />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                  <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{proj.name}</h3>
                  <span className="text-sm text-gray-500 font-mono">{proj.period}</span>
                </div>
                {proj.role && <p className="text-sm mb-3" style={{ color: accent }}>{proj.role}</p>}
                <ul className="space-y-1.5">
                  {proj.description.map((d, j) => (
                    <li key={j} className="text-sm text-gray-400 flex gap-2"><span style={{ color: accent }}>•</span>{d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-4">客户评价</motion.h2>
          <motion.h3 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-12">他们怎么说</motion.h3>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#222] flex items-center justify-center text-sm font-bold text-[#888]">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-600">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-[1.7] text-gray-400">{t.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-12">技能栈</motion.h2>
          <div className="space-y-10">
            {skills.map((group, i) => (
              <motion.div key={i} custom={i + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-4">{group.category}</p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, j) => (
                    <span key={j} className="px-4 py-2 rounded-full text-sm border border-white/10 text-gray-300 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300 cursor-default">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: accent }} />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-sm tracking-widest uppercase text-gray-500 mb-6">联系方式</motion.h2>
          <motion.p custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl lg:text-6xl font-bold mb-12">让我们一起<span style={{ color: accent }}>创造</span></motion.p>
          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-8 text-gray-400">
            {personal.email && <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">{personal.email}</a>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.github && <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>}
            {personal.location && <span>{personal.location}</span>}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-gray-600">
          <span>&copy; {new Date().getFullYear()} {personal.name}</span>
          <span>Next.js</span>
        </div>
      </footer>
    </div>
  );
}
