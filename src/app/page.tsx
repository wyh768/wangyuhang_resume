'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeData, TemplateStyle } from '@/lib/types';
import { sampleResumeData } from '@/lib/sample-data';
import MinimalPro from '@/templates/MinimalPro';
import CreativeDesign from '@/templates/CreativeDesign';
import DarkTech from '@/templates/DarkTech';

const templates: Record<TemplateStyle, { component: React.FC<{ data: ResumeData }>; label: string; icon: string }> = {
  minimal: { component: MinimalPro, label: '极简', icon: '○' },
  creative: { component: CreativeDesign, label: '深色', icon: '◆' },
  darktech: { component: DarkTech, label: '终端', icon: '>' },
};

export default function Home() {
  const [style, setStyle] = useState<TemplateStyle>('minimal');
  const [data] = useState<ResumeData>(sampleResumeData);
  const [showSwitcher, setShowSwitcher] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowSwitcher(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const TemplateComponent = templates[style].component;
  const isFullBleed = style === 'creative' || style === 'darktech';

  return (
    <main className="min-h-screen py-8 px-4 md:py-12 md:px-6" style={{ background: '#DADBE0' }}>
      {isFullBleed ? (
        /* 深色/终端风格：全屏无容器 */
        <div className="relative">
          <TemplateComponent data={data} />
        </div>
      ) : (
        /* 极简风格：白色大容器浮在浅灰背景上 */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1320px] overflow-hidden rounded-lg bg-white"
        >
          <TemplateComponent data={data} />
        </motion.div>
      )}

      {/* Style switcher */}
      <AnimatePresence>
        {showSwitcher && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg shadow-black/5"
          >
            {(Object.keys(templates) as TemplateStyle[]).map((key) => (
              <button
                key={key}
                onClick={() => setStyle(key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  style === key
                    ? 'bg-[#090909] text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="mr-1.5">{templates[key].icon}</span>
                {templates[key].label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
