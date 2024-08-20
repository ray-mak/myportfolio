import Link from "next/link"
import { Bebas_Neue } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export function Backnav() {
  return (
    <nav className="flex w-full h-16 p-4 md:p-0 flex items-center justify-center bg-bgRetroDark shadow-xl">
      <div className="w-full md:w-5/6 2xl:w-1/2 flex">
        <Link href="/" className={`text-4xl font-bold ${bebas.className}`}>
          R.Mak
        </Link>
        <Link href="/" className="flex items-center ml-auto gap-2">
          <div className="w-3">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <p className="text-lg">Back</p>
        </Link>
      </div>
    </nav>
  )
}
