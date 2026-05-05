'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { SHOP_INFO } from '@/lib/constants'
import { t } from '@/lib/translations'

const iconStyle = { background: 'rgba(181,113,74,0.1)', border: '1px solid rgba(181,113,74,0.2)' }
const cardStyle = { background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.07)' }

export function Contact() {
  const { lang } = useLanguage()
  const tx = t.contact

  return (
    <section id="contact" className="section-padding bg-dark pb-32 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionReveal className="mb-16 md:mb-20">
          <GoldDivider className="mb-6" />
          <h2 className="font-display font-black text-off-white leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {tx.heading[lang]}
          </h2>
          <p className="mt-4 max-w-lg font-body text-base text-dark-500 leading-relaxed">{tx.sub[lang]}</p>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <SectionReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl p-6" style={cardStyle}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-gold" style={iconStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-off-white">{tx.address[lang]}</h3>
                  <p className="mt-1 font-body text-sm text-dark-500 leading-relaxed">
                    {SHOP_INFO.address}<br />{SHOP_INFO.city}
                  </p>
                  <a href="https://maps.google.com/maps?q=Two+in+one+barberstudio+Rijswijk" target="_blank" rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-body text-xs text-gold hover:text-gold-light transition-colors">
                    {tx.directions[lang]}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl p-6" style={cardStyle}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-gold" style={iconStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 10.93a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-off-white">{tx.phone[lang]}</h3>
                  <a href="tel:0648539573" className="mt-1 block font-body text-sm text-dark-500 hover:text-gold transition-colors">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-2xl p-6" style={cardStyle}>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-gold" style={iconStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-off-white">{tx.hours[lang]}</h3>
                  <div className="mt-2 flex flex-col gap-1">
                    <p className="font-body text-sm text-dark-500">{SHOP_INFO.hours.weekdays}</p>
                    <p className="font-body text-sm text-dark-500">{SHOP_INFO.hours.saturday}</p>
                    <p className="font-body text-sm text-dark-500">{SHOP_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.2}>
            <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.07)', height: '420px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.294462004934!2d4.3328131999999995!3d52.0379497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b74caf57eb2d%3A0xd56faa900fd56876!2sTwo%20in%20one%20barberstudio!5e0!3m2!1sru!2snl!4v1777924132689!5m2!1sru!2snl"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Two in One Barberstudio"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
