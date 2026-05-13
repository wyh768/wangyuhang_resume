'use client';

import { motion } from 'framer-motion';
import { ResumeData } from '@/lib/types';

/* ── 动画预设 ── */
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease } }),
};
const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ── 胶囊按钮 ── */
function PillButton({ children, dark = false, href, download }: { children: React.ReactNode; dark?: boolean; href?: string; download?: boolean }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      download={download}
      className={`group inline-flex h-12 items-center gap-4 rounded-full pl-6 pr-2 text-sm font-medium transition-all duration-300 ${
        dark
          ? 'bg-[#050505] text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black'
          : 'border border-[#111] bg-white text-black hover:bg-[#050505] hover:text-white'
      }`}
    >
      <span>{children}</span>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all duration-300 ${
          dark ? 'bg-white text-black group-hover:bg-black group-hover:text-white' : 'bg-[#111] text-white group-hover:bg-white group-hover:text-black'
        }`}
      >
        ↗
      </span>
    </Tag>
  );
}

/* ── Section 标签 ── */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-sm tracking-wider uppercase mb-8 ${light ? 'text-[#A0A0A0]' : 'text-[#7A7A7A]'}`}>{children}</p>;
}

/* ── 主组件 ── */
export default function MinimalPro({ data }: { data: ResumeData }) {
  const { personal, summary, aboutMe, education, services, stats, experience, testimonials, projects, awards, skills, leadership, languages, interests } = data;

  return (
    <div className="text-[#090909]">
      {/* ═══════ Header ═══════ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center justify-between px-6 py-8 md:px-16 lg:px-[72px]"
      >
        <span className="text-2xl font-bold tracking-tight">{personal.nameEn || personal.name}</span>
        <nav className="hidden md:flex items-center gap-10 text-[15px] text-[#7A7A7A]">
          <a href="#about" className="hover:text-[#090909] transition-colors">About</a>
          <a href="#services" className="hover:text-[#090909] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[#090909] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#090909] transition-colors">Contact</a>
        </nav>
        <PillButton href="/resume.pdf" download>下载简历</PillButton>
      </motion.header>

      {/* ═══════ Hero ═══════ */}
      <section className="bg-white px-6 pt-10 pb-20 md:px-16 lg:px-[72px] lg:pt-16 lg:pb-28">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="text-center text-xl text-[#777] mb-8">
          Hello, I am {personal.name}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center font-extrabold uppercase tracking-[-0.06em] leading-[0.92] mb-16"
          style={{ fontSize: 'clamp(48px, 9vw, 140px)' }}
        >
          {personal.nameEn || personal.name}
          <br />
          <span className="text-[#BDBDBD]">{personal.titleEn || 'DEVELOPER'}</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* 左列：简介 + CTA */}
          <div className="lg:col-span-4">
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-[17px] leading-[1.65] text-[#8A8A8A] max-w-[380px] mb-8">
              {summary}
            </motion.p>
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
              <PillButton dark href="#contact">联系我</PillButton>
            </motion.div>
          </div>

          {/* 中列：照片 */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              {personal.photo && (
                <div className="w-[280px] h-[340px] lg:w-[360px] lg:h-[420px] overflow-hidden rounded-sm">
                  <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
                </div>
              )}
            </motion.div>
          </div>

          {/* 右列：浮动 testimonial 卡片 */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="bg-white p-7 w-full max-w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-sm"
            >
              <div className="w-14 h-14 rounded-full bg-[#050505] flex items-center justify-center text-white text-2xl mb-5">&ldquo;</div>
              <p className="text-[15px] leading-[1.7] text-[#555] mb-6">{testimonials[0]?.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F7F7F7] flex items-center justify-center text-xs font-bold text-[#555]">{testimonials[0]?.name[0]}</div>
                <div>
                  <p className="text-sm font-semibold">{testimonials[0]?.name}</p>
                  <p className="text-xs text-[#8A8A8A]">{testimonials[0]?.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ About Me (黑底) ═══════ */}
      <section id="about" className="bg-[#050505] text-white px-6 py-24 md:px-16 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <SectionLabel light>About me</SectionLabel>
          </motion.div>
          <div>
            <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="text-lg leading-[1.65] text-[#F3F3F3] max-w-[760px] mb-14">
              {aboutMe}
            </motion.p>
            <div className="grid grid-cols-3 gap-8 max-w-[600px]">
              {[
                { num: '2+', label: '年经验' },
                { num: '20+', label: '完成项目' },
                { num: '10+', label: '满意客户' },
              ].map((item, i) => (
                <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <p className="text-3xl font-bold mb-1">{item.num}</p>
                  <p className="text-xs text-[#8A8A8A]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Services (白底) ═══════ */}
      <section id="services" className="bg-white px-6 py-24 md:px-16 lg:px-[72px]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel>My Services</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] mb-14">My Expertise</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group bg-[#F7F7F7] border border-[#EFEFEF] p-7 min-h-[150px] rounded-sm cursor-default transition-all duration-300 hover:bg-[#111] hover:-translate-y-1 ${
                i >= 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-[#8A8A8A] group-hover:text-[#666]">[{svc.id}]</span>
                <span className="text-[#111] group-hover:text-white transition-colors">↗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">{svc.title}</h3>
              <p className="text-sm leading-[1.5] text-[#777] group-hover:text-[#BDBDBD] transition-colors">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ Proven Success (黑底柱状图) ═══════ */}
      <section className="bg-[#050505] text-white px-6 py-24 md:px-16 lg:px-[72px]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel light>Proven Success</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-[-0.04em] leading-[1.1] mb-14">
            Fueled By Passion,
            <br />
            Delivering Results!
          </h2>
        </motion.div>
        <div className="flex items-end gap-6 lg:gap-8 h-[260px] overflow-x-auto pb-2">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: `${stat.percentage}%`, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className="flex flex-col items-center justify-end min-w-[120px] lg:min-w-[150px]"
            >
              <span className="text-xl font-medium mb-3">{stat.value}</span>
              <div
                className="w-full bg-[#151515] border border-[#202020] rounded-sm transition-all"
                style={{ height: `${stat.percentage}%` }}
              />
              <span className="text-xs text-[#A0A0A0] mt-3 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ Experience (白底) ═══════ */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-16">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] leading-[1.1] mb-8">
              My Working
              <br />
              Experience
            </h2>
            <PillButton dark href="#contact">联系我</PillButton>
          </motion.div>
          <div>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 py-5 border-b border-[#E9E9E9]"
              >
                <p className="text-lg font-semibold">{exp.role}</p>
                <div className="text-sm text-[#777] text-left sm:text-right">
                  <p>{exp.company}</p>
                  <p className="text-[#BDBDBD]">{exp.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Education & Awards (白底) ═══════ */}
      <section className="bg-[#F7F7F7] px-6 py-24 md:px-16 lg:px-[72px]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel>Education & Awards</SectionLabel>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">教育经历</h3>
            {education.map((edu, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-semibold">{edu.school}</h4>
                  <span className="text-xs text-[#7A7A7A] font-mono">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="text-sm text-[#7A7A7A]">{edu.major} · {edu.degree}{edu.college ? ` · ${edu.college}` : ''}</p>
                {edu.gpa && <p className="text-sm text-[#090909] font-medium mt-1">GPA {edu.gpa}</p>}
              </motion.div>
            ))}
          </div>
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">荣誉奖项</h3>
            {awards.map((a, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-3 mb-4">
                <span className="w-6 h-6 bg-[#090909] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-[15px] text-[#555]">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Projects (黑底) ═══════ */}
      <section id="projects" className="bg-[#050505] text-white px-6 py-24 md:px-16 lg:px-[72px]">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
          <SectionLabel light>Projects</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] leading-[1.1] mb-14">项目经历</h2>
        </motion.div>
        <div className="space-y-16">
          {projects.map((proj, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
              {/* Project video */}
              {proj.video && (
                <div className="mb-6 overflow-hidden rounded-sm border border-[#1E1E1E]">
                  <video
                    src={proj.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full max-h-[500px] object-contain bg-[#0a0a0a]"
                    poster=""
                  />
                </div>
              )}
              {/* Project image */}
              {proj.image && !proj.video && (
                <div className="mb-6 overflow-hidden rounded-sm">
                  <img src={proj.image} alt={proj.name} className="w-full max-h-[400px] object-cover" />
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h3 className="text-xl lg:text-2xl font-bold group-hover:text-[#BDBDBD] transition-colors">{proj.name}</h3>
                <span className="text-xs text-[#8A8A8A] font-mono">{proj.period}</span>
              </div>
              {proj.role && <p className="text-sm text-[#BDBDBD] mb-3">{proj.role}</p>}
              <ul className="space-y-1.5">
                {proj.description.map((d, j) => (
                  <li key={j} className="text-sm text-[#8A8A8A] flex gap-2">
                    <span className="text-[#555]">—</span><span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ Testimonials (黑底卡片) ═══════ */}
      <section className="bg-[#050505] text-white px-6 py-24 md:px-16 lg:px-[72px] border-t border-[#1E1E1E]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-14">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <SectionLabel light>Testimonials</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] leading-[1.1]">
              What My Clients
              <br />
              Say About Me!
            </h2>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 sm:mt-0">
            <PillButton href="#contact">查看全部</PillButton>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#1E1E1E] p-6 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#222] flex items-center justify-center text-sm font-bold text-[#888]">{t.name[0]}</div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[#8A8A8A]">{t.role}</p>
                </div>
              </div>
              <p className="text-sm leading-[1.7] text-[#BDBDBD]">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ Marquee CTA ═══════ */}
      <div className="bg-[#151515] h-[86px] overflow-hidden flex items-center">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-4 text-[28px] font-medium text-white/72">
              联系我
              <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">↗</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ═══════ Skills & Info ═══════ */}
      <section className="bg-white px-6 py-24 md:px-16 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <SectionLabel>Skills</SectionLabel>
            <div className="space-y-8">
              {skills.map((group, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#7A7A7A] mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span key={j} className="px-4 py-1.5 bg-[#F7F7F7] border border-[#EFEFEF] rounded-full text-sm text-[#555] hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-300 cursor-default">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <SectionLabel>Leadership</SectionLabel>
            {leadership.map((lead, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-semibold">{lead.organization}</h4>
                  <span className="text-xs text-[#7A7A7A] font-mono">{lead.period}</span>
                </div>
                <p className="text-sm text-[#7A7A7A] mb-1">{lead.role}</p>
                <ul className="space-y-0.5">
                  {lead.description.map((d, j) => (
                    <li key={j} className="text-sm text-[#8A8A8A] flex gap-2">
                      <span className="text-[#BDBDBD]">—</span><span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-[#8A8A8A]">
              {languages.map((l, i) => <span key={i}>{l}</span>)}
              {interests.map((int, i) => <span key={i}>{int}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer id="contact" className="bg-[#101010] text-white px-6 py-20 md:px-16 lg:px-[72px]">
        <div className="flex flex-col items-center mb-16">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.04em] mb-8">联系我</h2>
            <div className="flex flex-wrap justify-center gap-8 text-[#888] text-sm mb-10">
              {personal.email && <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">{personal.email}</a>}
              {personal.phone && <span>{personal.phone}</span>}
              {personal.github && <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub ↗</a>}
              {personal.location && <span>{personal.location}</span>}
            </div>
            <PillButton href={`mailto:${personal.email}`}>发送邮件</PillButton>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#222] text-xs text-[#666] gap-4">
          <span>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-[#444] text-white flex items-center justify-center hover:border-white transition-colors">↑</button>
        </div>
      </footer>
    </div>
  );
}
