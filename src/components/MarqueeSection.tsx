import ScrollVelocity from './reactbits/ScrollVelocity';

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

const TICKER_TEXT = (
  <span className="flex items-center gap-8 font-condensed font-bold uppercase tracking-wider text-xl sm:text-2xl text-black">
    {TICKER_ITEMS.map((item, idx) => (
      <span key={idx} className="flex items-center gap-8">
        <span>{item}</span>
        <span className="text-white text-lg">✦</span>
      </span>
    ))}
  </span>
);

export default function MarqueeSection() {
  return (
    <div className="w-full bg-gradient-to-r from-[#ff7a00] via-[#ff4500] to-[#ff7a00] py-4 sm:py-5 overflow-hidden select-none shadow-[0_0_35px_rgba(255,122,0,0.3)]">
      <ScrollVelocity
        texts={[TICKER_TEXT]}
        velocity={60}
        numCopies={4}
        className="text-xl sm:text-2xl"
        scrollerClassName="!text-xl sm:!text-2xl !font-condensed !tracking-wider !drop-shadow-none gap-8"
      />
    </div>
  );
}
