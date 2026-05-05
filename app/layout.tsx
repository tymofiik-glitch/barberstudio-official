import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ModalProvider } from '@/components/providers/ModalProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { Navbar } from '@/components/layout/Navbar'
import { BookingModal } from '@/components/ui/BookingModal'
import { StickyBookingBar } from '@/components/ui/StickyBookingBar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Two in One Barberstudio | Premium Barber in Rijswijk',
  description:
    "Rijswijk's highest-rated barbershop. Precision cuts, skin fades, and beard trims — delivered with 5-star professionalism at Two in One Barberstudio.",
  keywords: ['barber', 'barbershop', 'Rijswijk', 'skin fade', 'haircut', 'beard trim', 'Netherlands'],
  openGraph: {
    title: 'Two in One Barberstudio | Premium Barber in Rijswijk',
    description: "Rijswijk's highest-rated barbershop with 5-star service.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-dark text-off-white">
        <LanguageProvider>
          <ModalProvider>
            <Navbar />
            <BookingModal />
            <StickyBookingBar />
            {children}
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
