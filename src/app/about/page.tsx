import Image from "next/image"
import { Backnav } from "../components/Backnav"
import ContactSection from "../components/Contact"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function AboutPage() {
  return (
    <>
      <Backnav />
      <div className="flex flex-col my-8 md:my-20 justify-center items-center">
        <div className="grid gap-4 md:grid-cols-2 w-full md:w-5/6 2xl:w-1/2 p-4 xl:p-0 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">About me</h1>
            <p>
              I am a front-end developer passionate about building innovative
              websites with dynamic user interfaces.
            </p>
            I transitioned from a middle management role at a wholesaler to
            pursue my passion for software development as a self-taught
            developer.
            <p>
              Software development provides an outlet for my creative
              problem-solving and passion for building—elements that were
              missing in my previous roles. It also aligns with my personal
              value of lifelong learning and growth.
            </p>
            <p>
              Much like a dog, I enjoy going on long walks, eating food, and the
              occasional fetch quests.
            </p>
            <p>
              {" "}
              In my spare time, I train and analyze MMA, lift weights,
              experiment with new recipes, practice languages, and grow quirky
              vegetables.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-60 md:max-w-80 h-auto max-h-96 aspect-square md:aspect-[3/4] border border-neutral-900 shadow-darkBlue mt-10 md:mt-0">
              <Image
                src="/heroimg.jpg"
                fill
                alt="Picture of Raymond"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center p-4 lg:p-0">
        <div className="w-full md:w-5/6 2xl:w-1/2 flex flex-col gap-4">
          <h2 className={`text-2xl text-black font-semibold text-left`}>
            Contact
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              I am constantly looking learn and grow in the software development
              industry. Feel free to reach out if you want to build something
              together, have a question, or just want to connect!
            </p>
            <Link
              href="mailto:projectraymak@gmail.com"
              aria-label="email"
              target="_blank"
              className="underline underline-offset-4 decoration-2 text-lg text-retroBlue hover:text-darkBlue"
            >
              projectraymak@gmail.com
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://github.com/ray-mak"
                aria-label="github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="w-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/imraymak/"
                aria-label="linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
