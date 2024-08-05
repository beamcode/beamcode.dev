"use client"

import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const themes = [
  { name: "System", themeString: "system" },
  { name: "Light", themeString: "light" },
  { name: "Dark", themeString: "dark" },
  { name: "CyberPunk (wip)", themeString: "cyberpunk" },
]

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  function changeTheme(newTheme: string) {
    if (!mounted) return
    setTheme(newTheme)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-full text-sm font-semibold text-secondary"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full duration-[250ms] ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="block h-5 w-5 dark:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="hidden h-5 w-5 dark:block"
            >
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </div>
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-auto min-w-28 origin-top-right transform rounded-md border border-primary bg-default p-1 transition ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"} `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {themes.map((theme) => (
          <button
            key={theme.themeString}
            type="button"
            className="block w-full rounded-lg px-4 py-2 text-left text-sm hover:bg-secondary"
            role="menuitem"
            tabIndex={-1}
            onClick={() => {
              changeTheme(theme.themeString)
              toggleMenu()
            }}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  )
}
