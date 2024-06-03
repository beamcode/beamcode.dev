"use client"

import { useEffect, useRef } from "react"

export default function RainbowScrollBar() {
  const progressRef = useRef<HTMLDivElement | null>(null)
  const totalHeight = useRef<number>(0)

  useEffect(() => {
    const progressElement = progressRef.current
    totalHeight.current = document.body.scrollHeight - window.innerHeight

    const handleScroll = () => {
      if (progressElement) {
        const progressHeight = (window.scrollY / totalHeight.current) * 100
        progressElement.style.height = `${progressHeight}%`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={progressRef}
      className="z-50 fixed top-0 right-0 w-[10px] rounded-b-[5px] animate-rainbow bg-gradient-to-t from-[#008aff] to-[#00ffe7]"
    />
  )
}
