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
      className="group flex animate-in cursor-pointer flex-col space-y-2 rounded-md bg-primary p-1 transition-all"
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="relative flex h-28 w-full shrink-0 overflow-hidden rounded-md">
        <Image
          src={post.image}
          alt={post.title}
          width={0}
          height={0}
          className="absolute inset-0 size-full bg-secondary object-cover transition duration-300 group-hover:scale-105"
          sizes="100vw"
        />
      </div>
      <div className="h-full justify-between space-y-2 p-2 pt-0.5">
        <div className="flex w-full flex-col justify-between gap-1">
          <h1 className="text-lg font-semibold leading-none">{post.title}</h1>
          <p className="whitespace-nowrap text-[13px] text-tertiary">{formatDate(post.date)}</p>
          <p className="text-[13px]">{post.description}</p>
        </div>
        <Tags tags={post.tags} className="text-[10px]" />
      </div>
    </Link>
  )
}
