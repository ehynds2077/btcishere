export function GlowDivider({ index = 0 }: { index?: number }) {
  return (
    <div
      className="glow-divider"
      style={{ animationDelay: `${index * -0.6}s` } as React.CSSProperties}
    >
      <div className="glow-divider-pulse" />
    </div>
  )
}
