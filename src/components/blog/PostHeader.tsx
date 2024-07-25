import { Post } from "@/helpers/getPosts"
import { formatDate } from "@/helpers/formatDate"
import { timeSince } from "@/helpers/timeSince"
import Tags from "./Tags"
import Image from "next/image"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="pb-12">
      <Image
        src={post.image}
        alt="blog post image"
        width="0"
        height="0"
        sizes="100vw"
        className="object-cover w-full h-auto rounded-lg mb-8"
      />

      <div className="flex flex-col gap-3">
        <h1 className="font-semibold text-4xl">{post.title}</h1>

        <span className="text-gray-400 text-md">
          Published on {formatDate(post.date)} ({timeSince(post.date)})
        </span>

        <div className="flex flex-wrap gap-2 items-center text-md">
          <p className="text-gray-400">Tags: </p>
          <Tags tags={post.tags} clickable className="text-xs" />
        </div>
      </div>

      <div className="bg-gray-300 h-px mt-10 w-full rounded-full" />
    </div>
  )
}
