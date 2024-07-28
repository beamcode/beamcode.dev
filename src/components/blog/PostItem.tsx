import Link from "next/link"
import { formatDate } from "@/helpers/formatDate"
import { timeSince } from "@/helpers/timeSince"
import { Post } from "@/helpers/getPosts"
import Tags from "./Tags"
import Image from "next/image"

export default function PostItem({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col p-3 rounded-md space-y-4 cursor-pointer transition-all bg-primary animate-in"
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="relative flex w-full h-52 shrink-0 overflow-hidden rounded-md">
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          className="absolute object-cover w-full h-full hover:scale-105 transition duration-300 bg-secondary"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col justify-between h-full space-y-2">
        <div className="flex flex-col justify-between w-full gap-2">
          <span className="text-[14px] text-gray-500">
            {formatDate(post.date)} ({timeSince(post.date)})
          </span>
          <h1 className="text-xl font-semibold leading-none">{post.title}</h1>
          <p className="text-sm">{post.description}</p>
        </div>

        <Tags tags={post.tags} className="text-xs" />
      </div>
    </Link>
  )
}
