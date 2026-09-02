import {
  Trophy,
  Medal,
  Award,
  Code2,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import FadeIn from './FadeIn';

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'Techathon Winner',
    badge: '1st Place • Champion',
    description: 'Won the college-level Techathon hackathon, engineering an innovative fullstack solution under a tight 24-hour sprint.',
    color: '#fbbf24',
    metric: '1st PLACE',
  },
  {
    icon: Medal,
    title: 'SIH Round 2 Selected',
    badge: 'Smart India Hackathon • Team RollCall X',
    description: 'Selected for Round 2 of SIH for our Smart Attendance System with QR verification & automated facial recognition.',
    color: '#d92238',
    metric: 'NATIONAL',
  },
  {
    icon: Code2,
    title: 'Odoo National Hackathon',
    badge: 'National Participant',
    description: 'Participated in the prestigious Odoo National Hackathon, designing scalable enterprise software workflows.',
    color: '#00d4ff',
    metric: 'FINALIST',
  },
  {
    icon: Award,
    title: '6+ Programming Languages',
    badge: 'Polyglot Developer',
    description: 'Proficient across C, C++, Python, JavaScript, TypeScript, and SQL — building seamless hardware & web systems.',
    color: '#a78bfa',
    metric: 'VERIFIED',
  },
];

const CERTIFICATIONS = [
  { title: 'IoT & Embedded Fundamentals', field: 'Hardware Architecture', color: '#d92238' },
  { title: 'Python for AI & Computer Vision', field: 'Edge AI & OpenCV', color: '#00d4ff' },
  { title: 'Modern Fullstack Web Architecture', field: 'React & Ecosystem', color: '#34d399' },
  { title: 'Arduino & Microcontroller Systems', field: 'Sensors & Robotics', color: '#fbbf24' },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative px-4 py-20 sm:px-8 sm:py-28 md:px-10 bg-[#060406]">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0} y={15}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#fbbf24]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
                <span>05 &bull; RECOGNITION &amp; MILESTONES</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} y={20}>
              <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                Milestones &amp; <span className="animate-shiny">Credentials</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.16} y={15}>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light">
                Competitive hackathon standings, verified technical credentials, and long-term engineering ambitions.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ── 4 Liquid-Glass Milestone Tiles ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.1 + idx * 0.08} y={20}>
                <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-[#fbbf24]/50 hover:shadow-[0_20px_50px_rgba(251,191,36,0.15)] transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `${item.color}15`,
                            borderColor: `${item.color}40`,
                            color: item.color,
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <span
                          className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                          style={{
                            borderColor: `${item.color}40`,
                            color: item.color,
                            backgroundColor: `${item.color}10`,
                          }}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <span className="font-condensed text-xs font-bold text-white/50 font-mono tracking-widest">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck size={14} /> Verified Standing
                    </span>
                    <span className="text-[#fbbf24] font-bold">2024 &ndash; 2025</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* ── Lower Row: Certifications & Vision ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Certifications (7 cols) */}
          <FadeIn delay={0.3} y={20} className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/10 h-full flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-4 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#fbbf24]" />
                  TECHNICAL PROFICIENCIES &amp; FOUNDATIONS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/5 p-3.5 rounded-2xl flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-xs text-white leading-tight">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] text-white/40 font-mono">
                          {cert.field}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>Computer Science &amp; Engineering</span>
                <span className="text-white/70">CHARUSAT &bull; B.Tech</span>
              </div>
            </div>
          </FadeIn>

          {/* Vision Spotlight (5 cols) */}
          <FadeIn delay={0.35} y={20} className="lg:col-span-5">
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/10 h-full flex flex-col justify-between bg-gradient-to-br from-[#12080a] to-[#080507]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#d92238] block mb-3 flex items-center gap-1.5 font-bold">
                  <Compass size={14} />
                  ENGINEERING VISION
                </span>

                <h3 className="font-condensed text-2xl font-bold uppercase text-white leading-tight mb-3">
                  Bridging Physical Circuits &amp; Intelligent AI
                </h3>

                <p className="text-xs text-white/60 leading-relaxed font-light">
                  To continuously engineer impactful robotics and scalable software systems &mdash; transforming complex algorithmic theory into working, production-grade hardware and software solutions.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Engineering Collaborations &amp; Roles</span>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
