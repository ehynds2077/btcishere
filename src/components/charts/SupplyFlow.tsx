import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { supplySegments, CIRCULATING_SUPPLY } from "#/lib/data/index"
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card"

const W = 800
const H = 420
const LEFT_X = 80
const RIGHT_X = 680
const NODE_W = 12

// Flow nodes — source on left, destinations on right
const sourceNode = {
  label: `Mined: ${(CIRCULATING_SUPPLY / 1_000_000).toFixed(2)}M BTC`,
  btc: CIRCULATING_SUPPLY,
}

// Use supply segments as destination nodes (excluding Unmined)
const destNodes = supplySegments
  .filter((s) => s.name !== "Unmined")
  .sort((a, b) => b.btc - a.btc)

// Calculate vertical positions for destination nodes
function layoutNodes() {
  const totalBtc = destNodes.reduce((s, n) => s + n.btc, 0)
  const usableH = H - 80
  const gap = 8
  const totalGap = gap * (destNodes.length - 1)
  const availH = usableH - totalGap

  let y = 40
  return destNodes.map((node) => {
    const h = Math.max(16, Math.sqrt(node.btc / totalBtc) * availH * 1.6)
    const pos = { ...node, y, h, cy: y + h / 2 }
    y += h + gap
    return pos
  })
}

const nodes = layoutNodes()
const sourceCy = H / 2
const sourceH = Math.min(H - 80, nodes.reduce((s, n) => s + n.h, 0) + (nodes.length - 1) * 8)
const sourceY = sourceCy - sourceH / 2

// Build bezier paths
function buildPath(destCy: number, destH: number, srcCy: number): string {
  const x0 = LEFT_X + NODE_W
  const x1 = RIGHT_X
  const cpx = (x0 + x1) / 2

  const topSrc = srcCy - destH / 2
  const botSrc = srcCy + destH / 2
  const topDst = destCy - destH / 2
  const botDst = destCy + destH / 2

  return [
    `M ${x0} ${topSrc}`,
    `C ${cpx} ${topSrc}, ${cpx} ${topDst}, ${x1} ${topDst}`,
    `L ${x1} ${botDst}`,
    `C ${cpx} ${botDst}, ${cpx} ${botSrc}, ${x0} ${botSrc}`,
    `Z`,
  ].join(" ")
}

// Center line for flowing dashes
function buildCenterPath(destCy: number, srcCy: number): string {
  const x0 = LEFT_X + NODE_W
  const x1 = RIGHT_X
  const cpx = (x0 + x1) / 2
  return `M ${x0} ${srcCy} C ${cpx} ${srcCy}, ${cpx} ${destCy}, ${x1} ${destCy}`
}

export function SupplyFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Spread source connection points evenly
  const totalNodeH = nodes.reduce((s, n) => s + n.h, 0)
  let srcOffset = sourceCy - totalNodeH / 2

  const flows = nodes.map((node, i) => {
    const srcCy = srcOffset + node.h / 2
    srcOffset += node.h
    const fillPath = buildPath(node.cy, node.h, srcCy)
    const centerPath = buildCenterPath(node.cy, srcCy)
    const pathStart = 0.15 + i * 0.06
    const pathEnd = pathStart + 0.15
    return { ...node, fillPath, centerPath, srcCy, pathStart, pathEnd, index: i }
  })

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Where the supply sits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="min-h-[50vh]">
          <div className="sticky top-20">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full h-auto"
              style={{ maxHeight: "55vh" }}
            >
              <defs>
                <filter id="flow-glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Source node */}
              <rect
                x={LEFT_X}
                y={sourceY}
                width={NODE_W}
                height={sourceH}
                rx={4}
                fill="oklch(0.75 0.18 55)"
                filter="url(#flow-glow)"
              />
              <text
                x={LEFT_X - 8}
                y={sourceCy}
                fill="oklch(0.93 0.01 85)"
                fontSize={12}
                fontWeight="600"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {sourceNode.label}
              </text>

              {/* Flow paths */}
              {flows.map((flow) => (
                <motion.g key={flow.name}>
                  {/* Filled flow shape */}
                  <motion.path
                    d={flow.fillPath}
                    fill={flow.color}
                    opacity={0.15}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [flow.pathStart, flow.pathEnd],
                        [0, 0.15],
                      ),
                    }}
                  />

                  {/* Center line with glow */}
                  <motion.path
                    d={flow.centerPath}
                    fill="none"
                    stroke={flow.color}
                    strokeWidth={1.5}
                    filter="url(#flow-glow)"
                    style={{
                      pathLength: useTransform(
                        scrollYProgress,
                        [flow.pathStart, flow.pathEnd],
                        [0, 1],
                      ),
                    }}
                  />

                  {/* Flowing dash overlay */}
                  <motion.path
                    d={flow.centerPath}
                    fill="none"
                    stroke={flow.color}
                    strokeWidth={1}
                    strokeDasharray="8 16"
                    strokeOpacity={0.5}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [flow.pathEnd - 0.02, flow.pathEnd],
                        [0, 1],
                      ),
                      animation: "flow-dash 1.5s linear infinite",
                    }}
                  />
                </motion.g>
              ))}

              {/* Destination nodes */}
              {flows.map((flow) => (
                <motion.g
                  key={`dest-${flow.name}`}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [flow.pathEnd - 0.03, flow.pathEnd],
                      [0, 1],
                    ),
                  }}
                >
                  <rect
                    x={RIGHT_X}
                    y={flow.cy - flow.h / 2}
                    width={NODE_W}
                    height={flow.h}
                    rx={4}
                    fill={flow.color}
                    filter="url(#flow-glow)"
                  />
                  <text
                    x={RIGHT_X + NODE_W + 8}
                    y={flow.cy - 6}
                    fill="oklch(0.93 0.01 85)"
                    fontSize={11}
                    fontWeight="500"
                    dominantBaseline="middle"
                  >
                    {flow.name}
                  </text>
                  <text
                    x={RIGHT_X + NODE_W + 8}
                    y={flow.cy + 8}
                    fill="oklch(0.6 0.02 85)"
                    fontSize={9}
                    dominantBaseline="middle"
                  >
                    {flow.btc >= 1_000_000
                      ? `${(flow.btc / 1_000_000).toFixed(2)}M`
                      : flow.btc.toLocaleString()}{" "}
                    BTC
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
