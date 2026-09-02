import { useEffect, useRef, useState } from 'react';

const PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

// All coordinates are in the image's native pixel space (1450 x 1570),
// measured precisely against a debug coordinate grid.
const CLEAN = { x: 590, y: 1370, w: 405, h: 60 };
const SOURCE_Y = 1295; // clean philtrum skin, same x, shifted up (same lighting column)

export default function PortraitCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    // Clone-stamp: replace the frown crease with real skin pixels copied
    // from directly above it, preserving the render's own gradient/shading
    // instead of painting a flat synthetic patch.
    ctx.drawImage(
      canvas,
      CLEAN.x, SOURCE_Y, CLEAN.w, CLEAN.h,
      CLEAN.x, CLEAN.y, CLEAN.w, CLEAN.h
    );

    // Smile: corners high, center low (a soft "cup" curve).
    ctx.beginPath();
    ctx.moveTo(630, 1400);
    ctx.quadraticCurveTo(792, 1442, 955, 1394);
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(146, 84, 60, 0.85)';
    ctx.stroke();

    // Faint highlight just above the line, echoing the render's soft top-light.
    ctx.beginPath();
    ctx.moveTo(660, 1394);
    ctx.quadraticCurveTo(792, 1428, 925, 1390);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.stroke();
  }, [loaded]);

  return (
    <div className={className} style={{ position: 'relative' }}>
      <img
        ref={imgRef}
        src={PORTRAIT_URL}
        alt=""
        aria-hidden="true"
        draggable={false}
        onLoad={() => setLoaded(true)}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
}
