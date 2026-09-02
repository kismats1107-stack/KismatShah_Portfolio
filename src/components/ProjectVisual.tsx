export default function ProjectVisual({ color, seed = 0 }: { color: string; seed?: number }) {
  const id = `pv-${seed}`;
  return (
    <div
      className="relative w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
      style={{ background: '#111' }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`${id}-glow`} cx="30%" cy="30%" r="75%">
            <stop offset="0%" stopColor={color} stopOpacity="0.55" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <pattern id={`${id}-grid`} width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.4" cy="1.4" r="1.4" fill={color} opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-glow)`} />
        <rect width="100%" height="100%" fill={`url(#${id}-grid)`} />
        {/* Abstract circuit lines */}
        <g stroke={color} strokeWidth="1.5" strokeOpacity="0.5" fill="none">
          <path d={`M ${20 + seed * 15} 40 h 90 v 60 h 70`} />
          <path d={`M ${260 - seed * 10} 200 h -60 v -50 h -90`} />
          <path d={`M 40 220 h 50 v -80`} />
        </g>
        <g fill={color}>
          <circle cx={20 + seed * 15} cy="40" r="4" />
          <circle cx={180 + seed * 15} cy="100" r="4" />
          <circle cx={260 - seed * 10} cy="200" r="4" />
          <circle cx="40" cy="220" r="4" />
        </g>
      </svg>
    </div>
  );
}
