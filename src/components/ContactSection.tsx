import { useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  MapPin,
  FileText,
  Copy,
  Check,
  Send,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import FadeIn from './FadeIn';
import ShinyText from './reactbits/ShinyText';
import GlareHover from './reactbits/GlareHover';
import ClickSpark from './reactbits/ClickSpark';
import ElectricBorder from './reactbits/ElectricBorder';

import { sendEmailSignal } from '../services/emailService';

const REPOS = [
  { name: 'gas-leakage-detector', desc: 'IoT gas leakage detection with ESP32 & cloud alerts', lang: 'C++', url: 'https://github.com/kismats1107-stack/gas-leakage-detector' },
  { name: 'security-robot', desc: 'Autonomous patrol robot with Raspberry Pi & OpenCV', lang: 'Python', url: 'https://github.com/kismats1107-stack/security-robot' },
  { name: 'line-follower', desc: 'High-speed line follower robot with tuned PID algorithm', lang: 'C++', url: 'https://github.com/kismats1107-stack/line-follower' },
  { name: 'kismat-3d-portfolio', desc: 'Personal portfolio built with React 18, TypeScript & Vite', lang: 'TypeScript', url: 'https://github.com/kismats1107-stack' },
];

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [sentStatus, setSentStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSentStatus('sending');

    const result = await sendEmailSignal({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (result.success) {
      setSentStatus('success');
      setStatusMsg(result.message);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSentStatus('idle');
        setStatusMsg('');
      }, 5000);
    } else {
      setSentStatus('error');
      setStatusMsg('Could not send signal. Please try again or email directly.');
      setTimeout(() => {
        setSentStatus('idle');
        setStatusMsg('');
      }, 5000);
    }
  };

  const collegeEmail = '25cs099@charusat.edu.in';
  const personalEmail = 'kismats1107@gmail.com';
  const phoneNumber = '+91 8200080468';

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-8 sm:py-28 md:px-10 bg-[#060406]">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Section Header ── */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0} y={15}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d92238]/30 bg-[#d92238]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#d92238]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d92238] animate-pulse" />
                <span>06 &bull; GET IN TOUCH</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} y={20}>
              <h2 className="font-condensed text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
                Let&apos;s Connect &amp; <ShinyText text="Build" color="#ffffff" shineColor="#ff2233" speed={4} />
              </h2>
            </FadeIn>

            <FadeIn delay={0.16} y={15}>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light">
                Have an ambitious engineering idea, hackathon invitation, or opportunity? Let&apos;s talk and create something impactful.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ── Contact Matrix Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Hub (6 cols) */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-6 flex flex-col gap-4">
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  VERIFIED DIRECT CHANNELS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                  ACTIVE
                </span>
              </div>

              {/* College Email */}
              <GlareHover width="100%" height="auto" background="transparent" borderRadius="1rem" borderColor="transparent" glareColor="#d92238" glareOpacity={0.3} className="!block">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-center justify-between gap-3 group hover:border-[#d92238]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#d92238]/10 text-[#d92238] border border-[#d92238]/30 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-white/40 block">
                      College Email
                    </span>
                    <a
                      href={`mailto:${collegeEmail}`}
                      className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-[#d92238] transition-colors truncate block"
                    >
                      {collegeEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => copyToClipboard(collegeEmail, 'col_mail', e)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedKey === 'col_mail' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              </GlareHover>

              {/* Personal Email */}
              <GlareHover width="100%" height="auto" background="transparent" borderRadius="1rem" borderColor="transparent" glareColor="#d92238" glareOpacity={0.3} className="!block">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-center justify-between gap-3 group hover:border-[#d92238]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-white/5 text-white/80 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-white/40 block">
                      Personal Email
                    </span>
                    <a
                      href={`mailto:${personalEmail}`}
                      className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-[#d92238] transition-colors truncate block"
                    >
                      {personalEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => copyToClipboard(personalEmail, 'per_mail', e)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedKey === 'per_mail' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              </GlareHover>

              {/* Phone / WhatsApp */}
              <GlareHover width="100%" height="auto" background="transparent" borderRadius="1rem" borderColor="transparent" glareColor="#d92238" glareOpacity={0.3} className="!block">
              <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl flex items-center justify-between gap-3 group hover:border-[#d92238]/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-white/5 text-white/80 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono text-white/40 block">
                      Phone &bull; WhatsApp
                    </span>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-xs sm:text-sm font-mono text-white font-semibold hover:text-[#d92238] transition-colors truncate block"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => copyToClipboard(phoneNumber, 'phone', e)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy Phone"
                >
                  {copiedKey === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
              </GlareHover>

              {/* Location & Resume Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                  <MapPin size={14} className="text-[#d92238]" />
                  <span>Gujarat, India</span>
                </div>

                <a
                  href="/KSResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#d92238] hover:bg-[#b81b2e] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(217,34,56,0.4)] transition-all cursor-pointer"
                >
                  <FileText size={13} />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Quick Dispatch & Featured Repositories (6 cols) */}
          <FadeIn delay={0.3} y={20} className="lg:col-span-6 flex flex-col gap-4">
            {/* Quick Dispatch Form */}
            <ElectricBorder color="#d92238" speed={0.6} chaos={0.06} borderRadius={24}>
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50 block mb-4 flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#d92238]" />
                DIRECT MESSAGE DISPATCH
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#d92238]/60 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#d92238]/60 transition-colors"
                  />
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Tell me about your project, idea, or role..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#d92238]/60 transition-colors resize-none"
                />

                <ClickSpark sparkColor="#d92238" className="inline-block mt-1">
                <button
                  type="submit"
                  disabled={sentStatus === 'sending'}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    sentStatus === 'success'
                      ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                      : sentStatus === 'error'
                      ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                      : sentStatus === 'sending'
                      ? 'bg-white/50 text-black cursor-wait'
                      : 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                  }`}
                >
                  {sentStatus === 'sending' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Dispatching via SMTP...</span>
                    </>
                  ) : sentStatus === 'success' ? (
                    <>
                      <Check size={14} className="text-white" />
                      <span>{statusMsg || 'Signal Delivered to Inbox! 🚀'}</span>
                    </>
                  ) : sentStatus === 'error' ? (
                    <>
                      <span>{statusMsg || 'Error Sending. Tap to Retry'}</span>
                    </>
                  ) : (
                    <>
                      <Send size={13} />
                      <span>Send Signal</span>
                    </>
                  )}
                </button>
                </ClickSpark>
              </form>
            </div>
            </ElectricBorder>

            {/* Featured Repos Mini-List */}
            <div className="liquid-glass rounded-3xl p-5 border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-3">
                FEATURED REPOSITORIES
              </span>
              <div className="flex flex-col gap-2">
                {REPOS.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Github size={14} className="text-[#d92238] shrink-0" />
                      <span className="text-xs font-mono text-white/90 font-semibold group-hover:text-white truncate">
                        {repo.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70">
                      {repo.lang} &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Footer ── */}
        <FadeIn delay={0.4} y={15} className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <span>&copy; {new Date().getFullYear()} KISMAT SHAH &bull; ALL RIGHTS RESERVED</span>
          <span className="text-white/60">CRAFTED WITH PRECISION &amp; CODE</span>
        </FadeIn>

      </div>
    </section>
  );
}
