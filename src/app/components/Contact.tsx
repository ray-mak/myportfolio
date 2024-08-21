import { Bebas_Neue } from "next/font/google"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center p-16">
      <h2
        className={`text-5xl text-black dark:text-gray-100 text-center mb-12 ${bebas.className}`}
      >
        Contact
      </h2>
      <div className="w-2/3 lg:w-1/2 flex flex-col gap-4 dark:text-gray-200">
        <p className="md:text-lg">
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
    </section>
  )
}
