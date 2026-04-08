import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
