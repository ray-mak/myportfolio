import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
import Link from "next/link"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export default function WorkSection() {
  return (
    <section
      id="work"
      className="bg-retroSalmon dark:bg-retroSalmonDarkMode w-full flex flex-col items-center gap-8 py-16 px-6"
    >
      <h2 className={`text-5xl text-gray-100 ${bebas.className}`}>My Work</h2>
      <div className="md:w-5/6 2xl:w-2/3 grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="card-container bg-bgRetroDark dark:bg-bgDarkMode p-2 flex flex-col sm:flex-row xl:flex-col gap-6 xl:gap-4 shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-video overflow-hidden">
            <Image src="/sportfolio.png" fill alt="Picture of Sportfolio app" />
            <div className="overlay "></div>
            <div className="text-container absolute w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="flex gap-4 text-sm xl:text-base">
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  React
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Redux
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Tailwind CSS
                </p>
              </div>
              <div className="flex gap-4 text-sm xl:text-base">
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Express
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Node
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  MongoDB
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 dark:text-gray-200">
            <p className={`text-3xl font-semibold ${bebas.className}`}>
              Sportfolio
            </p>
            <p>
              A tracking app that allows users to track their betting history,
              analyze and compare their results with other users.
            </p>
            <Link
              href="/projects"
              className="mt-auto font-semibold underline text-darkBlue dark:text-gray-100 opacity-90 hover:opacity-70"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="card-container bg-bgRetroDark dark:bg-bgDarkMode p-2 flex flex-col sm:flex-row xl:flex-col gap-6 xl:gap-4 shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-video overflow-hidden">
            <Image src="/genptchef.png" fill alt="Picture of Sportfolio app" />
            <div className="overlay "></div>
            <div className="text-container absolute w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="flex gap-4 text-sm xl:text-base">
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  NextJS
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  React
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Typescript
                </p>
              </div>
              <div className="flex gap-4 text-sm xl:text-base">
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  TailwindCSS
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Prisma
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Neon
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 dark:text-gray-200">
            <p className={`text-3xl font-semibold ${bebas.className}`}>
              Gen.PT Chef
            </p>
            <p>
              Recipe generator with a twist! Generate innovative recipes and
              share them with the community.
            </p>
            <Link
              href="/projects"
              className="mt-auto font-semibold underline text-darkBlue dark:text-gray-100 opacity-90 hover:opacity-70"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="card-container bg-bgRetroDark dark:bg-bgDarkMode p-2 flex flex-col sm:flex-row xl:flex-col gap-6 xl:gap-4 shadow-solidBlack hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition">
          <div className="relative w-full h-auto aspect-video overflow-hidden">
            <Image
              src="/translatable.jpg"
              fill
              alt="Picture of Sportfolio app"
            />
            <div className="overlay "></div>
            <div className="text-container absolute w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="flex gap-4 text-sm xl:text-base">
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  React
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Node
                </p>
                <p className="text-white border border-white px-2 py-1 hover:cursor-pointer hover:text-black hover:bg-white">
                  Express
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-2 p-2 dark:text-gray-200">
            <p className={`text-3xl font-semibold ${bebas.className}`}>
              Translatable
            </p>
            <p>
              A translation app that transcribes speech and translates to the
              desired language.
            </p>
            <Link
              href="/projects"
              className="mt-auto font-semibold underline text-darkBlue dark:text-gray-100 opacity-90 hover:opacity-70"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
