// Precise coordinates measured against the portrait's native 1450x1570
// pixel grid, converted to percentages so they track the image's own
// responsive scaling exactly.
const toPct = (x: number, y: number) => ({ x: (x / 1450) * 100, y: (y / 1570) * 100 });

const leftCorner = toPct(630, 1400);
const rightCorner = toPct(955, 1394);
const control = toPct(792, 1442);
const patchCenter = toPct(792, 1400);

export default function SmileOverlay() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full pointer-events-none select-none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="smilePatch" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#e3ab7e" />
          <stop offset="55%" stopColor="#dda071" />
          <stop offset="100%" stopColor="#dda071" stopOpacity="0" />
        </radialGradient>
        <filter id="smileSoften" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.9" />
        </filter>
      </defs>

      {/* Soft skin-tone patch covering the original crease, feathered at the edges */}
      <ellipse
        cx={patchCenter.x}
        cy={patchCenter.y}
        rx="15"
        ry="4.6"
        fill="url(#smilePatch)"
        filter="url(#smileSoften)"
      />

      {/* Smile: corners high, center low */}
      <path
        d={`M ${leftCorner.x} ${leftCorner.y} Q ${control.x} ${control.y} ${rightCorner.x} ${rightCorner.y}`}
        stroke="#8a4a2f"
        strokeWidth="0.55"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Faint catch-light just above the smile line */}
      <path
        d={`M ${leftCorner.x + 1.6} ${leftCorner.y - 0.5} Q ${control.x} ${control.y - 1.6} ${rightCorner.x - 1.6} ${rightCorner.y - 0.5}`}
        stroke="#ffffff"
        strokeWidth="0.25"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
