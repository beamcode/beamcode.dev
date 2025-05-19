"use client"

import React, { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const themesList = [
  { name: "Auto", themeId: "system" },
  { name: "Light", themeId: "light" },
  { name: "Dark", themeId: "dark" },
  { name: "Terminal", themeId: "terminal" },
]

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function changeTheme(newTheme: string) {
    if (!mounted) return
    setTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className={`inline-flex w-full cursor-pointer justify-center rounded-full p-1 text-sm font-semibold ${isOpen ? "bg-primary-bg text-primary" : "text-secondary hover:text-primary"}`}
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

      <ul
        className={`border-0.5 border-primary-border bg-primary-bg absolute right-0 z-10 mt-2 w-auto min-w-28 origin-top-right transform rounded-md border-[0.1px] p-2 shadow-xl transition ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"} `}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {themesList.map((themeItem) => (
          <li key={themeItem.themeId}>
            <button
              type="button"
              className="hover:bg-secondary flex w-full cursor-pointer items-center gap-2 rounded-md p-2 text-left text-sm"
              role="menuitem"
              tabIndex={-1}
              onClick={() => {
                changeTheme(themeItem.themeId)
                toggleMenu()
              }}
            >
              <span className="h-5 w-5">
                {theme === themeItem.themeId && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </span>
              {themeItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
