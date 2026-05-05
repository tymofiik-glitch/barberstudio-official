'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollNavbar } from '@/hooks/useScrollNavbar'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { NAV_LINKS } from '@/lib/constants'
import { t } from '@/lib/translations'
import { cn } from '@/lib/utils'

export function Navbar() {
  const isScrolled = useScrollNavbar()
  const { open } = useModal()
  const { lang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const navLabels = t.nav.links[lang]

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={
          isScrolled
            ? {
                background: 'rgba(28, 28, 28, 0.82)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              }
            : { background: 'transparent' }
        }
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex flex-col leading-none"
          >
            <span className="font-display text-sm font-black tracking-[0.15em] uppercase text-off-white">
              Two in One
            </span>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">
              Barberstudio
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm tracking-wide text-dark-500 transition-colors duration-200 hover:text-off-white"
              >
                {navLabels[i]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={open}
              className="hidden rounded-full border border-gold/50 px-5 py-2 font-body text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-dark md:block"
              style={{
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                background: 'rgba(181,113,74,0.06)',
              }}
            >
              {t.nav.cta[lang]}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Menu"
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-off-white" />
              <motion.span animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }} className="block h-px w-6 bg-off-white" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-off-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-30 md:hidden"
            style={{
              background: 'rgba(28, 28, 28, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="py-3 text-left font-body text-base text-off-white/80 transition-colors hover:text-off-white border-b last:border-0"
                  style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                  {navLabels[i]}
                </motion.button>
              ))}
              <button
                onClick={() => { setMenuOpen(false); open() }}
                className="mt-4 w-full rounded-full bg-gold py-3.5 font-body text-sm font-semibold text-dark tracking-wide"
              >
                {t.nav.cta[lang]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
