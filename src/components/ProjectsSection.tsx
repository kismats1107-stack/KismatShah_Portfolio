import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Cpu,
  ShieldAlert,
  Bot,
  Gauge,
  Sprout,
  Trophy,
} from 'lucide-react';
import FadeIn from './FadeIn';
import HackathonDetail from './HackathonDetail';
import ShinyText from './reactbits/ShinyText';
import ClickSpark from './reactbits/ClickSpark';
import SpotlightCard from './reactbits/SpotlightCard';

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  contribution: string;
  tech: string[];
  github: string;
  color: string;
  icon: typeof Cpu;
  isHackathon?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 'gas-leak',
    number: '01',
    title: 'Gas Leakage Detector - IoT',
    category: 'IoT & Safety Systems',
    tagline: 'Autonomous gas detection & real-time hazard notification system',
    problem:
      'Household and industrial gas leaks can be fatal if undetected. Built an IoT-powered real-time detection unit that triggers instant acoustic alarms and sends remote cloud alerts to prevent hazardous incidents.',
    contribution:
      'Designed full circuit architecture, programmed the ESP32 microcontroller, and calibrated MQ-2 sensor thresholds with buzzer and push notification pipelines.',
    tech: ['ESP32', 'MQ-2 Sensor', 'Arduino IDE', 'IoT Cloud', 'C++'],
    github: 'https://github.com/kismats1107-stack/gas-leakage-detector',
    color: '#d92238',
    icon: ShieldAlert,
  },
  {
    id: 'security-robot',
    number: '02',
    title: 'Autonomous Security Robot',
    category: 'Robotics & AI Vision',
    tagline: 'Perimeter patrol robot equipped with live OpenCV computer vision',
    problem:
      'Manual security surveillance is costly and prone to fatigue. Engineered an autonomous surveillance robot capable of continuous perimeter patrol, real-time visual monitoring, and anomaly detection.',
    contribution:
      'Fabricated the robotic chassis, developed the motor navigation algorithm, and integrated a live Raspberry Pi camera stream with OpenCV object/motion detection.',
    tech: ['Raspberry Pi', 'Python', 'OpenCV', 'Ultrasonic Sensors', 'Motor Drivers'],
    github: 'https://github.com/kismats1107-stack/security-robot',
    color: '#00d4ff',
    icon: Bot,
  },
  {
    id: 'line-follower',
    number: '03',
    title: 'Precision Line Follower Robot',
    category: 'Embedded & Control Systems',
    tagline: 'High-speed track navigation robot utilizing tuned PID feedback loops',
    problem:
      'Industrial automation demands fast, error-tolerant line navigation for internal logistics. Built an autonomous line-tracking robot optimized for stability and sharp corner negotiation.',
    contribution:
      'Formulated the PID mathematical control loop, calibrated multi-channel infrared sensor arrays, and engineered motor PWM driving routines for zero-overshoot path tracking.',
    tech: ['Arduino Uno', 'IR Array Sensors', 'PID Algorithm', 'L298N Driver', 'C++'],
    github: 'https://github.com/kismats1107-stack/line-follower',
    color: '#a78bfa',
    icon: Gauge,
  },
  {
    id: 'farm-fresh',
    number: '04',
    title: 'Farm To Fresh Marketplace',
    category: 'AgriTech & Web Architecture',
    tagline: 'Direct marketplace platform connecting local farmers with consumers',
    problem:
      'Excessive intermediary supply chains cause farmers to lose fair profit margins while consumers receive stale produce at marked-up prices.',
    contribution:
      'Architected the product ecosystem, designed direct-to-consumer logistics workflows, and established technology frameworks for price transparency and freshness tracking.',
    tech: ['React', 'Node.js', 'Supply Chain Tech', 'Web Architecture'],
    github: 'https://github.com/kismats1107-stack',
    color: '#34d399',
    icon: Sprout,
  },
  {
    id: 'hackathons',
    number: '05',
    title: 'Smart Attendance & SIH Sprints',
    category: 'Rapid Prototyping & SIH Round 2',
    tagline: 'Smart Attendance System with QR verification & face recognition (SIH Round 2)',
    problem:
      'High-pressure 24–48 hour sprints requiring end-to-end fullstack systems: Smart Attendance with QR verification & face recognition, and SmartCampus facility automation.',
    contribution:
      'Led and built projects across 4+ hackathons including the Odoo National Hackathon, selected for SIH Round 2, and won college-level Techathon.',
    tech: ['Python', 'OpenCV', 'React', 'Face Recognition', 'QR Verification'],
    github: 'https://github.com/kismats1107-stack',
    color: '#fbbf24',
    icon: Trophy,
    isHackathon: true,
  },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showHackathon, setShowHackathon] = useState(false);

  if (showHackathon) {
    return (
      <section id="projects" className="relative z-10 px-4 py-20 sm:px-8 sm:py-24 md:px-10 bg-[#060406]">
        <div className="mx-auto max-w-6xl">
          <HackathonDetail onBack={() => setShowHackathon(false)} />
        </div>
      </section>
    );
  }

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-8 sm:py-28 md:px-10 bg-[#060406]">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0} y={15}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d92238]/30 bg-[#d92238]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#d92238]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d92238] animate-pulse" />
                <span>04 &bull; FEATURED REPOSITORIES</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} y={20}>
              <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                Engineered <ShinyText text="Projects" color="#ffffff" shineColor="#ff2233" speed={4} />
              </h2>
            </FadeIn>

            <FadeIn delay={0.16} y={15}>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light">
                A curated selection of physical IoT systems, autonomous robotics prototypes, and high-velocity hackathon deployments.
              </p>
            </FadeIn>
          </div>

          {/* Filter Pills */}
          <FadeIn delay={0.2} y={15}>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Works' },
                { id: 'iot', label: 'IoT & Safety' },
                { id: 'robotics', label: 'Robotics & AI' },
                { id: 'embedded', label: 'Embedded PID' },
                { id: 'hackathon', label: 'Hackathons' },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <ClickSpark key={tab.id} sparkColor="#d92238" className="inline-block">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#d92238] text-white shadow-[0_0_18px_rgba(217,34,56,0.6)]'
                          : 'bg-white/[0.04] text-white/60 border border-white/10 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </ClickSpark>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.id} delay={0.1 + idx * 0.08} y={20}>
                <SpotlightCard
                  spotlightColor="rgba(217, 34, 56, 0.25)"
                  className="liquid-glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between h-full group hover:border-[#d92238]/60 hover:shadow-[0_20px_50px_rgba(217,34,56,0.2)] transition-all duration-500"
                >

                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-[#d92238] font-bold">
                          /{project.number}
                        </span>
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                          style={{
                            borderColor: `${project.color}40`,
                            color: project.color,
                            backgroundColor: `${project.color}10`,
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center border text-sm transition-transform duration-300 group-hover:scale-110"
                        style={{
                          borderColor: `${project.color}40`,
                          color: project.color,
                          backgroundColor: `${project.color}15`,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/60 leading-relaxed font-light mb-4 line-clamp-3">
                      {project.problem}
                    </p>
                  </div>

                  {/* Card Footer: Tech Stack + Actions */}
                  <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono bg-white/[0.04] text-white/70 border border-white/5 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors group/link"
                      >
                        <Github size={14} className="text-[#d92238]" />
                        <span>Source Code</span>
                        <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.isHackathon && (
                        <button
                          type="button"
                          onClick={() => setShowHackathon(true)}
                          className="text-[11px] font-semibold text-[#fbbf24] hover:underline cursor-pointer"
                        >
                          View Sprint &rarr;
                        </button>
                      )}
                    </div>
                  </div>

                </SpotlightCard>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
