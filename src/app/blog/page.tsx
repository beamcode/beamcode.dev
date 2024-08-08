import { getPosts } from "@/helpers/getPosts"
import PostItem from "@/components/blog/PostItem"

export default async function Page() {
  const posts = await getPosts()

  return (
    <div>
      <div className="mb-8 flex animate-in items-center gap-2">
        <h1 className="text-2xl font-medium">read my blog</h1>
        <p className="text-secondary">({posts.length} posts)</p>
      </div>

      <div
        className="grid animate-in grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:grid-cols-2"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post, index) => (
            <PostItem key={post.slug} post={post} index={index + 1} />
          ))}
      </div>
    </div>
  )
}
