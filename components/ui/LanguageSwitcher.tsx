'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="relative flex items-center rounded-full p-0.5"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.09)',
      }}
    >
      <motion.div
        layout
        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-gold',
          lang === 'nl' ? 'left-0.5' : 'left-[calc(50%+1px)]'
        )}
      />
      {(['nl', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            'relative z-10 w-8 py-1 font-body text-[11px] font-semibold tracking-wider uppercase transition-colors duration-200',
            lang === l ? 'text-dark' : 'text-dark-500 hover:text-off-white'
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
