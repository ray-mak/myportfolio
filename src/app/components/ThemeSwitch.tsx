"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { tree } from "next/dist/build/templates/app-page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative ">
      <div
        className={`${
          resolvedTheme === "light" ? "bg-white" : "bg-slate-600"
        } w-8 h-4 rounded-3xl`}
      ></div>
      <div
        className={`theme-button ${
          resolvedTheme === "light" ? "" : "darkmode"
        }  flex items-center justify-center`}
        onClick={
          resolvedTheme === "light"
            ? () => setTheme("dark")
            : () => setTheme("light")
        }
      >
        {resolvedTheme === "light" ? (
          <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B" }} />
        ) : (
          <FontAwesomeIcon icon={faSun} style={{ color: "#556e82" }} />
        )}
      </div>
    </div>
  )
}
