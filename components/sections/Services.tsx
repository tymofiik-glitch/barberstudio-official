'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SERVICES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function Services() {
  const { lang } = useLanguage()
  const tx = t.services

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionReveal className="mb-16 md:mb-20">
          <GoldDivider className="mb-6" />
          <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {tx.heading[lang]}
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-dark-500 leading-relaxed">
            {tx.sub[lang]}
          </p>
        </SectionReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} fromLabel={tx.from[lang]} />
          ))}
        </div>
      </div>
    </section>
  )
}
