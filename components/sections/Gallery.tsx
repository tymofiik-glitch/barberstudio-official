'use client'

import { useLanguage } from '@/components/providers/LanguageProvider'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { GoldDivider } from '@/components/ui/GoldDivider'
import { GalleryItem } from '@/components/ui/GalleryItem'
import { GALLERY_IMAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function Gallery() {
  const { lang } = useLanguage()
  const tx = t.gallery

  return (
    <section id="gallery" className="section-padding bg-dark-100">
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
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <GalleryItem key={image.id} {...image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
