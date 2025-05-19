import { cn } from "@/utils/utils"
import Link from "next/link"

export default function Tags({
  tags,
  clickable = false,
  className = "",
  tagClassName = "",
}: {
  tags: string[]
  clickable?: boolean
  className?: string
  tagClassName?: string
}) {
  const path = "/blog/tag"
  const commonClasses = "h-fit text-black bg-primary-accent px-2 rounded-md text-xs transition-none"

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) =>
        clickable ? (
          <Link
            href={`${path}/${tag.toLowerCase()}`}
            key={tag}
            className={cn(
              commonClasses,
              "hover:bg-secondary-accent flex flex-nowrap items-center gap-1 font-medium transition-transform duration-300 hover:scale-105",
              tagClassName
            )}
          >
            {tag}
            <svg
              width={10}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
          </Link>
        ) : (
          <span key={tag} className={cn(commonClasses, tagClassName)}>
            {tag}
          </span>
        )
      )}
    </div>
  )
}
