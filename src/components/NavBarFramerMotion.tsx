"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

interface LinkItem {
  label: string
  href: string
}

const links: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export default function NavBarFramerMotion() {
  const path = "/" + usePathname().split("/")[1]

  return (
    <ul className="flex list-none flex-wrap gap-2 sm:justify-center">
      {links.map((link) => (
        <li key={link.href} className="flex">
          <Link
            className={twMerge(
              "relative cursor-pointer rounded-full px-4 py-[6.5px] text-sm transition-colors",
              path === link.href ? "text-primary" : "text-secondary hover:text-primary"
            )}
            href={link.href}
          >
            {link.label}
            {link.href === path && (
              <motion.div
                layoutId="underline"
                className="bg-primary absolute inset-0 -z-20 rounded-full"
                transition={{ duration: 0.48 }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
