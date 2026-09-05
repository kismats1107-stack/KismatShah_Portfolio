import { useState } from 'react';
import { Terminal, Cpu, Code2, Globe, Wrench, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';
import ShinyText from './reactbits/ShinyText';
import CountUp from './reactbits/CountUp';
import SpotlightCard from './reactbits/SpotlightCard';
import ClickSpark from './reactbits/ClickSpark';
import { SKILL_CATEGORIES, type Skill } from '../data/skills';

const ALL_SKILLS = SKILL_CATEGORIES.flatMap((c) => c.skills);

const CODE_PREVIEWS: Record<string, string> = {
  Python: `# AI & Computer Vision Pipeline\nimport cv2, numpy as np\n\ndef track_target(frame):\n    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\n    mask = cv2.inRange(hsv, lower_bound, upper_bound)\n    contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\n    return max(contours, key=cv2.contourArea) if contours else None`,
  'C++': `// High-Speed PID Motor Controller\n#include <Arduino.h>\n\nvoid computePID(float target, float current) {\n    float error = target - current;\n    integral += error * dt;\n    float derivative = (error - prevError) / dt;\n    float output = Kp*error + Ki*integral + Kd*derivative;\n    setMotorSpeed(constrain(output, -255, 255));\n}`,
  C: `// Low-Level ESP32 Hardware Interrupt\n#include "esp_timer.h"\n\nvoid IRAM_ATTR isr_handler(void* arg) {\n    uint32_t sensor_val = gpio_get_level(MQ2_ALERT_PIN);\n    if (sensor_val) xSemaphoreGiveFromISR(hazard_semaphore, NULL);\n}`,
  JavaScript: `// Reactive Real-Time Telemetry Stream\nconst socket = new WebSocket('wss://api.kismat.dev/telemetry');\nsocket.onmessage = (event) => {\n  const { sensorId, ppm, timestamp } = JSON.parse(event.data);\n  dispatchTelemetryUpdate({ id: sensorId, value: ppm, time: timestamp });\n};`,
  React: `// High-Performance Glassmorphic Interface\nexport function TelemetryHUD({ telemetry }: { telemetry: TelemetryState }) {\n  return (\n    <motion.div className="liquid-glass rounded-2xl p-6 backdrop-blur-xl">\n      <StatusIndicator active={telemetry.isArmed} />\n      <MetricGraph data={telemetry.history} />\n    </motion.div>\n  );\n}`,
  ESP32: `// Autonomous Sensor Array & Cloud Uplink\n#include <WiFi.h>\n#include <HTTPClient.h>\n\nvoid sendTelemetry(float ppm, float temp) {\n  if (WiFi.status() == WL_CONNECTED) {\n    HTTPClient http;\n    http.begin(serverUrl);\n    http.addHeader("Content-Type", "application/json");\n    http.POST(serializePayload(ppm, temp));\n  }\n}`,
};

export default function SkillsSection() {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILL_CATEGORIES[0].skills[0]);

  const displayedSkills =
    selectedCatId === 'all'
      ? ALL_SKILLS
      : SKILL_CATEGORIES.find((c) => c.id === selectedCatId)?.skills || ALL_SKILLS;

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-8 sm:py-28 md:px-10 bg-[#060406]">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0} y={15}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d92238]/30 bg-[#d92238]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#d92238]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d92238] animate-pulse" />
                <span>02 &bull; TECHNICAL ARSENAL</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} y={20}>
              <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                Core Stack &amp; <ShinyText text="Capabilities" color="#ffffff" shineColor="#ff2233" speed={4} />
              </h2>
            </FadeIn>

            <FadeIn delay={0.16} y={15}>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light">
                Battle-tested technologies bridging embedded physical hardware, intelligent AI inference pipelines, and production web applications.
              </p>
            </FadeIn>
          </div>

          {/* Category Filter Tabs */}
          <FadeIn delay={0.2} y={15}>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Stack', icon: Sparkles },
                { id: 'programming', label: 'Languages', icon: Code2 },
                { id: 'web', label: 'Web Dev', icon: Globe },
                { id: 'hardware', label: 'Hardware/IoT', icon: Cpu },
                { id: 'tools', label: 'Tooling', icon: Wrench },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = selectedCatId === tab.id;
                return (
                  <ClickSpark key={tab.id} sparkColor="#d92238" className="inline-block">
                    <button
                      type="button"
                      onClick={() => setSelectedCatId(tab.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#d92238] text-white shadow-[0_0_18px_rgba(217,34,56,0.6)]'
                          : 'bg-white/[0.04] text-white/60 border border-white/10 hover:text-white hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon size={13} />
                      <span>{tab.label}</span>
                    </button>
                  </ClickSpark>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* ── Main Interactive Split Workspace ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive macOS Terminal Inspector (5 cols) */}
          <FadeIn delay={0.25} y={20} className="lg:col-span-5 flex flex-col gap-4">
            <div className="liquid-glass rounded-3xl p-5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col">
              
              {/* macOS Window Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                  terminal &mdash; {activeSkill.name}.cpp
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE
                </span>
              </div>

              {/* Active Skill Telemetry Details */}
              <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 p-4 rounded-2xl mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border"
                    style={{
                      backgroundColor: `${activeSkill.iconColor}15`,
                      borderColor: `${activeSkill.iconColor}40`,
                      color: activeSkill.iconColor,
                    }}
                  >
                    <activeSkill.icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">
                      {activeSkill.name}
                    </h3>
                    <span className="text-xs text-[#d92238] font-semibold">
                      {activeSkill.exp || 'Advanced'} Proficiency
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-black font-condensed text-white">
                    {activeSkill.level}%
                  </span>
                  <span className="block text-[10px] text-white/40 uppercase font-mono">
                    Mastery
                  </span>
                </div>
              </div>

              {/* Code Snippet / Architecture View */}
              <div className="bg-[#050406] rounded-2xl p-4 border border-white/5 overflow-hidden">
                <div className="flex items-center gap-2 text-[11px] text-white/40 font-mono mb-2">
                  <Terminal size={12} className="text-[#d92238]" />
                  <span>snippet.inspect()</span>
                </div>
                <pre className="text-xs font-mono text-white/80 leading-relaxed overflow-x-auto p-1 max-h-[220px]">
                  <code>
                    {CODE_PREVIEWS[activeSkill.name] ||
                      `// ${activeSkill.name} System Integration\nconst ${activeSkill.name.toLowerCase().replace(/[^a-z]/g, '')}Instance = new Module({\n  layer: '${selectedCatId}',\n  level: ${activeSkill.level}%,\n  tags: ${JSON.stringify(activeSkill.tags || [])}\n});`}
                  </code>
                </pre>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {activeSkill.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-white/70 bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Liquid-Glass Skill Cards Grid (7 cols) */}
          <FadeIn delay={0.35} y={20} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {displayedSkills.map((skill) => {
                const Icon = skill.icon;
                const isCurrent = activeSkill.name === skill.name;
                return (
                  <SpotlightCard
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    spotlightColor="rgba(217, 34, 56, 0.25)"
                    className={`liquid-glass rounded-2xl p-4 cursor-pointer transition-all duration-300 group ${
                      isCurrent
                        ? 'border-[#d92238]/70 shadow-[0_0_25px_rgba(217,34,56,0.3)] bg-white/[0.04]'
                        : 'hover:border-white/20 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl border transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${skill.iconColor}15`,
                            borderColor: `${skill.iconColor}35`,
                            color: skill.iconColor,
                          }}
                        >
                          <Icon />
                        </div>
                        <div>
                          <span className="font-bold text-sm text-white block group-hover:text-[#ffaab4] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[11px] text-white/40 font-mono">
                            {skill.exp || 'Proficient'}
                          </span>
                        </div>
                      </div>

                      <span className="font-condensed text-lg font-bold text-white/90">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.level}%`,
                          background: isCurrent
                            ? 'linear-gradient(90deg, #d92238, #ff6b7a)'
                            : `${skill.iconColor}`,
                        }}
                      />
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* ── Bottom Metrics Strip ── */}
        <FadeIn delay={0.4} y={15} className="mt-14 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { to: 6, suffix: '+', label: 'Languages' },
            { to: 12, suffix: '+', label: 'Frameworks & Tools' },
            { to: 5, suffix: '+', label: 'Hardware Controllers' },
            { to: 100, suffix: '%', label: 'Hands-On Code' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-condensed text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp to={item.to} duration={1.5} />
                {item.suffix}
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-white/50">
                {item.label}
              </span>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
