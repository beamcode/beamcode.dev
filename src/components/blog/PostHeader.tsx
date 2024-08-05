import { Post } from "@/helpers/getPosts"
import { formatDate } from "@/helpers/formatDate"
import { timeSince } from "@/helpers/timeSince"
import Tags from "./Tags"
import Image from "next/image"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="">
      <Image
        src={post.image}
        alt="blog post image"
        width="0"
        height="0"
        sizes="100vw"
        className="h-[350px] w-full rounded-md object-cover"
      />

      <div className="mt-6 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">{post.title}</h1>

        <span className="text-sm text-gray-400">
          Published on {formatDate(post.date)} ({timeSince(post.date)})
        </span>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          <p className="text-gray-400">Tags: </p>
          <Tags tags={post.tags} clickable className="text-xs" />
        </div>
      </div>
    </div>
  )
}
