import { getPost, getPosts } from "@/helpers/getPosts"
import { MDX as Post } from "@/components/blog/Mdx"
import { notFound } from "next/navigation"
import PostHeader from "@/components/blog/PostHeader"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <div className="animate-in">
      <PostHeader post={post} />
      <div className="-mx-1 mb-10 mt-4 w-full border-spacing-[500px] border-t-4 border-dotted" />
      <Post>{post.body}</Post>
    </div>
  )
}
