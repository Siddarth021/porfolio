import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollProgress, CursorGlow } from '@/components/atmosphere'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { Journey } from '@/components/sections/journey'
import { Focus } from '@/components/sections/focus'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Activity } from '@/components/sections/activity'
import { Publications } from '@/components/sections/publications'
import { Contact, Footer } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <SiteNav />
      <main className="relative overflow-x-clip">
        <Hero />
        <Journey />
        <Focus />
        <Projects />
        <Skills />
        <Activity />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
