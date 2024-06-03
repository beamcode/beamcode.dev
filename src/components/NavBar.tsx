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
    <div className="relative">
      <div
        ref={markerRef}
        className={twMerge(
          "absolute rounded-full bottom-0 left-0 transition-all duration-[500ms] will-change-auto",
          tmp
        )}
      >
        <div className="w-full h-full rounded-full bg-primary-light dark:bg-primary-dark will-change-transform" />
      </div>

      <ul className="flex flex-wrap list-none gap-6 sm:justify-center">
        {links.map((link, id) => (
          <li
            key={id}
            className="flex z-10 m-0"
            ref={(el) => {
              itemRefs.current[id] = el
            }}
            onClick={() => handleIndicator(id, link.href)}
          >
            <Link
              href={link.href}
              className={twMerge(
                "rounded-full px-4 py-[6.5px] text-sm transition-colors cursor-pointer",
                currentPath === link.href
                  ? "text-primary-light dark:text-primary-dark"
                  : "text-secondary-light hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark"
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
