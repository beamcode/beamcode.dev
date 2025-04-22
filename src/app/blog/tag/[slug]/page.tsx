import PostItem from "@/components/blog/PostItem"
import { getPostsAvailableTags, getPosts } from "@/utils/getPosts"

export async function generateStaticParams() {
  const tags = await getPostsAvailableTags()
  return tags.map((tag) => ({ slug: tag }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedTag = decodeURIComponent(slug).toLowerCase()

  const posts = await getPosts()
  const filteredPosts = posts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase() === decodedTag)
  )
  // same as above but diffrent way lol
  // const filteredPosts = posts.filter((post) => post.tags.includes(decodedTag))

  const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div>
      <div className="mb-8">
        <h1 className="animate-in mb-2">
          {posts.length} {posts.length == 1 ? "post" : "posts"} tagged with
          <span className="font-bold">{` "${slug}"`}</span>
        </h1>
      </div>

      <div className="animate-in space-y-10" style={{ "--index": 2 } as React.CSSProperties}>
        {posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post, index) => (
            <PostItem key={post.slug} post={post} index={index + 2} />
          ))}
      </div>
    </div>
  )
}
