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
  const path = usePathname().split("/")[1]

  return (
    <ul className="flex flex-wrap gap-6 list-none sm:justify-center]">
      {links.map((link) => (
        <li key={link.href} className="flex">
          <Link
            className={twMerge(
              "relative rounded-full px-4 py-[6.5px] text-sm transition-colors cursor-pointer",
              path === link.href
                ? "text-primary-light dark:text-primary-dark"
                : "text-secondary-light hover:text-primary-light dark:text-secondary-dark dark:hover:text-primary-dark"
            )}
            href={link.href}
          >
            {link.label}
            {link.href === path && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 top-0 bottom-0 right-0 -z-20 bg-[gray]/15 rounded-full"
                transition={{ duration: 0.48 }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
