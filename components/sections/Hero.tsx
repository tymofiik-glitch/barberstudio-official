'use client'

import { motion } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }

export function Hero() {
  const { open } = useModal()
  const { lang } = useLanguage()
  const tx = t.hero

  return (
    <section id="hero" className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold font-medium">
              {tx.eyebrow[lang]}
            </span>
          </motion.div>

          <motion.h1 variants={item}
            className="font-display font-black text-off-white leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            {tx.line1[lang]}
            <br />
            <span className="gold-text">Premium</span>
            <br />
            {tx.line2[lang]}
          </motion.h1>

          <motion.p variants={item}
            className="mt-5 max-w-md font-body text-base md:text-lg text-off-white/60 leading-relaxed"
          >
            {tx.sub[lang]}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#B5714A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-body text-sm text-off-white/60">{tx.rating[lang]}</span>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <button onClick={open}
              className="group relative overflow-hidden rounded-full bg-gold px-8 py-4 font-body text-sm font-semibold tracking-wide text-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(181,113,74,0.35)]"
            >
              <span className="relative z-10">{tx.cta[lang]}</span>
              <div className="absolute inset-0 bg-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border border-off-white/20 px-8 py-4 font-body text-sm font-semibold tracking-wide text-off-white/80 transition-all duration-300 hover:border-gold/60 hover:text-off-white"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.04)' }}
            >
              {tx.secondary[lang]}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-off-white/30">{tx.scroll[lang]}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(240,235,229,0.3)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
