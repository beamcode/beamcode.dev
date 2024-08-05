"use client"

import NavBar from "./NavBar"
import Link from "next/link"
import Image from "next/image"
import ThemeSelector from "@/components/ThemeSelector"
import NavBarFramerMotion from "./NavBarFramerMotion"
// import ThemeToggle from "./ThemeToggle";
// import ThemeButtonEmoji from "./ThemeButtonEmoji";
// import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="z-10 sm:mt-16">
      <div className="mx-auto flex max-w-[700px] items-center justify-between rounded-lg px-4 py-4 md:px-6 md:py-2">
        {/* <Link
          href="/"
          className="hidden h-8 w-8 shrink-0 overflow-hidden rounded-full transition hover:scale-110 sm:block"
        >
          <Image
            src="/pfp_small.jpg"
            alt="Samuel Palmer avatar"
            width={0}
            height={0}
            sizes="100vw"
            className="size-full hover:animate-spin"
          />
        </Link> */}
        <nav className="flex flex-col items-center">
          <NavBar />
          {/* <NavBarFramerMotion /> */}
        </nav>
        <ThemeSelector />
      </div>
    </header>
  )
}
