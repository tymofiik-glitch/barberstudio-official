'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { SHOP_INFO, NAV_LINKS } from '@/lib/constants'
import { t } from '@/lib/translations'

export function Footer() {
  const { lang } = useLanguage()
  const navLabels = t.nav.links[lang]

  return (
    <footer className="border-t py-12"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(26,26,26,0.95)' }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-sm font-black tracking-[0.15em] uppercase text-off-white">Two in One</div>
            <div className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">Barberstudio</div>
            <p className="mt-2 font-body text-xs text-dark-500">{SHOP_INFO.address}, {SHOP_INFO.city}</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link, i) => (
              <a key={link.href} href={link.href}
                className="font-body text-xs tracking-wide text-dark-500 transition-colors hover:text-off-white">
                {navLabels[i]}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 pt-8 md:flex-row md:items-center md:justify-between"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-body text-xs text-dark-500">
            © {new Date().getFullYear()} Two in One Barberstudio. {t.footer.rights[lang]}
          </p>
          <p className="font-body text-xs text-dark-500">
            Rijswijk, Nederland ·{' '}
            <a href="tel:0648539573" className="hover:text-gold transition-colors">{SHOP_INFO.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
