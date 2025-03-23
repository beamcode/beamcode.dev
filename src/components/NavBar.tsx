"use client"

import Link from "next/link"
import { useRef, useEffect, useState, useLayoutEffect } from "react"
import { twMerge } from "tailwind-merge"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

interface LinkItem {
  label: string
  href: string
}

const links: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export default function NavBar() {
  const markerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  // const [tmp, setTmp] = useState<string>("hidden")
  const [currentPath, setCurrentPath] = useState<string>("")
  const path = "/" + usePathname().split("/")[1]
  const [rerender, setRerender] = useState<boolean>(false)
  const { theme } = useTheme()

  const triggerRerender = () => {
    setRerender((prev) => !prev) // Toggle state to trigger a re-render
  }

  const handleIndicator = (index: number, path: string) => {
    const target = itemRefs.current[index]

    if (target && markerRef.current) {
      markerRef.current.style.width = `${target.offsetWidth}px`
      markerRef.current.style.height = `${target.offsetHeight}px`
      markerRef.current.style.top = `${target.offsetTop}px`
      markerRef.current.style.left = `${target.offsetLeft}px`
    } else {
      console.error(`Target element at index ${index} is null.`)
    }

    setCurrentPath(path)
  }

  useLayoutEffect(() => {
    const updateIndicator = () => {
      console.log("updateIndicator called")
      const currentLink = links.find((link) => link.href === path)
      const currentIndex = currentLink ? links.indexOf(currentLink) : -1

      if (currentIndex !== -1) {
        handleIndicator(currentIndex, currentLink!.href)
      }
    }

    setTimeout(() => {
      updateIndicator()
    }, 1)
    window.addEventListener("resize", updateIndicator)

    return () => {
      window.removeEventListener("resize", updateIndicator)
    }
  }, [path, theme])

  return (
    <div className="relative text-sm">
      <div
        ref={markerRef}
        id="indicator"
        className="bg-primary absolute rounded-full transition-all duration-500 will-change-auto"
      />

      <ul className="flex list-none flex-wrap gap-1.5 sm:justify-center">
        {links.map((link, id) => (
          <li
            key={id}
            className="z-10 flex"
            ref={(el) => {
              itemRefs.current[id] = el
            }}
            onClick={() => handleIndicator(id, link.href)}
          >
            <Link
              href={link.href}
              className={twMerge(
                "cursor-pointer rounded-full px-4 py-[6.5px] transition-colors",
                currentPath === link.href ? "text-primary" : "text-secondary hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
