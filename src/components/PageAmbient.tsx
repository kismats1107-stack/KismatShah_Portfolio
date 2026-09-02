export default function PageAmbient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Subtle Studio Crimson Ambient Glow */}
      <div
        className="absolute top-[25%] left-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180, 20, 40, 0.4), transparent 70%)', filter: 'blur(90px)' }}
      />
      <div
        className="absolute top-[60%] right-[-10%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(140, 15, 30, 0.35), transparent 70%)', filter: 'blur(90px)' }}
      />

      {/* Subtle Dot Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
        <pattern id="pageDots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#ffffff" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pageDots)" />
      </svg>
    </div>
  );
}

