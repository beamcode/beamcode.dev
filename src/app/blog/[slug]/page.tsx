import { getPost, getPosts } from "@/utils/getPosts"
import { MDX as Post } from "@/components/mdx/Mdx"
import { notFound } from "next/navigation"
import PostHeader from "@/components/blog/PostHeader"
import MdxToc from "@/components/mdx/MdxToc"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return notFound()

  return (
    <div className="relative flex animate-in flex-col">
      <PostHeader post={post} />
      <Post>{post.body}</Post>

      <div className="absolute -right-[18rem] hidden h-full w-52 xl:block">
        <div className="sticky top-10">
          <MdxToc enableMaxWidth>{post.body}</MdxToc>
        </div>
      </div>
    </div>
  )
}
