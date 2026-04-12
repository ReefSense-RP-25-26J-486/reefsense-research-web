import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import SystemOverview from '@/components/sections/SystemOverview'
import Methodology from '@/components/sections/Methodology'
import Milestones from '@/components/sections/Milestones'
import Resources from '@/components/sections/Resources'
import Team from '@/components/sections/Team'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SystemOverview />
        <Methodology />
        <Milestones />
        <Resources />
        <Team />
      </main>
      <Footer />
    </>
  )
}
