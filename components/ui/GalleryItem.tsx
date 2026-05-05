'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface GalleryItemProps {
  src: string
  alt: string
  index: number
}

export function GalleryItem({ src, alt, index }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-dark-200"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gold/0 transition-all duration-400 group-hover:bg-gold/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-off-white/80">{alt}</p>
      </div>
    </motion.div>
  )
}
