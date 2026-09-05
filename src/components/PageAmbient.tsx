import { useEffect, useState } from 'react';
import DotGrid from './reactbits/DotGrid';

export default function PageAmbient() {
  const [interactive, setInteractive] = useState(true);

  useEffect(() => {
    setInteractive(!window.matchMedia('(pointer: coarse)').matches);
  }, []);

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

      {/* Subtle Reactive Dot Grid */}
      {interactive && (
        <DotGrid
          className="opacity-[0.12] pointer-events-none"
          dotSize={2.5}
          gap={26}
          baseColor="#3a1218"
          activeColor="#d92238"
          proximity={140}
          shockRadius={200}
          shockStrength={3}
        />
      )}
    </div>
  );
}

