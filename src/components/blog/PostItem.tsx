import Link from "next/link"
import { formatDate } from "@/utils/formatDate"
import { Post } from "@/types/mdxblog"
import Tags from "@/components/blog/Tags"
import Image from "next/image"

export default function PostItem({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group animate-in bg-primary-bg flex cursor-pointer flex-col space-y-2 rounded-md p-1 transition-all"
      style={{ "--index": index } as React.CSSProperties}
    >
      <div className="bg-tertiary-bg relative flex h-28 w-full shrink-0 grow overflow-hidden rounded-md">
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={0}
          height={0}
          className="absolute inset-0 size-full object-cover transition duration-300 group-hover:scale-105"
          sizes="100vw"
        />
      </div>
      <div className="flex h-full flex-col justify-between gap-2 p-2 pt-1.5">
        <div className="flex w-full flex-col justify-between gap-1">
          <h1 className="text-lg leading-none font-semibold">{post.title}</h1>
          <p className="text-tertiary text-[13px] whitespace-nowrap">{formatDate(post.date)}</p>
          <p className="text-[13px]">{post.description}</p>
        </div>

        <Tags tags={post.tags} className="text-[10px]" />
      </div>
    </Link>
  )
}
