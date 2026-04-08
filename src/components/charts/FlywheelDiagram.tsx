import { motion } from "framer-motion"
import { Bitcoin } from "lucide-react"
import { flywheelSteps } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

export function FlywheelDiagram() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          How the flywheel works
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Desktop: circular layout */}
        <div className="hidden md:block relative h-[420px]">
          {/* Center BTC icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center shadow-[0_0_40px_rgba(247,147,26,0.2)]">
              <Bitcoin className="h-8 w-8 text-primary" />
            </div>
          </div>

          {flywheelSteps.map((s, i) => {
            const angle = (i * 360) / flywheelSteps.length - 90
            const rad = (angle * Math.PI) / 180
            const radius = 170
            const x = Math.cos(rad) * radius
            const y = Math.sin(rad) * radius

            return (
              <motion.div
                key={s.step}
                className="absolute w-40 text-center"
                style={{
                  top: `calc(50% + ${y}px - 36px)`,
                  left: `calc(50% + ${x}px - 80px)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-1">
                  {s.step}
                </div>
                <p className="text-xs font-semibold leading-tight">{s.title}</p>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Mobile: vertical numbered list */}
        <div className="md:hidden space-y-4">
          {flywheelSteps.map((s, i) => (
            <motion.div
              key={s.step}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {s.step}
              </div>
              <div>
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
