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
      className="group flex animate-in cursor-pointer flex-col rounded-md bg-primary p-1 transition-all"
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="relative flex h-32 w-full shrink-0 overflow-hidden rounded-md">
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          className="absolute inset-0 size-full bg-secondary object-cover transition duration-300 group-hover:scale-105"
          sizes="100vw"
        />
      </div>
      <div className="h-full justify-between space-y-2 p-2">
        <div className="flex w-full flex-col justify-between gap-1">
          <p className="font-mono text-sm tracking-tighter text-gray-500">
            {formatDate(post.date)} ({timeSince(post.date)})
          </p>
          <h1 className="text-lg font-semibold leading-none">{post.title}</h1>
          <p className="text-sm">{post.description}</p>
        </div>

        <Tags tags={post.tags} className="text-xs" />
      </div>
    </Link>
  )
}
