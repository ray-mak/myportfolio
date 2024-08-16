import { Bungee } from "next/font/google"

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
})

export default function HomePage() {
  return <h1 className={bungee.className}>Homepage test</h1>
}
