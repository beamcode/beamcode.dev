import { getPosts } from "@/helpers/getPosts"
import PostItem from "@/components/blog/PostItem"

export default async function Page() {
  const posts = await getPosts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 animate-in">Blog - {posts.length} posts</h1>
        <p className="text-gray-500 animate-in" style={{ "--index": 2 } as React.CSSProperties}>
          My blog posts in no particular order.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        {posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post, index) => (
            <PostItem key={post.slug} post={post} index={index + 3} />
          ))}
      </div>
    </div>
  )
}
