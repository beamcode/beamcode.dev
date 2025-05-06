import { Post } from "@/types/mdxblog"
import { formatDate } from "@/utils/formatDate"
import { timeSince } from "@/utils/timeSince"
import Tags from "@/components/blog/Tags"
import Image from "next/image"

export default function PostHeader({ post }: { post: Post }) {
  return (
    <div className="mb-10 flex flex-col-reverse justify-between gap-6 sm:flex-row md:mb-20">
      <div className="flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <span className="text-secondary text-sm">
            {formatDate(post.date)} ({timeSince(post.date)})
          </span>
        </div>

        <p className="text-primary text-sm">{post.description}</p>

        <div className="flex gap-2 text-sm">
          <Tags tags={post.tags} clickable className="text-xs" />
        </div>
      </div>

      <div className="bg-secondary relative min-h-40 w-full cursor-pointer overflow-hidden rounded-md sm:w-[40%]">
        <Image
          src={post.thumbnail}
          alt="Project Image"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute inset-0 size-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}
