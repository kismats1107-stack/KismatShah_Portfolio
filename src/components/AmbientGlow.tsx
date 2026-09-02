export default function AmbientGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full opacity-70 animate-glow-a"
        style={{ background: 'radial-gradient(circle, #B600A8, transparent 65%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full opacity-60 animate-glow-b"
        style={{ background: 'radial-gradient(circle, #7621B0, transparent 65%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-[5%] left-[20%] w-[40vw] h-[40vw] rounded-full opacity-50 animate-glow-c"
        style={{ background: 'radial-gradient(circle, #BE4C00, transparent 65%)', filter: 'blur(60px)' }}
      />
    </div>
  );
}
