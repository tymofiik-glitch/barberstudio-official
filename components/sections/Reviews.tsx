'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { REVIEWS, SHOP_INFO } from '@/lib/constants'
import { t } from '@/lib/translations'

export function Reviews() {
  const { lang } = useLanguage()
  const tx = t.reviews
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % REVIEWS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
  }, [])

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0, transition: { duration: 0.5 } }),
  }

  return (
    <section id="reviews" className="section-padding bg-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionReveal className="mb-16">
          <GoldDivider className="mb-6" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {tx.heading[lang]}
              </h2>
              <p className="mt-4 max-w-lg font-body text-base text-dark-500 leading-relaxed">
                {tx.sub[lang]}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl px-6 py-4 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-center">
                <p className="font-display text-4xl font-black text-gold">{SHOP_INFO.rating}</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#B5714A">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-1 font-body text-xs text-dark-500">{SHOP_INFO.reviewCount} {tx.count[lang]}</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div key={current} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <ReviewCard {...REVIEWS[current]} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'w-1.5 bg-dark-400 hover:bg-dark-500'}`}
                  aria-label={`${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ fn: prev, label: tx.prev[lang], d: 'M15 18l-6-6 6-6' }, { fn: next, label: tx.next[lang], d: 'M9 18l6-6-6-6' }].map(({ fn, label, d }) => (
                <button key={label} onClick={fn} aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-400 text-off-white/50 transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
