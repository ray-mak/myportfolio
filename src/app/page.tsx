"use client"
import { Bebas_Neue, Bungee } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import WorkSection from "./components/WorkSection"
import SkillsSection from "./components/Skills"
import ContactSection from "./components/Contact"
import { Navbar, NavLink } from "./components/Navbar"
import Footer from "./components/Footer"
import { useRef } from "react"
import HeroSection from "./components/HeroSection"

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export default function HomePage() {
  const workRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Navbar>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#work">Projects</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <NavLink href="/about">About</NavLink>
      </Navbar>
      <main>
        <div className="flex">
          <div className="mt-16 md:mt-0 w-full flex items-center justify-center text-neutral-800">
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
