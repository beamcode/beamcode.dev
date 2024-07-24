"use client"

import NavBar from "./NavBar"
import ThemeToggleGray from "./ThemeToggleGray"
import Link from "next/link"
import Image from "next/image"
import NavBarFramerMotion from "./NavBarFramerMotion"
import TestButton from "@/components/ThemeSelector"
// import ThemeToggle from "./ThemeToggle";
// import ThemeButtonEmoji from "./ThemeButtonEmoji";
// import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="sticky z-10">
      <div className="mx-auto flex max-w-[700px] items-center justify-between px-4 py-4 md:px-6 md:py-2 rounded-lg">
        <Link
          href="/"
          className="hidden shrink-0 sm:block h-8 w-8 rounded-full overflow-hidden transition hover:scale-110"
        >
          <Image
            src="/pfp_small.jpg"
            alt="Samuel Palmer avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="hover:animate-spin w-full h-full"
          />
        </Link>
        <nav className="flex items-center">
          <NavBar />
          {/* <NavBarFramerMotion /> */}
        </nav>
        {/* <ThemeToggleGray /> */}
        <TestButton />
      </div>
    </header>
  )
}
