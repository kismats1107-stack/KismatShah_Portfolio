import { motion } from 'framer-motion';

const TICKER_ITEMS = [
  'B.TECH CSE',
  '6+ PROGRAMMING LANGUAGES',
  '4+ HACKATHONS',
  'TECHATHON WINNER',
  'SIH ROUND 2 SELECTED',
  'ODOO NATIONAL HACKATHON',
  'IoT & ROBOTICS',
  'FULL STACK DEVELOPER',
  '5+ REAL-WORLD BUILDS',
];

const TRIPLED_TICKER = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export default function MarqueeSection() {
  return (
    <div className="w-full bg-gradient-to-r from-[#ff7a00] via-[#ff4500] to-[#ff7a00] py-4 sm:py-5 overflow-hidden select-none shadow-[0_0_35px_rgba(255,122,0,0.3)]">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {TRIPLED_TICKER.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 font-condensed font-bold uppercase tracking-wider text-xl sm:text-2xl text-black">
            <span>{item}</span>
            <span className="text-white text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
