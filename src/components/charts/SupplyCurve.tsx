import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { halvingSchedule, NEXT_HALVING_DATE, TOTAL_BTC_SUPPLY } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

// Chart dimensions (SVG viewBox coordinates)
const W = 800
const H = 400
const PAD = { top: 30, right: 40, bottom: 50, left: 70 }
const CHART_W = W - PAD.left - PAD.right
const CHART_H = H - PAD.top - PAD.bottom

const START_YEAR = 2009
const END_YEAR = 2140
const CURRENT_YEAR = 2026

// Map data to SVG coordinates
function xScale(year: number) {
  return PAD.left + ((year - START_YEAR) / (END_YEAR - START_YEAR)) * CHART_W
}

function yScale(btc: number) {
  return PAD.top + CHART_H - (btc / TOTAL_BTC_SUPPLY) * CHART_H
}

// Build the supply curve path — piecewise linear through halving points, approaching 21M
function buildCurvePath(): string {
  const points: [number, number][] = []

  // Genesis
  points.push([START_YEAR, 0])

  // Through each halving event
  for (const h of halvingSchedule) {
    points.push([h.year, h.cumulativeBtc])
  }

  // Approach 21M asymptotically (add a few more points toward 2140)
  const lastHalving = halvingSchedule[halvingSchedule.length - 1]
  const remaining = TOTAL_BTC_SUPPLY - lastHalving.cumulativeBtc
  for (let i = 1; i <= 6; i++) {
    const t = i / 6
    const year = lastHalving.year + t * (END_YEAR - lastHalving.year)
    const btc = lastHalving.cumulativeBtc + remaining * (1 - Math.pow(0.5, t * 6))
    points.push([year, btc])
  }

  let d = `M ${xScale(points[0][0])} ${yScale(points[0][1])}`
  for (let i = 1; i < points.length; i++) {
    const x = xScale(points[i][0])
    const y = yScale(points[i][1])
    // Use smooth quadratic curves for a more organic feel
    const prevX = xScale(points[i - 1][0])
    const prevY = yScale(points[i - 1][1])
    const cpx = (prevX + x) / 2
    d += ` C ${cpx} ${prevY}, ${cpx} ${y}, ${x} ${y}`
  }

  return d
}

const curvePath = buildCurvePath()

// Interpolate cumulative BTC for the current year
function currentBtcEstimate(): number {
  for (let i = 0; i < halvingSchedule.length - 1; i++) {
    const a = halvingSchedule[i]
    const b = halvingSchedule[i + 1]
    if (CURRENT_YEAR >= a.year && CURRENT_YEAR < b.year) {
      const t = (CURRENT_YEAR - a.year) / (b.year - a.year)
      return a.cumulativeBtc + t * (b.cumulativeBtc - a.cumulativeBtc)
    }
  }
  return halvingSchedule[halvingSchedule.length - 1].cumulativeBtc
}

const CURRENT_BTC = currentBtcEstimate()

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target.getTime() - now)
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)

  return { days, hours, minutes, seconds }
}

// Halving markers with readable labels
const halvingMarkers = halvingSchedule
  .filter((h) => h.year >= 2012 && h.year <= 2032)
  .map((h) => ({
    year: h.year,
    btc: h.cumulativeBtc,
    label: `${h.year}`,
    reward: `${h.blockReward} BTC`,
  }))

export function SupplyCurve() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1])
  const countdown = useCountdown(NEXT_HALVING_DATE)

  // Y-axis ticks
  const yTicks = [0, 5_000_000, 10_000_000, 15_000_000, 21_000_000]

  // X-axis ticks
  const xTicks = [2009, 2024, 2040, 2060, 2080, 2100, 2120, 2140]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          The supply curve
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="min-h-[60vh]">
          <div className="sticky top-20">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto"
              style={{ maxHeight: "60vh" }}
            >
              <defs>
                <linearGradient id="curve-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.75 0.18 55)" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="oklch(0.82 0.20 55)" stopOpacity={1} />
                </linearGradient>
                <filter id="curve-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="dot-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid lines */}
              {yTicks.map((tick) => (
                <line
                  key={tick}
                  x1={PAD.left}
                  y1={yScale(tick)}
                  x2={W - PAD.right}
                  y2={yScale(tick)}
                  stroke="oklch(0.28 0.015 60 / 0.4)"
                  strokeWidth={0.5}
                />
              ))}

              {/* 21M asymptote dashed line */}
              <line
                x1={PAD.left}
                y1={yScale(TOTAL_BTC_SUPPLY)}
                x2={W - PAD.right}
                y2={yScale(TOTAL_BTC_SUPPLY)}
                stroke="oklch(0.75 0.18 55 / 0.25)"
                strokeWidth={1}
                strokeDasharray="6 4"
              />
              <text
                x={W - PAD.right + 4}
                y={yScale(TOTAL_BTC_SUPPLY) + 4}
                fill="oklch(0.75 0.18 55 / 0.5)"
                fontSize={10}
              >
                21M
              </text>

              {/* Y-axis labels */}
              {yTicks.map((tick) => (
                <text
                  key={tick}
                  x={PAD.left - 8}
                  y={yScale(tick) + 4}
                  fill="oklch(0.6 0.02 85)"
                  fontSize={10}
                  textAnchor="end"
                >
                  {tick === 0 ? "0" : `${(tick / 1_000_000).toFixed(0)}M`}
                </text>
              ))}

              {/* X-axis labels */}
              {xTicks.map((year) => (
                <text
                  key={year}
                  x={xScale(year)}
                  y={H - PAD.bottom + 20}
                  fill="oklch(0.6 0.02 85)"
                  fontSize={10}
                  textAnchor="middle"
                >
                  {year}
                </text>
              ))}

              {/* The supply curve — draws itself via pathLength */}
              <motion.path
                d={curvePath}
                fill="none"
                stroke="url(#curve-grad)"
                strokeWidth={2.5}
                strokeLinecap="round"
                filter="url(#curve-glow)"
                style={{ pathLength }}
              />

              {/* Halving markers */}
              {halvingMarkers.map((m, i) => {
                const cx = xScale(m.year)
                const cy = yScale(m.btc)
                const threshold = 0.15 + i * 0.08
                return (
                  <motion.g
                    key={m.year}
                    style={{
                      opacity: useTransform(scrollYProgress, [threshold, threshold + 0.05], [0, 1]),
                    }}
                  >
                    <line
                      x1={cx}
                      y1={cy}
                      x2={cx}
                      y2={H - PAD.bottom}
                      stroke="oklch(0.75 0.18 55 / 0.15)"
                      strokeWidth={0.5}
                      strokeDasharray="3 3"
                    />
                    <circle cx={cx} cy={cy} r={3} fill="oklch(0.75 0.18 55)" />
                    <text
                      x={cx}
                      y={cy - 14}
                      fill="oklch(0.6 0.02 85)"
                      fontSize={9}
                      textAnchor="middle"
                    >
                      {m.reward}
                    </text>
                    <text
                      x={cx}
                      y={cy - 4}
                      fill="oklch(0.75 0.18 55 / 0.7)"
                      fontSize={8}
                      textAnchor="middle"
                    >
                      {m.label}
                    </text>
                  </motion.g>
                )
              })}

              {/* "We are here" pulsing dot */}
              <motion.g
                style={{
                  opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
                }}
              >
                <circle
                  cx={xScale(CURRENT_YEAR)}
                  cy={yScale(CURRENT_BTC)}
                  r={8}
                  fill="oklch(0.75 0.18 55 / 0.2)"
                  filter="url(#dot-glow)"
                >
                  <animate
                    attributeName="r"
                    values="6;10;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.15;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={xScale(CURRENT_YEAR)}
                  cy={yScale(CURRENT_BTC)}
                  r={4}
                  fill="oklch(0.82 0.20 55)"
                  filter="url(#dot-glow)"
                />
                <text
                  x={xScale(CURRENT_YEAR) + 12}
                  y={yScale(CURRENT_BTC) - 8}
                  fill="oklch(0.93 0.01 85)"
                  fontSize={11}
                  fontWeight="600"
                >
                  We are here
                </text>
                <text
                  x={xScale(CURRENT_YEAR) + 12}
                  y={yScale(CURRENT_BTC) + 6}
                  fill="oklch(0.6 0.02 85)"
                  fontSize={9}
                >
                  ~{(CURRENT_BTC / 1_000_000).toFixed(2)}M BTC mined
                </text>
              </motion.g>
            </svg>

            {/* Halving countdown */}
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground mb-2">
                Next Halving (April 2028)
              </p>
              <div className="flex justify-center gap-4">
                {[
                  { value: countdown.days, label: "days" },
                  { value: countdown.hours, label: "hrs" },
                  { value: countdown.minutes, label: "min" },
                  { value: countdown.seconds, label: "sec" },
                ].map((unit) => (
                  <div key={unit.label} className="text-center">
                    <span className="text-2xl font-bold text-foreground tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      {unit.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
