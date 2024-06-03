import Link from "next/link"
import { formatDate } from "@/helpers/formatDate"
import { Post } from "@/helpers/getPosts"
import Tags from "./Tags"
import Image from "next/image"

export default function PostItem({
  post,
  index = 0,
}: {
  post: Post
  index?: number
}) {
  return (
    <div
      className="animate-in"
      style={{ "--index": index } as React.CSSProperties}
    >
      <Link href={`/blog/${post.slug}`} className="flex">
        <div className="flex w-full h-full p-3 rounded-lg gap-4 cursor-pointer transition-all bg-primary-light dark:bg-primary-dark">
          <div className="space-y-4 w-full">
            <div className="flex gap-4">
              <div className="relative flex size-24 shrink-0 overflow-hidden">
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
                <div className="flex flex-col justify-between w-full">
                  <h1 className="text-xl font-semibold leading-none">
                    {post.title}
                  </h1>
                  <p className="text-[14px] text-gray-500">
                    {formatDate(post.date)}
                  </p>
                </div>
                <p className="text-sm">{post.description}</p>
                <Tags tags={post.tags} clickable={false} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
