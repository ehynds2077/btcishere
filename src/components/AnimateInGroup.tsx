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
        hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
