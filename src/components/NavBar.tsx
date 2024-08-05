"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { usePathname } from "next/navigation"

interface LinkItem {
  label: string
  href: string
}

const links: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Amy", href: "/amy" },
]

export default function NavBar() {
  const markerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [tmp, setTmp] = useState("hidden")
  const [currentPath, setCurrentPath] = useState("")
  const path = "/" + usePathname().split("/")[1]

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

  useEffect(() => {
    const updateIndicator = () => {
      const currentLink = links.find((link) => link.href === path)
      const currentIndex = currentLink ? links.indexOf(currentLink) : -1

      if (currentIndex !== -1) {
        handleIndicator(currentIndex, currentLink!.href)
      }
    }
    updateIndicator()
    setTmp("visible")
    window.addEventListener("resize", updateIndicator)

    return () => {
      window.removeEventListener("resize", updateIndicator)
    }
  }, [path])

  return (
    <div className="relative text-sm">
      <div
        ref={markerRef}
        className={twMerge(
          "absolute rounded-full bg-primary transition-all duration-500 will-change-auto",
          tmp
        )}
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
