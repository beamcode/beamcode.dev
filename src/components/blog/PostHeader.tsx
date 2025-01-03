import { Post } from "@/types/mdxblog"
import { formatDate } from "@/utils/formatDate"
import { timeSince } from "@/utils/timeSince"
import Tags from "../blog/Tags"
import Image from "next/image"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="flex flex-col-reverse justify-between gap-5 sm:flex-row">
      <div className="flex flex-col justify-between gap-2">
        <div>
          <h1 className="text-4xl font-semibold">{post.title}</h1>

          <span className="text-sm text-secondary">
            Published on {formatDate(post.date)} ({timeSince(post.date)})
          </span>

          <p className="mt-2 text-sm text-primary">{post.description}</p>
        </div>

        <div className="flex gap-2 text-sm">
          <Tags tags={post.tags} clickable className="text-xs" />
        </div>
      </div>

      <div className="relative min-h-40 w-full cursor-pointer overflow-hidden rounded-md bg-secondary sm:w-60">
        <Image
          src={post.thumbnail}
          alt="Project Image"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute inset-0 size-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      {/* 
      <Image
        src={post.image}
        alt="blog post image"
        width="0"
        height="0"
        sizes="100vw"
        className="h-[150px] w-36 rounded-md object-cover"
      /> */}
    </div>
  )
}
