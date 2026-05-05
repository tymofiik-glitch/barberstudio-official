'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  name: string
  description: string
  price: string
  duration: string
  icon: string
  index: number
  fromLabel?: string
}

export function ServiceCard({ name, description, price, duration, icon, index, fromLabel = 'From' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl p-7 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(181,113,74,0.5), transparent)' }}
      />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(181,113,74,0.08)', border: '1px solid rgba(181,113,74,0.15)' }}
      >
        <span className="text-gold">{icon}</span>
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-off-white">{name}</h3>
      <p className="flex-1 font-body text-sm leading-relaxed text-dark-500">{description}</p>
      <div className="mt-6 flex items-end justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-dark-500 mb-1">{fromLabel}</p>
          <p className="font-display text-2xl font-bold text-gold">{price}</p>
        </div>
        <span className="font-body text-xs text-dark-500 tracking-wide">{duration}</span>
      </div>
    </motion.div>
  )
}
