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
  const commonTagClasses = "h-fit text-black bg-orange-200 px-2 rounded-full"

  return (
    <div className={twMerge("flex flex-wrap gap-1.5 text-xs")}>
      {tags.split(", ").map((tag) =>
        clickable ? (
          <Link
            href={`${path}/${tag.toLowerCase()}`}
            key={tag}
            className={twMerge(
              commonTagClasses,
              "transition-colors duration-300 ease-in-out hover:bg-orange-500",
              tagClassName
            )}
          >
            {tag}
            <span> ↗</span>
          </Link>
        ) : (
          <span key={tag} className={twMerge(commonTagClasses, tagClassName)}>
            {tag}
          </span>
        )
      )}
    </div>
  )
}
