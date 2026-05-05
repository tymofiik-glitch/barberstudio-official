'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export function SectionReveal({ children, delay = 0, className, direction = 'up' }: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const offsets = {
    up:    { y: 36, x: 0 },
    left:  { y: 0,  x: -36 },
    right: { y: 0,  x: 36 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction], filter: 'blur(4px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
          : { opacity: 0, ...offsets[direction], filter: 'blur(4px)' }
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
