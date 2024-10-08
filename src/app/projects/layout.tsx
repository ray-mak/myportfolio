import { Metadata } from "next"
import { Backnav } from "../components/Backnav"

export const metadata: Metadata = {
  title: "Raymond Mak - Full Stack and Front End Projects",
  description:
    "Check out these projects by Raymond Mak, developed with React, Next.js, and Tailwind CSS.",
}

export default function WorkLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Backnav />
      <main>
        <div className="flex flex-col my-8 md:my-20 justify-center items-center text-gray-900 dark:text-gray-200">
          <div className="md:grid-cols-2 w-full md:w-3/5 2xl:w-1/2 p-4 md:p-0 ">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
