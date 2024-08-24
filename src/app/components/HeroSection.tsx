import Image from "next/image"
import Link from "next/link"
import { Bungee } from "next/font/google"
const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
})

export default function HeroSection() {
  return (
    <section className="md:w-5/6 lg:w-2/3 mb-8 md:mb-32 flex flex-col md:grid md:grid-cols-3 gap-8 p-6 md:p-0">
      <div className="flex flex-col gap-2 md:text-lg col-span-2 text-neutral-600 dark:text-neutral-300">
        <p>
          Hi, <br></br>
          My name is{" "}
          <span className={`font-bold text-neutral-800 dark:text-neutral-200`}>
            Raymond Mak
          </span>{" "}
          and I{"'"}m a
        </p>
        <p
          className={`text-4xl md:text-6xl text-darkBlue dark:text-retroBlueDarkMode py-2 leading-[1.15] text-center md:text-left ${bungee.className}`}
        >
          Front-End Developer
        </p>
        <p>
          I enjoy problem-solving and finding unique solutions that enhance user
          interaction.
        </p>
        <p>
          With a passion for crafting dynamic and accessible web experiences, I
          specialize in front-end development using{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            JavaScript
          </span>{" "}
          frameworks like
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {" "}
            React
          </span>{" "}
          as well as{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            TypeScript
          </span>
          .{" "}
        </p>
        <p>
          I also have experience building full-stack applications using{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            Next.js
          </span>
          ,{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            TailwindCSS
          </span>
          ,{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            Prisma{" "}
          </span>
          and everyone{"'"}s favorite tutorial stack - the{" "}
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            MERN
          </span>{" "}
          stack.
        </p>
        <div className="flex flex-col items-center justify-center md:justify-start xs:flex-row mt-6 mb-4 md:mb-0 md:mt-12 gap-4 xl:gap-10">
          <Link
            href="/#work"
            className={`w-fit px-6 py-2 bg-retroBlue text-black border-2 border-black text-sm lg:text-lg hover:translate-y-1 hover:translate-x-1 hover:shadow-smBlack transition shadow-solidBlack ${bungee.className}`}
          >
            View my Projects
          </Link>
          <Link
            href="/about"
            className={`w-fit px-6 py-2 text-sm lg:text-lg text-retroBlue underline underline-offset-8 decoration-2 hover:text-darkBlue ${bungee.className}`}
          >
            More about me
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-60 md:max-w-80 h-auto max-h-96 aspect-square md:aspect-[3/4] border border-neutral-900 shadow-darkBlue dark:shadow-blueDarkMode">
          <Image
            src="/heroimg.jpg"
            fill
            alt="Picture of Raymond"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
