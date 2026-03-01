import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimateInGroupProps {
  children: ReactNode
  className?: string
  stagger?: number
}

export function AnimateInGroup({
  children,
  className,
  stagger = 0.08,
}: AnimateInGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimateInGroupItemProps {
  children: ReactNode
  className?: string
}

export function AnimateInGroupItem({ children, className }: AnimateInGroupItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
