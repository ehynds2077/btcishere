import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const CONNECTION_DIST = 150
const MOUSE_RADIUS = 150
const MOUSE_FORCE = 0.3
const PARTICLE_COLOR = "rgba(247, 147, 26, 0.18)"
const LINE_COLOR_BASE = [247, 147, 26] as const
const LINE_ALPHA = 0.05

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 768
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })

  const initParticles = useCallback((w: number, h: number) => {
    const count = isMobile() ? 35 : 80
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const reduced = prefersReducedMotion()

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      particlesRef.current = initParticles(window.innerWidth, window.innerHeight)
    }

    resize()
    window.addEventListener("resize", resize)

    // Mouse tracking via window (canvas has pointer-events: none)
    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)

    // Render static for reduced motion
    if (reduced) {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      const particles = particlesRef.current

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = LINE_ALPHA * (1 - dist / CONNECTION_DIST)
            ctx.strokeStyle = `rgba(${LINE_COLOR_BASE[0]}, ${LINE_COLOR_BASE[1]}, ${LINE_COLOR_BASE[2]}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.fillStyle = PARTICLE_COLOR
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      return () => {
        window.removeEventListener("resize", resize)
        window.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseleave", onMouseLeave)
      }
    }

    // Animation loop
    function animate() {
      if (!canvas || !ctx) return
      animRef.current = requestAnimationFrame(animate)

      const w = window.innerWidth
      const h = window.innerHeight
      const particles = particlesRef.current
      const mouse = mouseRef.current

      ctx.clearRect(0, 0, w, h)

      // Update positions
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const distMouse = Math.sqrt(dx * dx + dy * dy)
        if (distMouse < MOUSE_RADIUS && distMouse > 0) {
          const force = (1 - distMouse / MOUSE_RADIUS) * MOUSE_FORCE
          p.vx += (dx / distMouse) * force
          p.vy += (dy / distMouse) * force
        }

        // Apply velocity with damping
        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx) }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx) }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy) }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const alpha = LINE_ALPHA * (1 - dist / CONNECTION_DIST)
            ctx.strokeStyle = `rgba(${LINE_COLOR_BASE[0]}, ${LINE_COLOR_BASE[1]}, ${LINE_COLOR_BASE[2]}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.fillStyle = PARTICLE_COLOR
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [initParticles])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -2 }}>
      <canvas ref={canvasRef} />
    </div>
  )
}
