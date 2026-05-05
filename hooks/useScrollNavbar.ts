'use client'

import { useState, useEffect } from 'react'

export function useScrollNavbar(threshold = 60) {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > threshold : false
  )

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return isScrolled
}
