'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/components/providers/ModalProvider'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { t } from '@/lib/translations'

export function StickyBookingBar() {
  const { open, isOpen } = useModal()
  const { lang } = useLanguage()
  const tx = t.stickyBar

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 px-6 md:px-0"
        >
          <div
            className="flex items-center gap-5 rounded-full px-6 py-3"
            style={{
              background: 'rgba(28, 28, 28, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(181,113,74,0.1)',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="font-body text-sm text-off-white/70 whitespace-nowrap">
                Two in One Barberstudio · Rijswijk
              </p>
            </div>
            <div className="h-4 w-px bg-dark-400" />
            <button
              onClick={open}
              className="rounded-full bg-gold px-5 py-2 font-body text-sm font-semibold text-dark tracking-wide transition-all duration-200 hover:bg-gold-light active:scale-95"
            >
              {tx.desktop[lang]}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
