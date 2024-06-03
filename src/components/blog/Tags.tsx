import Link from "next/link"

export default function Tags({
  tags,
  clickable = false,
}: {
  tags: string
  clickable?: boolean
}) {
  const path = "/blog/tag"

  return (
    <div className="flex flex-wrap gap-2 items-center text-sm">
      {tags.split(", ").map((tag) =>
        clickable ? (
          <Link
            href={`${path}/${tag.toLowerCase()}`}
            key={tag}
            className="h-fit text-black bg-orange-200 px-2 rounded-md text-xs hover:bg-orange-500 transition-colors duration-300 ease-in-out"
          >
            {tag}
            <span className="text-[10px]"> ↗</span>
          </Link>
        ) : (
          <span
            key={tag}
            className="h-fit text-black bg-orange-200 px-2 rounded-md text-xs"
          >
            {tag}
          </span>
        )
      )}
    </div>
  )
}
