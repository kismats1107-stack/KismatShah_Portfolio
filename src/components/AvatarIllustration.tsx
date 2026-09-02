export default function AvatarIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 440"
      className={className}
      role="img"
      aria-label="Illustrated avatar of Kismat, smiling"
    >
      <defs>
        <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3f4a" />
          <stop offset="55%" stopColor="#181b21" />
          <stop offset="100%" stopColor="#0a0b0e" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3c9a3" />
          <stop offset="100%" stopColor="#e0a878" />
        </linearGradient>
        <radialGradient id="cheekGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff9d84" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff9d84" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Head */}
      <ellipse cx="200" cy="240" rx="128" ry="140" fill="url(#skinGrad)" />

      {/* Ears */}
      <ellipse cx="76" cy="250" rx="18" ry="26" fill="url(#skinGrad)" />
      <ellipse cx="324" cy="250" rx="18" ry="26" fill="url(#skinGrad)" />

      {/* Hair */}
      <path
        d="M70 200
           C 55 90, 140 30, 200 32
           C 262 30, 348 92, 330 205
           C 322 165, 300 150, 300 150
           C 300 150, 305 190, 285 210
           C 270 160, 250 145, 200 140
           C 150 145, 130 160, 115 210
           C 95 190, 100 150, 100 150
           C 100 150, 78 165, 70 200 Z"
        fill="url(#hairGrad)"
      />

      {/* Cheeks (happy blush) */}
      <circle cx="140" cy="270" r="30" fill="url(#cheekGrad)" />
      <circle cx="260" cy="270" r="30" fill="url(#cheekGrad)" />

      {/* Eyebrows */}
      <path d="M120 205 Q150 190 178 202" stroke="#241a14" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M222 202 Q250 190 280 205" stroke="#241a14" strokeWidth="8" strokeLinecap="round" fill="none" />

      {/* Eyes (happy, slightly curved) */}
      <path d="M128 232 Q145 220 162 232" stroke="#241a14" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M238 232 Q255 220 272 232" stroke="#241a14" strokeWidth="9" strokeLinecap="round" fill="none" />

      {/* Freckles */}
      <g fill="#c67a4e" opacity="0.45">
        <circle cx="150" cy="290" r="2.4" />
        <circle cx="160" cy="296" r="2.2" />
        <circle cx="168" cy="288" r="2" />
        <circle cx="232" cy="288" r="2" />
        <circle cx="240" cy="296" r="2.2" />
        <circle cx="250" cy="290" r="2.4" />
      </g>

      {/* Big genuine smile */}
      <path
        d="M150 300 Q200 350 250 300"
        stroke="#8a3d2a"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M162 308 Q200 336 238 308 Q200 322 162 308 Z" fill="#fff" opacity="0.9" />

      {/* Hoop earrings, matching the original placeholder */}
      <circle cx="76" cy="292" r="16" fill="none" stroke="#d7e2ea" strokeWidth="4" />
      <circle cx="324" cy="292" r="16" fill="none" stroke="#d7e2ea" strokeWidth="4" />
    </svg>
  );
}
