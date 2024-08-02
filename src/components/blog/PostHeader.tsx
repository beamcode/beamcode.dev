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
        className="object-cover w-full h-[350px] rounded-md"
      />

      <div className="flex flex-col gap-2 mt-6">
        <h1 className="font-semibold text-3xl">{post.title}</h1>

        <span className="text-gray-400 text-sm">
          Published on {formatDate(post.date)} ({timeSince(post.date)})
        </span>

        <div className="flex flex-wrap gap-2 items-center text-sm">
          <p className="text-gray-400">Tags: </p>
          <Tags tags={post.tags} clickable className="text-xs" />
        </div>
      </div>
    </div>
  )
}
