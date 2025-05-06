import PostItem from "@/components/blog/PostItem"
import { getPostsAvailableTags, getPosts } from "@/utils/getPosts"
import Tags from "@/components/blog/Tags"

export async function generateStaticParams() {
  const tags = await getPostsAvailableTags()
  return tags.map((tag) => ({ slug: tag }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const decodedTag = decodeURIComponent(slug).toLowerCase()

  const posts = await getPosts()
  const filteredPosts = posts.filter(({ tags }) =>
    tags.map((tag) => tag.toLowerCase()).includes(decodedTag)
  )

  const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="animate-in">
          {posts.length} {posts.length == 1 ? "post" : "posts"} tagged with
          <span className="font-bold">{` "${slug}"`}</span>
        </h1>
        <Tags tags={uniqueTags} clickable className="gap-2" />
      </div>

      <div
        className="animate-in grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 sm:grid-cols-2"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {filteredPosts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post, index) => (
            <PostItem key={post.slug} post={post} index={index + 2} />
          ))}
      </div>
    </>
  )
}
