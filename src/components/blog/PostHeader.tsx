import { Post } from "@/helpers/getPosts"
import { formatDate } from "@/helpers/formatDate"
import { timeSince } from "@/helpers/timeSince"
import Tags from "./Tags"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="pb-12">
      <h1 className="font-semibold text-xl">{post.title}</h1>

      <span className="text-gray-400 text-sm mt-1">
        Published on {formatDate(post.date)} ({timeSince(post.date)})
      </span>

      <div className="flex flex-wrap gap-2 items-center mt-2 text-sm">
        <p className="text-gray-400">Tags: </p>

        <Tags tags={post.tags} clickable />
      </div>
    </div>
  )
}
