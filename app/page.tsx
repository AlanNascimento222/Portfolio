'use client'

import { Header } from "@/components/header/header"
import { Home } from "@/components/home/home"
import { About } from "@/components/about/about"
import { Skills } from "@/components/skills/skills"
import { Projects } from "@/components/projects/projects"
import { Contact } from "@/components/contact/contact"
import { useNavStore } from "@/store/useNavStore"

import { useHashNavigation } from "@/stores/useHashNavigation"

export default function Page() {
  const { activeSection } = useNavStore()
  useHashNavigation()

  return (
    <main className="min-h-screen bg-gray-950">
      <Header />

      <div className="pt-24">
        {activeSection === 'Home' && <Home />}
        {activeSection === 'About' && <About />}
        {activeSection === 'Skills' && <Skills />}
        {activeSection === 'Projects' && <Projects />}
        {activeSection === 'Contact' && <Contact />}
      </div>
    </main>
  )
}
