import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col w-full text-center pb-5 h-[80px]">
      <span className="text-sm text-tertiary">Made with 🥭 by Samuel Palmer</span>
      <span className="text-sm text-tertiary">
        say hi to{" "}
        <Link className="underline" href={"/amy"}>
          amy
        </Link>
      </span>
    </footer>
  )
}
