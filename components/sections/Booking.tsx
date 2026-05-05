'use client'

import { motion } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'

export function Booking() {
  const { open } = useModal()
  const { lang } = useLanguage()
  const tx = t.booking

  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-36 bg-dark-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #B5714A, transparent 70%)' }} />
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #B5714A, transparent 70%)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px opacity-20" style={{ background: 'linear-gradient(90deg, transparent, #B5714A, transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-px opacity-20" style={{ background: 'linear-gradient(90deg, transparent, #B5714A, transparent)' }} />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold font-medium">{tx.eyebrow[lang]}</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {tx.heading1[lang]}
            <br />
            <span className="gold-text">{tx.heading2[lang]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-body text-base text-dark-500 leading-relaxed">{tx.sub[lang]}</p>
          <button onClick={open}
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-5 font-body text-base font-semibold tracking-wide text-dark transition-all duration-300 hover:shadow-[0_0_50px_rgba(181,113,74,0.35)] active:scale-[0.98]"
          >
            <span className="relative z-10">{tx.cta[lang]}</span>
            <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="relative z-10" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
            <div className="absolute inset-0 bg-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
          <p className="mt-5 font-body text-xs text-dark-500">
            {tx.phone[lang]}{' '}
            <a href="tel:0648539573" className="text-gold hover:text-gold-light transition-colors">06 48539573</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
