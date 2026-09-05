import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  BrainCircuit,
  Code2,
  Zap,
  Activity,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import FadeIn from './FadeIn';
import ShinyText from './reactbits/ShinyText';
import GlareHover from './reactbits/GlareHover';
import ElectricBorder from './reactbits/ElectricBorder';

interface LabModule {
  id: string;
  number: string;
  name: string;
  badge: string;
  icon: typeof Cpu;
  color: string;
  protocol: string;
  specs: { label: string; value: string }[];
  overview: string;
  pipeline: string[];
  techStack: string[];
}

const LAB_MODULES: LabModule[] = [
  {
    id: 'embedded',
    number: '01',
    name: 'Embedded Hardware & Sensor Lab',
    badge: 'Microcontrollers & Circuitry',
    icon: Cpu,
    color: '#d92238',
    protocol: 'I2C • SPI • UART • PWM',
    specs: [
      { label: 'Core Controllers', value: 'ESP32 Dual-Core (240MHz) • Arduino Uno' },
      { label: 'Sensor Calibration', value: 'MQ-2 Gas Sensor • 5-Channel IR Arrays' },
      { label: 'Actuator Control', value: 'L298N Dual H-Bridge Motor Drivers' },
      { label: 'Response Latency', value: '< 15ms Hardware Interrupt Loop' },
    ],
    overview:
      'Designing custom physical circuits, sensor threshold calibration, and real-time microcontroller firmware in C++ for safety hazard detection and automated robotics.',
    pipeline: ['Raw Sensor Readout', 'Analog ADC Calibration', 'Interrupt Logic', 'Hardware Alarm / Cloud Relay'],
    techStack: ['ESP32', 'Arduino IDE', 'MQ-2 Sensor', 'L298N', 'PID Tuning', 'C++'],
  },
  {
    id: 'vision',
    number: '02',
    name: 'Computer Vision & Edge AI',
    badge: 'Real-Time Inference & Robotics Vision',
    icon: BrainCircuit,
    color: '#00d4ff',
    protocol: 'OpenCV • Haar Cascade • Python GIL',
    specs: [
      { label: 'Vision Runtime', value: 'Raspberry Pi 4 • OpenCV 4.x' },
      { label: 'Object Tracking', value: 'Real-Time Contour & Motion Detection' },
      { label: 'Facial Verification', value: 'SIH Anti-Spoofing Facial Auth' },
      { label: 'Inference Speed', value: '25–30 FPS on Edge Hardware' },
    ],
    overview:
      'Integrating live camera feeds with computer vision pipelines on embedded platforms for autonomous patrol navigation, intrusion detection, and automated smart attendance.',
    pipeline: ['Frame Capture', 'Grayscale & Preprocessing', 'Feature Extraction', 'Action / Decision Trigger'],
    techStack: ['Python', 'OpenCV', 'Raspberry Pi', 'NumPy', 'Face Recognition'],
  },
  {
    id: 'fullstack',
    number: '03',
    name: 'Reactive Fullstack Systems',
    badge: 'Modern Web & IoT Telemetry',
    icon: Code2,
    color: '#34d399',
    protocol: 'WebSockets • REST • WebGL • TypeScript',
    specs: [
      { label: 'Frontend Stack', value: 'React 18 • TypeScript • Tailwind CSS' },
      { label: 'State & Motion', value: 'Framer Motion • Dynamic WebGL Canvas' },
      { label: 'Real-Time Sync', value: 'WebSocket Telemetry & Cloud Push' },
      { label: 'Design Paradigm', value: 'Glassmorphism • Fluid Performance' },
    ],
    overview:
      'Architecting responsive, high-performance web applications that bridge live hardware sensors and user dashboards with zero-latency visual telemetry.',
    pipeline: ['UI Component Hierarchy', 'State & Telemetry Store', 'API Sync Engine', 'Optimized Render Cycle'],
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Node.js', 'Vite'],
  },
  {
    id: 'hackathon',
    number: '04',
    name: 'Rapid Sprint Forge & SIH',
    badge: '24–48h High-Pressure Prototyping',
    icon: Zap,
    color: '#fbbf24',
    protocol: 'Agile • Fullstack MVP • Rapid Hardware Assembly',
    specs: [
      { label: 'Smart India Hackathon', value: 'Round 2 Selected (Smart Attendance)' },
      { label: 'Techathon Winner', value: '1st Place College-Level Hackathon' },
      { label: 'Odoo National Hackathon', value: 'Enterprise Workflow Solutions' },
      { label: 'Turnaround Time', value: '24-48 Hours Concept to Working Demo' },
    ],
    overview:
      'High-velocity problem solving under strict deadlines — assembling complete end-to-end hardware & software solutions, pitch presentations, and production architectures.',
    pipeline: ['Problem Deconstruction', 'System Architecture & Schema', 'Hardware Wiring & API Scaffolding', 'Live Stress-Tested Deployment'],
    techStack: ['Full-Stack', 'IoT Prototyping', 'System Architecture', 'Pitch Deck', 'Rapid Execution'],
  },
];

export default function ServicesSection() {
  const [activeModule, setActiveModule] = useState<LabModule>(LAB_MODULES[0]);

  return (
    <section id="services" className="relative px-4 py-20 sm:px-8 sm:py-28 md:px-10 bg-[#060406]">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0} y={15}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d92238]/30 bg-[#d92238]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#d92238]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d92238] animate-pulse" />
                <span>03 &bull; ENGINEERING WORKBENCH</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} y={20}>
              <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                Engineering <ShinyText text="Workbench" color="#ffffff" shineColor="#ff2233" speed={4} />
              </h2>
            </FadeIn>

            <FadeIn delay={0.16} y={15}>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light">
                An interactive inspection of core hardware lab modules, computer vision pipelines, and rapid prototyping workflows.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ── Main Workbench Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Module Switcher (4 cols) */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-4 flex flex-col gap-3">
            {LAB_MODULES.map((module) => {
              const Icon = module.icon;
              const isSelected = activeModule.id === module.id;
              return (
                <GlareHover
                  key={module.id}
                  width="100%"
                  height="auto"
                  background="transparent"
                  borderRadius="1rem"
                  borderColor="transparent"
                  glareColor={module.color}
                  glareOpacity={0.3}
                  className="!block"
                >
                <button
                  type="button"
                  onClick={() => setActiveModule(module)}
                  className={`liquid-glass rounded-2xl p-4 text-left transition-all duration-300 w-full group cursor-pointer ${
                    isSelected
                      ? 'border-[#d92238]/80 bg-white/[0.05] shadow-[0_0_25px_rgba(217,34,56,0.25)]'
                      : 'hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                      MODULE {module.number}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: isSelected ? `${module.color}60` : 'rgba(255,255,255,0.1)',
                        color: isSelected ? module.color : 'rgba(255,255,255,0.5)',
                        backgroundColor: isSelected ? `${module.color}15` : 'transparent',
                      }}
                    >
                      {module.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg border shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${module.color}15`,
                        borderColor: `${module.color}40`,
                        color: module.color,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="font-bold text-sm text-white group-hover:text-white/90">
                      {module.name}
                    </span>
                  </div>
                </button>
                </GlareHover>
              );
            })}
          </FadeIn>

          {/* Right Column: Interactive macOS Telemetry Deck (8 cols) */}
          <FadeIn delay={0.3} y={20} className="lg:col-span-8">
            <ElectricBorder color={activeModule.color} speed={0.7} chaos={0.08} borderRadius={24}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col gap-6"
              >
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="text-xs font-mono text-white/50 ml-2">
                      LAB://{activeModule.id.toUpperCase()}_ENGINE
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-white/40 hidden sm:inline">
                    PROTOCOLS: {activeModule.protocol}
                  </span>
                </div>

                {/* Module Title & Overview */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm border"
                      style={{
                        backgroundColor: `${activeModule.color}15`,
                        borderColor: `${activeModule.color}40`,
                        color: activeModule.color,
                      }}
                    >
                      <activeModule.icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">
                        {activeModule.name}
                      </h3>
                      <span className="text-xs font-semibold" style={{ color: activeModule.color }}>
                        {activeModule.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mt-1">
                    {activeModule.overview}
                  </p>
                </div>

                {/* Hardware & Telemetry Parameters Grid */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-3 flex items-center gap-1.5">
                    <Activity size={12} className="text-[#d92238]" />
                    TELEMETRY &amp; HARDWARE PARAMETERS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModule.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-[#050406]/90 border border-white/5 p-3.5 rounded-2xl flex flex-col gap-1"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                          {spec.label}
                        </span>
                        <span className="text-xs font-semibold text-white/90">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dataflow Pipeline Graph */}
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-3 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#d92238]" />
                    DATAFLOW PIPELINE
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {activeModule.pipeline.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white/[0.03] border border-white/5 p-2.5 rounded-xl flex flex-col gap-1 text-left"
                      >
                        <span className="text-[9px] font-mono uppercase text-[#d92238]">
                          STAGE 0{idx + 1}
                        </span>
                        <span className="text-xs font-medium text-white/80 leading-tight">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {activeModule.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-white/[0.04] text-white/70 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold font-mono">
                    <ShieldCheck size={14} />
                    <span>Verified in Hardware</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            </ElectricBorder>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
