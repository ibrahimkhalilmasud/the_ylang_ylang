import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Experience from '@/components/Experience'
import VillaDetails from '@/components/VillaDetails'
import Gallery from '@/components/Gallery'
import BookingWidget from '@/components/BookingWidget'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <VillaDetails />
        <Experience />
        <Gallery />
        <BookingWidget />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
