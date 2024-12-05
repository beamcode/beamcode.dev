import { FaHashtag } from "react-icons/fa"
import { ReactNode } from "react"

type HeadingProps = {
  id?: string
  children?: ReactNode
}

export default function heading(As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const Heading = ({ id, children }: HeadingProps) => (
    <a href={`#${id}`} className="group relative no-underline">
      <FaHashtag
        className="absolute -left-8 mt-1 p-1 text-secondary opacity-0 transition-opacity group-hover:opacity-100"
        size={24}
      />
      <As id={id}>{children}</As>
    </a>
  )
  Heading.displayName = As
  return Heading
}
