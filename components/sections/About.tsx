'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { t } from '@/lib/translations'

export function About() {
  const { lang } = useLanguage()
  const tx = t.about

  return (
    <section id="about" className="section-padding bg-dark-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <SectionReveal direction="left">
            <GoldDivider className="mb-6" />
            <h2 className="font-display font-black text-off-white leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              {tx.heading1[lang]}
              <br />
              <span className="gold-text">{tx.heading2[lang]}</span>
            </h2>

            <div className="mt-10 space-y-6">
              <p className="font-body text-lg text-off-white/80 leading-relaxed">
                {tx.p1[lang]}
              </p>
              <p className="font-body text-base text-dark-500 leading-relaxed">
                {tx.p2[lang]}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-1">
                <span className="font-display text-3xl font-bold text-gold">12+</span>
                <span className="font-body text-xs uppercase tracking-wider text-dark-500">Ervaring</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-3xl font-bold text-gold">5.0</span>
                <span className="font-body text-xs uppercase tracking-wider text-dark-500">{tx.reviews[lang]}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-3xl font-bold text-gold">100%</span>
                <span className="font-body text-xs uppercase tracking-wider text-dark-500">{tx.satisfaction[lang]}</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" className="relative" delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1000&q=80"
                alt="Barber at work"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-gold/10 blur-2xl" />
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-2xl bg-gold/10 blur-2xl" />
          </SectionReveal>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tx.pillars.map((pillar, i) => (
            <SectionReveal key={pillar[lang]} delay={0.1 * i} className="group">
              <div className="flex flex-col gap-4 rounded-2xl p-8 transition-all duration-300 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-off-white">{pillar[lang]}</h3>
                <p className="font-body text-sm text-dark-500 leading-relaxed">{pillar[`desc${lang === 'nl' ? 'Nl' : 'En'}`]}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
