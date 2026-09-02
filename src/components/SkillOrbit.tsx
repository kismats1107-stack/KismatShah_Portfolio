import { useRef } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, type SkillCategory } from '../data/skills';

interface SkillOrbitProps {
  activeCategory: SkillCategory;
  onSelectCategory: (cat: SkillCategory) => void;
}

const NODE_CONFIG = [
  { id: 'programming', xPercent: 50, yPercent: 15, labelPlacement: 'top' },
  { id: 'web', xPercent: 85, yPercent: 50, labelPlacement: 'bottom' },
  { id: 'hardware', xPercent: 50, yPercent: 85, labelPlacement: 'bottom' },
  { id: 'tools', xPercent: 15, yPercent: 50, labelPlacement: 'bottom' },
];

export default function SkillOrbit({ activeCategory, onSelectCategory }: SkillOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[460px] sm:max-w-[500px] select-none p-2 sm:p-4"
    >
      {/* Radar Background Container */}
      <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[#0d0d14]/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-center justify-center backdrop-blur-xl">
        {/* Dotted Matrix Canvas */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1.2px, transparent 1.2px)',
            backgroundSize: '22px 22px',
            backgroundPosition: '11px 11px',
          }}
        />

        {/* Dynamic Warm / Category Radial Glow */}
        <div
          className="absolute w-[280px] h-[280px] rounded-full filter blur-[70px] opacity-70 pointer-events-none transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle, ${activeCategory.glowColor || 'rgba(255,138,63,0.4)'} 0%, rgba(255, 122, 0, 0.12) 50%, transparent 75%)`,
          }}
        />

        {/* Orbit System Center Wrapper */}
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Radial Spokes & Quadrant Polygon Lines SVG */}
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            {/* Concentric Orbit Circles */}
            <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(240, 200, 150, 0.15)" strokeWidth="1.2" />
            <circle cx="200" cy="200" r="95" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="200" cy="200" r="55" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

            {/* Diagonal Grid Crosshairs */}
            <line x1="101" y1="101" x2="299" y2="299" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="299" y1="101" x2="101" y2="299" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="3 3" />

            {/* Spoke lines to node centers */}
            <line x1="200" y1="200" x2="200" y2="60" stroke="#00d4ff" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="200" y1="200" x2="340" y2="200" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="200" y1="200" x2="200" y2="340" stroke="#ff8a3f" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="200" y1="200" x2="60" y2="200" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.5" />

            {/* Radar Polygon Shape matching node vertices */}
            <polygon
              points="200,60 340,200 200,340 60,200"
              fill="rgba(255, 138, 63, 0.03)"
              stroke="rgba(255, 200, 150, 0.22)"
              strokeWidth="1.2"
            />
          </svg>

          {/* Central Glowing 3D Orange KS Core */}
          <motion.div
            className="relative z-20 flex items-center justify-center cursor-pointer rounded-full"
            style={{
              width: 'clamp(76px, 16vw, 96px)',
              height: 'clamp(76px, 16vw, 96px)',
              boxShadow:
                '0 0 45px rgba(255, 138, 63, 0.65), 0 0 90px rgba(255, 90, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.4)',
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #ffc078 0%, #ff8a3f 45%, #d2261a 85%, #751a00 100%)',
              }}
            >
              <span className="font-outfit font-black text-white text-xl sm:text-2xl tracking-tight drop-shadow-md select-none">
                KS
              </span>
            </div>
            {/* Subtle pulsing aura */}
            <div className="absolute -inset-2 rounded-full bg-[#ff8a3f]/20 filter blur-md -z-10 animate-pulse" />
          </motion.div>

          {/* 4 Orbital Category Nodes positioned on exact coordinate grid */}
          {SKILL_CATEGORIES.map((cat, i) => {
            const config = NODE_CONFIG[i];
            const isActive = activeCategory.id === cat.id;
            const Icon = cat.badgeIcon;

            return (
              <div
                key={cat.id}
                className="absolute z-30 flex items-center justify-center"
                style={{
                  left: `${config.xPercent}%`,
                  top: `${config.yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Node Round Badge */}
                <motion.div
                  onClick={() => onSelectCategory(cat)}
                  className="relative flex items-center justify-center rounded-full bg-[#0c0c12] border-[2px] transition-all duration-300 cursor-pointer select-none"
                  style={{
                    width: 'clamp(44px, 8.5vw, 54px)',
                    height: 'clamp(44px, 8.5vw, 54px)',
                    borderColor: cat.color,
                    boxShadow: isActive
                      ? `0 0 25px ${cat.color}, 0 0 10px ${cat.color}, inset 0 0 10px ${cat.glowColor}`
                      : `0 0 12px ${cat.color}55, inset 0 0 6px ${cat.glowColor}`,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                >
                  {cat.id === 'programming' ? (
                    <span className="font-mono font-bold text-sm sm:text-base" style={{ color: cat.color }}>
                      &lt;/&gt;
                    </span>
                  ) : (
                    <Icon size={20} color={cat.color} />
                  )}

                  {/* Clean Non-Overlapping Label Pill */}
                  <div
                    className={`absolute whitespace-nowrap pointer-events-none transition-all duration-200 ${
                      config.labelPlacement === 'top'
                        ? 'bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2'
                        : 'top-[calc(100%+8px)] left-1/2 -translate-x-1/2'
                    }`}
                  >
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-outfit font-bold tracking-normal backdrop-blur-md transition-all border shadow-lg"
                      style={{
                        backgroundColor: isActive ? `${cat.color}25` : 'rgba(12, 12, 18, 0.92)',
                        borderColor: isActive ? cat.color : 'rgba(255, 255, 255, 0.12)',
                        color: isActive ? '#ffffff' : '#cfcfe0',
                        boxShadow: isActive ? `0 0 12px ${cat.color}40` : '0 4px 10px rgba(0,0,0,0.5)',
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
