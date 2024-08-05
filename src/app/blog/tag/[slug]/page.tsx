import PostItem from "@/components/blog/PostItem"
import { getPostsByTag, getPostsAvailableTags } from "@/helpers/getPosts"

export async function generateStaticParams() {
  const tags = await getPostsAvailableTags()
  return tags.map((tag) => ({ slug: tag }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getPostsByTag(params.slug)

  return (
    <div>
      <div className="mb-8">
        <h1 className="mb-2 animate-in">
          {posts.length} {posts.length == 1 ? "post" : "posts"} tagged with
          <span className="font-bold">{` "${params.slug}"`}</span>
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
