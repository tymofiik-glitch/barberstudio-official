'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
  width?: string
}

export function GoldDivider({ className, width = 'w-12' }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn('h-[1.5px] bg-gold', width)}
      />
      <div className="h-1 w-1 rounded-full bg-gold" />
    </div>
  )
}
