import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Navbar, NavLink } from "./components/Navbar"
import { Providers } from "@/providers"

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-bgRetro dark:bg-bgDarkMode transition-colors duration-300 ${roboto.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
