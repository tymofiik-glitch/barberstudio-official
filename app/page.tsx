import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Reviews } from '@/components/sections/Reviews'
import { Gallery } from '@/components/sections/Gallery'
import { Booking } from '@/components/sections/Booking'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  )
}
