import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Navbar, NavLink } from "./components/Navbar"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Raymond Mak - Front End Developer",
  description: "Showcasing the work of a frontend/full stack developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-bgRetro ${roboto.className}`}>{children}</body>
    </html>
  )
}
