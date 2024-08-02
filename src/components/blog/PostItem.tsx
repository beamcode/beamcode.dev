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
      className="flex flex-col p-2 rounded-md space-y-3 cursor-pointer transition-all bg-primary hover:bg-secondary animate-in group"
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="relative flex w-full h-32 shrink-0 overflow-hidden rounded-md">
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition duration-300 bg-secondary"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col justify-between h-full space-y-2 px-1 pb-1 gap-1">
        <div className="flex flex-col justify-between w-full gap-2">
          <p className="text-sm text-gray-500 tracking-tight">
            {formatDate(post.date)} ({timeSince(post.date)})
          </p>
          <h1 className="text-xl font-semibold leading-none">{post.title}</h1>
          <p className="text-sm">{post.description}</p>
        </div>

        <Tags tags={post.tags} className="text-xs" />
      </div>
    </Link>
  )
}
