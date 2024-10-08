"use client"

import Link from "next/link"
import { Bebas_Neue } from "next/font/google"
import { usePathname } from "next/navigation"
import { ComponentProps, useState } from "react"
import ThemeSwitch from "./ThemeSwitch"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export function Navbar() {
  const pathname = usePathname()
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  function toggleHamburger() {
    setHamburgerMenu((prevState) => !prevState)
  }

  function closeHamburger() {
    setHamburgerMenu(false)
  }
  return (
    <nav className="navbar fixed z-20 flex w-full h-16 p-4 md:p-0 flex items-center justify-center bg-bgRetroDark dark:bg-bgRetroDarkMode shadow-xl">
      <div className="w-full md:w-5/6 lg:w-2/3 flex">
        <Link
          href="/"
          className={`text-4xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${bebas.className}`}
        >
          R.Mak
        </Link>
        <div
          onClick={toggleHamburger}
          className={`hamburger ${hamburgerMenu ? "opened" : ""}`}
        >
          <span className="bar bg-darkBlue dark:bg-retroBlueDarkMode"></span>
          <span className="bar bg-darkBlue dark:bg-retroBlueDarkMode"></span>
          <span className="bar bg-darkBlue dark:bg-retroBlueDarkMode"></span>
        </div>
        <div className={`dimmer ${hamburgerMenu ? "opened" : ""}`}></div>
        <div
          className={`navmenu flex gap-6 ml-auto items-center justify-center ${
            hamburgerMenu ? "opened" : ""
          } ${bebas.className}`}
        >
          <Link
            href="/#profile"
            className={`text-3xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${
              bebas.className
            } ${
              pathname === "/"
                ? "underline text-retroRed dark:text-retroRedDarkMode"
                : ""
            }`}
            onClick={closeHamburger}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className={`text-3xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${bebas.className}`}
            onClick={closeHamburger}
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className={`text-3xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${bebas.className} `}
            onClick={closeHamburger}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`text-3xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${bebas.className}`}
            onClick={closeHamburger}
          >
            About
          </Link>
          <ThemeSwitch />
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
      className={`text-3xl font-bold text-darkBlue dark:text-retroBlueDarkMode ${
        bebas.className
      } ${
        pathname === props.href &&
        "underline text-retroRed dark:text-retroRedDarkMode"
      }`}
    />
  )
}
