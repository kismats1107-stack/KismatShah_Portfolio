import { useLayoutEffect, useRef, useState } from 'react';

interface FitTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'p';
  /** 1 = exact fit to container width. >1 = intentional symmetric bleed/crop (e.g. 1.3 = 30% wider than the frame). */
  bleed?: number;
  minFontPx?: number;
  maxFontPx?: number;
}

const BASE_PX = 100;

export default function FitText({
  text,
  className = '',
  as = 'h1',
  bleed = 1,
  minFontPx = 16,
  maxFontPx = 600,
}: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState(BASE_PX);

  useLayoutEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const measure = measureRef.current;
      if (!container || !measure) return;
      const naturalWidth = measure.getBoundingClientRect().width;
      const availableWidth = container.clientWidth * bleed;
      if (naturalWidth > 0) {
        const size = (availableWidth / naturalWidth) * BASE_PX;
        setFontSize(Math.min(maxFontPx, Math.max(minFontPx, size)));
      }
    };

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [text, bleed, minFontPx, maxFontPx]);

  const Tag = as;

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Hidden measuring node at a fixed baseline size */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className={className}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontSize: BASE_PX,
          pointerEvents: 'none',
        }}
      >
        {text}
      </span>

      <Tag
        className={className}
        style={{
          whiteSpace: 'nowrap',
          fontSize,
          lineHeight: 1,
          display: 'block',
          textAlign: 'center',
        }}
      >
        {text}
      </Tag>
    </div>
  );
}
