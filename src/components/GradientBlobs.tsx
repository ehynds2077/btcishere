export function GradientBlobs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -3 }}
      aria-hidden
    >
      <div
        className="absolute blob-drift-1"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "oklch(0.72 0.16 68)",
          filter: "blur(100px)",
          opacity: 0.09,
          top: "-10%",
          left: "10%",
        }}
      />
      <div
        className="absolute blob-drift-2"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "oklch(0.78 0.14 50)",
          filter: "blur(100px)",
          opacity: 0.09,
          top: "30%",
          right: "-5%",
        }}
      />
      <div
        className="absolute blob-drift-3"
        style={{
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "oklch(0.45 0.12 290)",
          filter: "blur(100px)",
          opacity: 0.09,
          bottom: "10%",
          left: "20%",
        }}
      />
      <div
        className="absolute blob-drift-4"
        style={{
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "oklch(0.42 0.08 240)",
          filter: "blur(100px)",
          opacity: 0.09,
          bottom: "-5%",
          right: "15%",
        }}
      />
    </div>
  )
}
