import { Post } from "@/types/mdxblog"
import { formatDate } from "@/utils/formatDate"
import { timeSince } from "@/utils/timeSince"
import Tags from "@/components/blog/Tags"
import Image from "next/image"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="mb-10 md:mb-20">
      <h1 className="mb-3 text-3xl font-semibold">{post.title}</h1>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-secondary text-sm">
          {formatDate(post.date)} ({timeSince(post.date)})
        </span>

        <Tags tags={post.tags} clickable className="text-xs" />
      </div>

      <Image
        src={post.thumbnail}
        alt="Project Image"
        width={1200}
        height={300}
        className="max-h-[20rem] w-full rounded-md object-cover"
      />
    </div>
  )
}
