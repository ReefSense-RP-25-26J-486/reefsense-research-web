import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import SystemOverview from '@/components/sections/SystemOverview'
import Methodology from '@/components/sections/Methodology'
import Milestones from '@/components/sections/Milestones'
import Resources from '@/components/sections/Resources'
import Team from '@/components/sections/Team'
import ContactUs from '@/components/sections/ContactUs'
import Footer from '@/components/ui/Footer'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <Hero />
        <About />
        <SystemOverview />
        <Methodology />
        <Milestones />
        <Resources />
        <Team />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
