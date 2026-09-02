import { useEffect, useRef } from 'react';
import './AboutCinematic.css';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

const STATS = [
  { value: '4+', label: 'Hackathons' },
  { value: '6+', label: 'Languages' },
  { value: '5+', label: 'Projects' },
  { value: '1', label: 'Hackathon Win' },
];

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React's `muted` JSX attribute doesn't reliably sync the live DOM
    // property before autoplay-eligibility is evaluated, so force it here.
    v.muted = true;
    v.play().catch(() => {
      /* autoplay blocked — video stays on first frame */
    });
  }, []);

  return (
    <section id="about" className="ab-stage">
      <div className="ab-plate">
        <video
          ref={videoRef}
          className="ab-plate-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      <main className="ab-hero">
        <p className="ab-eyebrow">About Me</p>

        <h1 className="ab-headline">
          <span>Crafting the Future</span>{' '}
          <span>with Code &amp; Circuits</span>
        </h1>

        <p className="ab-sub">
          I am Kismat Shah, a B.Tech student pursuing Computer Science Engineering. As a
          B.Tech CSE student who started building in 2025, i focus on AI, robotics, and
          full-stack development, i truly enjoy solving real-world problems and turning
          ambitious ideas into working systems. Let&apos;s build something incredible together!
        </p>

        <div className="ab-actions">
          <a
            className="ab-pill cursor-pointer"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Contact Me</span>
          </a>
          <a
            className="ab-ghost cursor-pointer"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </a>
          <a
            className="ab-ghost cursor-pointer"
            href="/KSResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume (PDF) ↗
          </a>
        </div>
      </main>

      <div className="ab-stats">
        {STATS.map((stat) => (
          <div className="ab-stat" key={stat.label}>
            <span className="ab-stat-value">{stat.value}</span>
            <span className="ab-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
