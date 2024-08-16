"use client"

import Link from "next/link"
import { Bungee, Bebas_Neue } from "next/font/google"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode, useState } from "react"

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export function Navbar({ children }: { children: ReactNode }) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  function toggleHamburger() {
    setHamburgerMenu((prevState) => !prevState)
  }
  return (
    <nav className="navbar flex w-full h-16 p-4 md:p-0 flex items-center justify-center bg-bgRetroDark shadow-xl">
      <div className="w-full md:w-5/6 lg:w-2/3 flex">
        <Link href="/" className={`text-4xl font-bold ${bebas.className}`}>
          R.Mak
        </Link>
        <div
          onClick={toggleHamburger}
          className={`hamburger ${hamburgerMenu ? "opened" : ""}`}
        >
          <span className="bar bg-darkBlue"></span>
          <span className="bar bg-darkBlue"></span>
          <span className="bar bg-darkBlue"></span>
        </div>
        <div className={`dimmer ${hamburgerMenu ? "opened" : ""}`}></div>
        <div
          className={`navmenu flex gap-4 ml-auto items-center justify-center ${
            hamburgerMenu ? "opened" : ""
          } ${bebas.className}`}
        >
          {children}
        </div>
      </div>
    </nav>
  )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname()
  return (
    <Link
      {...props}
      className={`text-3xl font-bold text-darkBlue ${bebas.className} ${
        pathname === props.href && "underline text-retroRed"
      }`}
    />
  )
}
