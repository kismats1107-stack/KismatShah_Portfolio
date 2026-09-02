import { useState, useEffect } from 'react';
import { MapPin, Plus, FileText, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

const ROLES = [
  'B-Tech CSE Student',
  'Full Stack Developer',
  'AI & Robotics Builder',
  'UI/UX Designer',
  'Problem Solver',
];

function TypewriterText() {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[roleIndex];
    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && currentText === fullText) {
      speed = 1800; // Pause when word is completely typed
    } else if (isDeleting && currentText === '') {
      speed = 300; // Brief pause before starting next word
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <div className="flex items-center gap-2.5 mt-1 min-h-[32px]">
      <span className="w-5 sm:w-7 h-[1.5px] bg-[#d92238] shrink-0 opacity-80" />
      <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-white/85">
        {currentText}
      </span>
      <span className="text-[#d92238] font-light animate-pulse select-none text-base sm:text-lg -ml-1">
        |
      </span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-[#050507] px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 pb-12 flex justify-center items-center">
      {/* ── Main Editorial Card Container ── */}
      <div className="relative w-full max-w-[1400px] min-h-[750px] sm:min-h-[820px] lg:min-h-[860px] rounded-[32px] sm:rounded-[44px] bg-[#0a0507] border border-[#ff2a40]/15 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 sm:p-10 md:p-12">
        
        {/* Background Ambient Radial Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] pointer-events-none opacity-40 -z-10"
          style={{
            background: 'radial-gradient(ellipse at 50% 15%, rgba(180, 20, 40, 0.4) 0%, rgba(100, 10, 25, 0.15) 50%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />

        {/* ── Top Header Bar ── */}
        <FadeIn delay={0} y={-10} className="relative z-30 flex items-start justify-between w-full">
          {/* Top Left: Role Titles */}
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#d92238]">
              AI &amp; ROBOTICS BUILDER
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
              FULL-STACK DEVELOPER &bull; UI/UX DESIGNER
            </span>
          </div>

          {/* Top Right: Resume & Available Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/KSResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#d92238]/60 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white transition-all backdrop-blur-md cursor-pointer hover:bg-white/[0.08]"
            >
              <FileText size={13} className="text-[#d92238]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors pt-0.5"
            >
              <span>AVAILABLE FOR PROJECTS</span>
              <span className="text-[#d92238] font-bold text-base leading-none group-hover:rotate-90 transition-transform duration-300">
                +
              </span>
            </a>
          </div>
        </FadeIn>

        {/* ── Center Stage: Giant Background PORTFOLIO & Portrait Cutout ── */}
        <div className="relative w-full flex-1 flex items-center justify-center my-auto min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
          
          {/* 1. Giant Bold Condensed "PORTFOLIO" Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10 overflow-visible">
            <span
              className="font-condensed font-extrabold uppercase tracking-tight text-[#75111e] text-[22vw] sm:text-[20vw] lg:text-[18vw] leading-[0.82] text-center whitespace-nowrap opacity-90 drop-shadow-[0_0_40px_rgba(117,17,30,0.35)]"
              style={{
                letterSpacing: '-0.02em',
              }}
            >
              PORTFOLIO
            </span>
          </div>

          {/* 2. Center Cutout Portrait Photo */}
          <div className="absolute bottom-[-24px] sm:bottom-[-40px] md:bottom-[-48px] left-1/2 -translate-x-1/2 z-20 flex justify-center items-end pointer-events-none">
            <img
              src="/kismat-portrait.jpg"
              alt="Kismat Shah"
              className="h-[440px] sm:h-[540px] md:h-[620px] lg:h-[680px] w-auto max-w-none object-cover object-top filter contrast-[1.1] brightness-[0.98] drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              }}
            />
          </div>

          {/* 3. Grid Overlay: Left Content & Right Content */}
          <div className="relative z-30 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto">
            
            {/* ── Left Column: Editorial Intro ── */}
            <FadeIn delay={0.2} y={15} className="lg:col-span-5 flex flex-col gap-2.5 text-left max-w-md pt-6 lg:pt-0">
              <span className="font-script text-3xl sm:text-4xl text-[#d92238] font-medium tracking-wide drop-shadow-sm">
                Hello, I&apos;m
              </span>

              <div className="flex flex-col">
                <h1 className="font-condensed text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.88] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                  KISMAT SHAH
                </h1>

                {/* Smooth Typewriter Effect with Line Prefix & Blinking Cursor */}
                <TypewriterText />
              </div>

              <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-normal pt-1.5 max-w-sm">
                I design and build intelligent systems bridging software with hardware &mdash; from scalable full-stack web architectures to AI-powered robotics.
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-white/90 uppercase tracking-widest pt-1">
                <MapPin size={14} className="text-[#d92238]" />
                <span>BASED IN INDIA</span>
              </div>

              {/* Quick Action CTA Buttons (View Projects & Resume) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#d92238] hover:bg-[#b81b2e] px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(217,34,56,0.4)] hover:shadow-[0_0_28px_rgba(217,34,56,0.7)] transition-all cursor-pointer"
                >
                  View Projects <ArrowUpRight size={14} />
                </a>

                <a
                  href="/KSResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/15 hover:border-[#d92238]/60 px-4 sm:px-5 py-2 text-xs font-bold uppercase tracking-wider text-white/90 hover:text-white transition-all cursor-pointer backdrop-blur-md"
                >
                  <FileText size={14} className="text-[#d92238]" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </FadeIn>

            {/* Empty Center Spacer for Desktop */}
            <div className="hidden lg:block lg:col-span-2 pointer-events-none" />

            {/* ── Right Column: Capabilities & Tagline ── */}
            <FadeIn delay={0.3} y={15} className="lg:col-span-5 flex flex-col gap-5 text-left max-w-sm ml-auto lg:pr-2">
              {/* Tagline Widget */}
              <div className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-2xl backdrop-blur-sm">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/80">
                  <Plus size={15} />
                </div>
                <p className="text-xs sm:text-[13px] text-white/80 leading-snug font-medium pt-0.5">
                  Turning ideas into powerful digital experiences &amp; intelligent robotics.
                </p>
              </div>

              {/* Bullet Features with Red Plus Markers */}
              <div className="flex flex-col gap-3 pl-1">
                {[
                  'User-Centered Architectures',
                  'Pixel-Perfect & Scalable Interfaces',
                  'AI & Computer Vision Pipelines',
                  'Embedded Robotics & IoT Systems',
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors">
                    <span className="text-[#d92238] font-bold text-sm leading-none">
                      +
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Bottom Section: Selected Projects & Resume Download Link ── */}
        <FadeIn delay={0.4} y={10} className="relative z-30 flex items-center justify-between w-full pt-4 border-t border-white/5">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>SELECTED PROJECTS</span>
            <span className="text-[#d92238] font-bold text-sm">&rarr;</span>
          </a>

          <a
            href="/KSResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-[#d92238] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FileText size={13} />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}




