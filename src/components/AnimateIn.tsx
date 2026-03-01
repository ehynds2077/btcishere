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
  duration = 0.5,
  className,
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
