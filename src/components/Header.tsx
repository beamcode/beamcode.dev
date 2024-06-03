"use client"
import NavBar from "./NavBar"
import ThemeToggleGray from "./ThemeToggleGray"
import NavBarFramerMotion from "./NavBarFramerMotion"
import Image from "next/image"
// import ThemeToggle from "./ThemeToggle";
// import ThemeButtonEmoji from "./ThemeButtonEmoji";
// import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-[#121212]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[700px] items-center justify-between px-4 py-4 md:px-6 md:py-2">
        <a
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
        </a>
        <nav className="flex items-center">
          <NavBar />
          {/* <NavBarFramerMotion /> */}
        </nav>
        <ThemeToggleGray />
      </div>
    </header>
  )
}
