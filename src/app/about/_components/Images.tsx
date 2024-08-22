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
            className={`relative w-5/6 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
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
            className={`relative w-5/6 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
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
            className={`relative w-5/6 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
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
            className={`relative w-5/6 h-auto aspect-video overflow-hidden rounded-md shadow-xl`}
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
