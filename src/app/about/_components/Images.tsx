"use client"

import Image from "next/image"
import { useState } from "react"

export function SportfolioImage2() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/sportfolio2.webp"
          fill
          alt="Picture of Sportfolio app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/sportfolio2.webp"
              fill
              alt="Picture of Sportfolio app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function SportfolioImage3() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/sportfolio3.webp"
          fill
          alt="Picture of Sportfolio app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/sportfolio3.webp"
              fill
              alt="Picture of Sportfolio app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function SportfolioImage4() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/sportfolio4.webp"
          fill
          alt="Picture of Sportfolio app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className={`relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
            onClick={closeZoom}
          >
            <Image
              src="/sportfolio4.webp"
              fill
              alt="Picture of Sportfolio app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function SportfolioImage5() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/sportfolio5.webp"
          fill
          alt="Picture of Sportfolio app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className={`relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
            onClick={closeZoom}
          >
            <Image
              src="/sportfolio5.webp"
              fill
              alt="Picture of Sportfolio app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function GenPT1() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/genpt1.webp"
          fill
          alt="Picture of GenPT Chef app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/genpt1.webp"
              fill
              alt="Picture of GenPT Chef app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function GenPT2() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/genpt2.webp"
          fill
          alt="Picture of GenPT Chef app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/genpt2.webp"
              fill
              alt="Picture of GenPT Chef app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function GenPT3() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/genpt3.webp"
          fill
          alt="Picture of GenPT Chef app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/genpt3.webp"
              fill
              alt="Picture of GenPT Chef app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function GenPT4() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/genpt4.webp"
          fill
          alt="Picture of GenPT Chef app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/genpt4.webp"
              fill
              alt="Picture of GenPT Chef app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function CodeCraft1() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/schedule1.png"
          fill
          alt="Picture of CodeCraft Booking app"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/schedule1.png"
              fill
              alt="Picture of CodeCraft Booking app"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function CodeCraft2() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/availability.png"
          fill
          alt="Picture of availability"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/availability.png"
              fill
              alt="Picture of availability"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function CodeCraft3() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/booking1.png"
          fill
          alt="Picture of booking flow"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/booking1.png"
              fill
              alt="Picture of booking flow"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export function CodeCraft4() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false)

  const zoomImage = () => {
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = ""
  }

  return (
    <div>
      <div
        className={`relative w-full h-auto aspect-video overflow-hidden rounded-md shadow-xl cursor-zoom-in`}
        onClick={zoomImage}
      >
        <Image
          src="/booking2.png"
          fill
          alt="Picture of booking flow"
          className="object-cover"
        />
      </div>
      {isZoomed && (
        <div className="fixed z-10 top-0 left-0 h-full w-screen bg-blackOpacity flex items-center justify-center cursor-zoom-out">
          <div
            className="relative w-[90%] sm:w-2/3 h-auto aspect-video overflow-hidden rounded-md shadow-xl"
            onClick={closeZoom}
          >
            <Image
              src="/booking2.png"
              fill
              alt="Picture of booking flow"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}
