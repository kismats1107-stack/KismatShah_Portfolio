import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import GlareHover from './reactbits/GlareHover';

interface SocialItem {
  id: string;
  icon: typeof FaGithub;
  href: string;
  label: string;
  handle: string;
  quote: string;
  color: string;
  glowColor: string;
}

const SOCIALS: SocialItem[] = [
  {
    id: 'github',
    icon: FaGithub,
    href: 'https://github.com/kismats1107-stack',
    label: 'GitHub',
    handle: '@kismats1107-stack',
    quote: '“Talk is cheap. Show me the code.” — Linus Torvalds',
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.4)',
  },
  {
    id: 'linkedin',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/kismat-shah-747849372/',
    label: 'LinkedIn',
    handle: 'in/kismat-shah',
    quote: '“Connecting engineering ideas with real-world impact.”',
    color: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.45)',
  },
  {
    id: 'instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/kismat121107/',
    label: 'Instagram',
    handle: '@kismat121107',
    quote: '“Life beyond the terminal — code, circuits & moments.”',
    color: '#e4405f',
    glowColor: 'rgba(228, 64, 95, 0.45)',
  },
  {
    id: 'phone',
    icon: FaPhoneAlt,
    href: 'tel:+918200080468',
    label: 'Direct Contact',
    handle: '+91 8200080468',
    quote: '“Available for innovative builds & hackathon collaborations.”',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
  },
];

export default function SocialSidebar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 select-none pointer-events-auto"
      aria-label="Social Links Sidebar"
    >
      {/* Top Active Radar Blip with Quote on Hover */}
      <div
        className="relative flex items-center justify-center w-8 h-8 mb-1 cursor-pointer group"
        onMouseEnter={() => setHoveredId('status')}
        onMouseLeave={() => setHoveredId(null)}
      >
        <span className="absolute w-7 h-7 rounded-full border border-[#00d4ff]/40 animate-ping opacity-75" />
        <span className="absolute w-7 h-7 rounded-full border border-[#00d4ff]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00d4ff] shadow-[0_0_14px_#00d4ff]" />

        {/* Status Tooltip Quote */}
        <AnimatePresence>
          {hoveredId === 'status' && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-11 top-1/2 -translate-y-1/2 w-64 p-3 rounded-2xl bg-[#0c0c14]/95 border border-[#00d4ff]/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl pointer-events-none z-50"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00d4ff]">
                  Status: Online &amp; Building
                </span>
              </div>
              <p className="text-xs text-[#d0d0e6] italic font-medium leading-snug">
                “Crafting the future with code, circuits &amp; ambitious engineering.”
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social Links Stack with Hover Quotes */}
      <div className="flex flex-col items-center gap-5">
        {SOCIALS.map((s) => {
          const Icon = s.icon;
          const isHovered = hoveredId === s.id;

          return (
            <div
              key={s.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlareHover
                width="auto"
                height="auto"
                background="transparent"
                borderRadius="0.75rem"
                borderColor="transparent"
                glareColor={s.color}
                glareOpacity={0.35}
                className="!inline-block"
              >
                <motion.a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.25, x: 2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 15 }}
                  className="block text-[#72728f] hover:text-white transition-colors duration-200 text-lg sm:text-xl p-2 rounded-xl hover:bg-white/10 cursor-pointer"
                  style={{
                    color: isHovered ? s.color : undefined,
                    boxShadow: isHovered ? `0 0 18px ${s.glowColor}` : undefined,
                  }}
                >
                  <Icon />
                </motion.a>
              </GlareHover>

              {/* Floating Quote Card */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 12, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-12 top-1/2 -translate-y-1/2 w-64 p-3.5 rounded-2xl bg-[#0d0d14]/95 border shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl pointer-events-none z-50"
                    style={{ borderColor: `${s.color}50`, boxShadow: `0 8px 30px -5px ${s.glowColor}` }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
                      <span className="text-[11px] font-outfit font-bold uppercase tracking-wider text-white">
                        {s.label}
                      </span>
                      <span className="text-[10px] font-mono text-[#8c8ca5]">{s.handle}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs text-[#cfcfe0] italic font-medium leading-relaxed">
                      {s.quote}
                    </p>

                    {/* Hint */}
                    <span className="block mt-1.5 text-[9px] font-mono uppercase tracking-widest text-[#767690]">
                      Click to open &rarr;
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Vertical Accent Line */}
      <div className="w-[1.5px] h-14 bg-gradient-to-b from-[#3a3a52] to-transparent mt-2 rounded-full" />
    </motion.aside>
  );
}
