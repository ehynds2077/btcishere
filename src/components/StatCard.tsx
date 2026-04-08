import { useEffect, useRef, useState } from "react"
import { animate, motion } from "framer-motion"
import { Card, CardContent } from "#/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  label: string
  value: number
  prefix?: string
  suffix?: string
  icon?: LucideIcon
  decimals?: number
}

export function StatCard({
  label,
  value,
  prefix = "",
  suffix = "",
  icon: Icon,
  decimals = 0,
}: StatCardProps) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    if (animated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          animate(0, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate: (v) => {
              setDisplay(
                decimals > 0
                  ? v.toFixed(decimals)
                  : Math.round(v).toLocaleString(),
              )
            },
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, decimals])

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card ref={ref} className="glow-orange card-hover story-card overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">{label}</p>
            {Icon && (
              <span className="h-8 w-8 rounded-lg border border-primary/30 bg-primary/12 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </span>
            )}
          </div>
          <p className="text-3xl sm:text-4xl font-semibold mt-3 tracking-tight text-foreground">
            {prefix}
            {display}
            {suffix}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
