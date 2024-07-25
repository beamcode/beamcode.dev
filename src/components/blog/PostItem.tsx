import Link from "next/link"
import { formatDate } from "@/helpers/formatDate"
import { timeSince } from "@/helpers/timeSince"
import { Post } from "@/helpers/getPosts"
import Tags from "./Tags"
import Image from "next/image"

export default function PostItem({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <div className="animate-in" style={{ "--index": index } as React.CSSProperties}>
      <Link href={`/blog/${post.slug}`} className="flex">
        <div className="flex w-full h-full p-3 rounded-lg gap-4 cursor-pointer transition-all bg-primary-bg ">
          <div className="space-y-4 w-full">
            <div className="flex flex-col gap-4">
              <div className="relative flex w-full h-52 shrink-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={0}
                  height={0}
                  className="rounded object-cover w-full h-full absolute"
                  sizes="100vw"
                />
              </div>
              <div className="space-y-2">
                <div className="flex flex-col justify-between w-full gap-2">
                  <span className="text-[14px] text-gray-500">
                    {formatDate(post.date)} ({timeSince(post.date)})
                  </span>
                  <h1 className="text-xl font-semibold leading-none">{post.title}</h1>
                </div>
                <p className="text-sm">{post.description}</p>
                <Tags tags={post.tags} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
