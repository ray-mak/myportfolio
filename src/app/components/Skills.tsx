import { Bebas_Neue, Roboto_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

const mono = Roboto_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export default function SkillsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-retroGray">
      <h2 className={`text-5xl text-black mb-12 ${bebas.className}`}>Skills</h2>
      <div className="md:w-3/4 xl:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 text-sm items-center">
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              fill
              alt="html icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>HTML</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              fill
              alt="css icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>CSS</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              fill
              alt="javascript icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>
            JavaScript
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              fill
              alt="react icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>React</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              fill
              alt="typescript icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>
            Typescript
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              fill
              alt="tailwind css icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>Tailwind</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              fill
              alt="redux icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>Redux</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
              fill
              alt="next js icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>NextJS</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              fill
              alt="node icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>Node</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              fill
              alt="express js icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>Express</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition lg:relative xl:left-80 2xl:left-auto">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              fill
              alt="mongo db icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>MongoDB</p>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 bg-white border-2 border-black shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition lg:relative xl:left-80 2xl:left-auto">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              fill
              alt="prisma icon"
            />
          </div>
          <p className={`text-center font-bold ${mono.className}`}>Prisma</p>
        </div>
      </div>
    </section>
  )
}
