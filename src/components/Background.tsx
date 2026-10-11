export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'var(--bg-deep)' }}
      />

      {/* Teal gradient blob - top left */}
      <div
        className="gradient-blob animate-gradient-drift"
        style={{
          width: '600px',
          height: '600px',
          top: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22), transparent 70%)',
        }}
      />

      {/* Lime gradient blob - bottom right */}
      <div
        className="gradient-blob animate-gradient-drift"
        style={{
          width: '550px',
          height: '550px',
          bottom: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(163, 230, 53, 0.15), transparent 70%)',
          animationDelay: '5s',
        }}
      />

      {/* Amber gradient blob - center right */}
      <div
        className="gradient-blob animate-gradient-drift"
        style={{
          width: '500px',
          height: '500px',
          top: '30%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.12), transparent 70%)',
          animationDelay: '10s',
        }}
      />

      {/* Muted violet blob - bottom left */}
      <div
        className="gradient-blob animate-gradient-drift"
        style={{
          width: '450px',
          height: '450px',
          bottom: '15%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(139, 127, 170, 0.15), transparent 70%)',
          animationDelay: '7s',
        }}
      />

      {/* Teal accent - mid left */}
      <div
        className="gradient-blob animate-float-slow"
        style={{
          width: '350px',
          height: '350px',
          top: '50%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(52, 211, 153, 0.12), transparent 70%)',
        }}
      />

      <div className="grain-overlay" />
    </div>
  );
}
