import { useEffect, useRef, useState } from 'react';
import './NextLayerSection.css';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function NextLayerSection() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React's `muted` JSX attribute doesn't reliably sync the live DOM
    // property before autoplay-eligibility is evaluated, so force it here.
    v.muted = true;
    v.play().catch(() => {
      /* autoplay blocked (e.g. reduced-data mode) — video stays on first frame */
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth / window.innerHeight > 1.1) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="next-layer" className={`nl-stage${isOpen ? ' is-open' : ''}`}>
      <div className="nl-plate">
        <video
          ref={videoRef}
          className="nl-plate-video"
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

      <header className="nl-topbar">
        <a className="nl-brand" href="#" aria-label="Home">
          <svg viewBox="0 0 31.5 48.5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nl-bg1" x1="8" y1="0" x2="34.1" y2="28.9" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9e9e9e" />
                <stop offset=".28" stopColor="#a6a6a6" />
                <stop offset=".34" stopColor="#a3a3a3" />
                <stop offset=".40" stopColor="#3a3a3a" />
                <stop offset=".55" stopColor="#414141" />
                <stop offset=".60" stopColor="#7a7a7a" />
                <stop offset=".68" stopColor="#8e8e8e" />
                <stop offset=".80" stopColor="#a9a9a9" />
                <stop offset=".95" stopColor="#c4c4c4" />
                <stop offset="1" stopColor="#cccccc" />
              </linearGradient>
            </defs>
            <path
              d="M21.5 0 L21.5 19.5 L31.5 19.5 L31.5 29 L10 48.5 L10 28.5 L0.5 28.5 L0.5 18.5 Z"
              fill="url(#nl-bg1)"
            />
            <rect x="0.5" y="18.5" width="9" height="10" fill="#fdfdfd" />
            <rect x="22" y="19.5" width="9.5" height="9.5" fill="#fdfdfd" />
          </svg>
        </a>

        <nav className="nl-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="nl-pill nl-pill-nav" href="#get-started">
          <span>Get Started</span>
        </a>

        <button
          className="nl-burger"
          id="nl-burger"
          aria-controls="nl-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <i />
          <i />
        </button>
      </header>

      <nav className="nl-menu" id="nl-menu" aria-hidden={!isOpen}>
        <div className="nl-menu-inner">
          <p className="nl-menu-eyebrow">Menu</p>
          <ul className="nl-menu-list">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setIsOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nl-menu-foot">
            <a className="nl-pill nl-pill-menu" href="#get-started" onClick={() => setIsOpen(false)}>
              <span>Get Started</span>
            </a>
            <a className="nl-ghost nl-ghost-menu" href="#architecture" onClick={() => setIsOpen(false)}>
              View Architecture
            </a>
          </div>
        </div>
      </nav>

      <main className="nl-hero">
        <h1 className="nl-headline">
          <span>The Next Layer</span>{' '}
          <span>of Intelligence</span>
        </h1>
        <p className="nl-sub">
          <span>A unified infrastructure platform to help teams build,</span>{' '}
          <span>ship, and scale AI systems with confidence.</span>
        </p>
        <div className="nl-actions">
          <a className="nl-pill nl-pill-cta" href="#get-started">
            <span>Get Started</span>
          </a>
          <a className="nl-ghost" href="#architecture">
            View Architecture
          </a>
        </div>
      </main>

      <div className="nl-logos">
        <div className="nl-lg nl-lg1">
          <svg viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="nl-m1">
              <rect width="30" height="31" fill="#fff" />
              <circle cx="19.5" cy="10.5" r="5.1" fill="#000" />
            </mask>
            <rect x="2" y="3" width="26" height="26" rx="6" stroke="currentColor" strokeWidth="2.6" mask="url(#nl-m1)" />
            <circle cx="19.5" cy="10.5" r="4" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          <span className="nl-word">logoipsum</span>
        </div>

        <div className="nl-lg nl-lg2">
          <svg viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="nl-m2">
              <rect width="25" height="30" fill="#fff" />
              <rect x="0" y="0" width="12.5" height="30" fill="#000" />
            </mask>
            <rect x="2" y="2" width="5.4" height="26" fill="currentColor" />
            <circle cx="17" cy="15" r="10.5" fill="currentColor" mask="url(#nl-m2)" />
            <circle cx="17" cy="15" r="10.5" stroke="currentColor" strokeWidth="2.4" fill="none" />
          </svg>
          <span className="nl-word">
            logoipsum
            <span className="nl-dot" />
          </span>
        </div>

        <div className="nl-lg nl-lg3">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="12.35" stroke="currentColor" strokeWidth="3.1" />
            <path d="M6 10c2-4 8-5 11-2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
            <path d="M22 18c-2 4-8 5-11 2" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          </svg>
          <span className="nl-word">logoipsum</span>
        </div>

        <div className="nl-lg nl-lg4">
          <svg viewBox="0 0 28 25.5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 14c3-8 8-12 12-12s9 4 12 12c-4 3-8 4-12 4s-8-1-12-4Z" fill="currentColor" />
            <path
              d="M2 19.5c3 2 8 3 12 3s9-1 12-3"
              stroke="currentColor"
              strokeWidth="3.05"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M2 24.5c3 1.4 8 2 12 2s9-.6 12-2"
              stroke="currentColor"
              strokeWidth="3.05"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="nl-word">logoipsum</span>
        </div>
      </div>
    </section>
  );
}
