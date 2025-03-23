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
      className="fixed right-0 top-0 z-50 w-[10px] animate-rainbow rounded-b-[5px] bg-linear-to-t from-[#008aff] to-[#00ffe7]"
    />
  )
}
