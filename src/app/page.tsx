"use client"
import WorkSection from "./components/WorkSection"
import SkillsSection from "./components/Skills"
import ContactSection from "./components/Contact"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"

import { onLCP, onINP, onCLS } from "web-vitals"

export default function HomePage() {
  onCLS(console.log)
  onINP(console.log)
  onLCP(console.log)
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <div
            id="profile"
            className="mt-16 md:mt-0 w-full flex items-center justify-center text-neutral-800"
          >
            <div className="md:mt-32 flex flex-col items-center">
              <HeroSection />
              <WorkSection />
              <SkillsSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
