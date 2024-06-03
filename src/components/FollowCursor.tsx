"use client"

import { useState, useEffect } from "react"

export default function FollowCursor() {
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })
  const [svgPosition, setSvgPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const updateSvgPosition = () => {
      const delayFactor = 0.05 // Adjust the delay factor here (lower value for slower movement)
      const newX =
        svgPosition.x + (cursorPosition.x - svgPosition.x) * delayFactor
      const newY =
        svgPosition.y + (cursorPosition.y - svgPosition.y) * delayFactor
      setSvgPosition({ x: newX + 0.0, y: newY + 1.4 })
    }

    const animationId = requestAnimationFrame(updateSvgPosition)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [svgPosition, cursorPosition.x, cursorPosition.y])

  return (
    <div
      style={{
        zIndex: 50,
        position: "fixed",
        left: svgPosition.x,
        top: svgPosition.y,
        filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3))",
      }}
      className="text-[40px]"
    >
      🥭
    </div>
  )
}
