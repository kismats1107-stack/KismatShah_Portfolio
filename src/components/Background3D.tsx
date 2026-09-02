import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const HLS_STREAM_URL = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';

interface Background3DProps {
  className?: string;
  overlayOpacity?: number; // Optional overlay for text readability when needed
}

export default function Background3D({ className = '', overlayOpacity = 0.35 }: Background3DProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: false, // Required for stability in sandboxed environments
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      hls.loadSource(HLS_STREAM_URL);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.warn('Autoplay prevented:', err);
        });
        setVideoLoaded(true);
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native Apple Safari / iOS HLS support
      video.src = HLS_STREAM_URL;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((err) => {
          console.warn('Autoplay prevented:', err);
        });
        setVideoLoaded(true);
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full bg-[#070b0a] overflow-hidden ${className}`}>
      {/* Full-screen 3D Background Stream */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Subtle Cinematic Vignette / Overlay */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, rgba(7,11,10,${overlayOpacity * 0.4}) 0%, rgba(7,11,10,${Math.min(1, overlayOpacity + 0.35)}) 100%)`,
          }}
        />
      )}

      {/* Ambient placeholder glow while loading */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#070b0a]">
          <div className="w-28 h-28 rounded-full bg-[#5ed29c]/20 blur-2xl animate-pulse" />
        </div>
      )}
    </div>
  );
}
