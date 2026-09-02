import { useEffect, useRef, useState } from 'react';

export default function FluidCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let rafId: number;

    const animate = () => {
      const el = spotlightRef.current;
      const core = coreRef.current;

      // Silky smooth trailing physics
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;

      if (el) {
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (core) {
        core.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Primary Luminous Floating Spotlight (High Visibility, Screen Blend) */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-[380px] h-[380px] rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 122, 0, 0.45) 0%, rgba(255, 60, 0, 0.22) 35%, rgba(0, 212, 255, 0.08) 60%, transparent 75%)',
          filter: 'blur(30px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Immediate Pointer Radiant Core Aura */}
      <div
        ref={coreRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-[40px] h-[40px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 200, 100, 0.7) 0%, rgba(255, 122, 0, 0.3) 50%, transparent 80%)',
          filter: 'blur(6px)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
