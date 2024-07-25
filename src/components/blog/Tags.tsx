import Link from "next/link"
import { twMerge } from "tailwind-merge"

export default function Tags({
  tags,
  clickable = false,
  className = "",
  tagClassName = "",
}: {
  tags: string
  clickable?: boolean
  className?: string
  tagClassName?: string
}) {
  const path = "/blog/tag"

  return (
    <div className={twMerge("flex flex-wrap gap-1.5 text-xs", className)}>
      {tags.split(", ").map((tag) =>
        clickable ? (
          <Link
            href={`${path}/${tag.toLowerCase()}`}
            key={tag}
            className={twMerge(
              "h-fit text-black bg-orange-200 px-2 py-[1.5px] rounded-full hover:bg-orange-500 transition-colors duration-300 ease-in-out",
              tagClassName
            )}
          >
            {tag}
            <span> ↗</span>
          </Link>
        ) : (
          <span
            key={tag}
            className={twMerge(
              "h-fit text-black bg-orange-200 px-2 py-[1.5px] rounded-full",
              tagClassName
            )}
          >
            {tag}
          </span>
        )
      )}
    </div>
  )
}
