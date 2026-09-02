import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMicrosoft, FaAmazon, FaGoogle } from 'react-icons/fa';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4';

const STATS = [
  { icon: '<', target: 120, suffix: 'ms', decimals: 0, label: 'Inference Time' },
  { icon: '%', target: 99.99, suffix: '%', decimals: 2, label: 'Platform Uptime' },
  { icon: '*', target: 24, suffix: '/7', decimals: 0, label: 'Autonomous Runtime' },
  { icon: '#', target: 2.4, suffix: 'M', decimals: 1, label: 'Context Windows' },
];

function StatCounter({ stat, delay }: { stat: typeof STATS[0]; delay: number }) {
  const [val, setVal] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = (ease * stat.target).toFixed(stat.decimals);
            setVal(`${current}${stat.suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal(`${stat.target.toFixed(stat.decimals)}${stat.suffix}`);
            }
          };

          setTimeout(() => requestAnimationFrame(animate), delay);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat, delay]);

  return (
    <div ref={ref} className="flex items-center gap-3 sm:gap-4">
      <span
        className="text-white text-2xl sm:text-3xl font-normal select-none"
        style={{ fontFamily: '"BubbledotICG-FinePos", "Geist Pixel Circle", monospace' }}
      >
        {stat.icon}
      </span>
      <div className="flex flex-col">
        <span className="font-sans text-lg sm:text-2xl font-semibold text-white tracking-tight tabular-nums">
          {val}
        </span>
        <span className="font-sans text-xs text-[#8e8e8e] whitespace-nowrap">
          {stat.label}
        </span>
      </div>
    </div>
  );
}

export default function IntelligenceSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="ai-platform" className="relative min-h-[100vh] w-full overflow-hidden bg-black flex flex-col justify-between p-4 sm:p-8">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover pointer-events-none opacity-85"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Floating Header */}
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex w-full max-w-[720px] items-center justify-between sm:justify-center gap-4 sm:gap-7 pt-2"
      >
        {/* White Circular Logo */}
        <button className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-transform hover:scale-105 border-0 cursor-pointer">
          <img src="/ai-platform/assets/logo.webp" alt="Logo" className="h-[72%] w-[72%] object-contain" />
        </button>

        {/* Center Pill Nav */}
        <nav className="hidden sm:flex flex-1 max-w-[430px] items-center justify-around rounded-full bg-white px-2 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.16)]">
          <a href="#home" className="relative px-3 py-1 text-xs sm:text-sm font-medium text-[#2e2e2e]">
            Home
            <span className="absolute bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black shadow-[-5px_0_0_#000,5px_0_0_#000]" />
          </a>
          <a href="#projects" className="px-3 py-1 text-xs sm:text-sm font-medium text-[#2e2e2e] opacity-50 hover:opacity-75 transition-opacity">
            Product
          </a>
          <a href="#achievements" className="px-3 py-1 text-xs sm:text-sm font-medium text-[#2e2e2e] opacity-50 hover:opacity-75 transition-opacity">
            Case Studies
          </a>
          <a href="#contact" className="px-3 py-1 text-xs sm:text-sm font-medium text-[#2e2e2e] opacity-50 hover:opacity-75 transition-opacity">
            Contact
          </a>
        </nav>

        {/* Dark Sign In Pill */}
        <a
          href="#contact"
          className="rounded-full bg-[#28282a] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#c8c8c8] shadow-[0_4px_14px_rgba(0,0,0,0.16)] hover:bg-[#323234] hover:text-white transition-all"
        >
          Sign in
        </a>
      </motion.header>

      {/* Hero Body */}
      <main className="relative z-10 my-auto mx-auto flex w-full max-w-[900px] flex-col items-center text-center py-10">
        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="mb-5 sm:mb-7 inline-flex items-center"
        >
          <div className="flex items-center">
            <div className="relative z-[1] flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 bg-[#28282a] p-1.5 transition-transform hover:-translate-y-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs text-black">
                <FaMicrosoft />
              </div>
            </div>
            <div className="relative z-[2] -ml-3.5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 bg-[#28282a] p-1.5 transition-transform hover:-translate-y-1">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs text-black">
                <FaAmazon />
              </div>
            </div>
            <div className="relative z-[4] -ml-3.5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 bg-[#28282a] p-1.5 transition-transform hover:-translate-y-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs text-black">
                <FaGoogle />
              </div>
            </div>
          </div>
          <div className="-ml-3.5 flex h-9 sm:h-10 items-center rounded-full border border-white/40 bg-[#28282a] pl-6 pr-4 text-xs sm:text-[13.5px] font-medium text-[#c4c2c3]">
            Trusted by 2000+ Enterprises
          </div>
        </motion.div>

        {/* Two-Line Dot-Matrix Headline */}
        <h2
          className="font-normal uppercase text-white leading-[1.1] sm:leading-[1.12] tracking-[-0.04em] whitespace-nowrap overflow-hidden select-none"
          style={{
            fontFamily: '"BubbledotICG-FinePos", "Geist Pixel Circle", monospace',
            fontSize: 'clamp(28px, 6.2vw, 80px)',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="block"
          >
            Intelligence
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="block"
          >
            Designed To Evolve
          </motion.span>
        </h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-5 max-w-[500px] text-center font-sans text-sm sm:text-base leading-relaxed text-[#d0d0d0]"
        >
          Build applications that reason, adapt and collaborate using a modular
          AI platform designed for production.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-7"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_22px_rgba(255,255,255,0.32),0_0_44px_rgba(255,255,255,0.12)] hover:scale-105 transition-transform"
          >
            Get Started
          </a>
        </motion.div>
      </main>

      {/* Stats Footer */}
      <footer className="relative z-10 mx-auto grid w-full max-w-[920px] grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-4 sm:pt-6">
        {STATS.map((stat, i) => (
          <StatCounter key={stat.label} stat={stat} delay={480 + i * 90} />
        ))}
      </footer>
    </section>
  );
}
