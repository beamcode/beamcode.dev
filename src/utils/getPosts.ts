import fs from "fs/promises"
import matter from "gray-matter"
import path from "path"
import { Post } from "../types/mdxblog"

export async function getPosts(): Promise<Post[]> {
  const postsFolder = "./content/posts/"
  const files = await fs.readdir(postsFolder)

  return Promise.all(
    files
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = path.join(postsFolder, file)
        const fileContent = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(fileContent)
        const slug = file.replace(/\.mdx$/, "")

        return { slug, ...data, body: content } as Post
      })
  )
}

export async function getPostsAvailableTags(): Promise<string[]> {
  const posts = await getPosts()

  // Extract tags from each post, split by comma, trim whitespace, and convert to lowercase
  const tags = posts
    .flatMap((post) => post.tags.map((tag) => tag.trim().toLowerCase()))
    // Remove duplicates
    .filter((tag, index, array) => array.indexOf(tag) === index)

  return tags
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

// export async function getPostsByTag(tag: string): Promise<Post[]> {
//   const posts = await getPosts()
//   return posts.filter((post) => {
//     // Split the tags string into an array of individual tags
//     const tagsArray = post.tags.map((tag) => tag.trim().toLowerCase())
//     // Check if the specified tag is included in the tags array
//     return tagsArray.includes(tag.toLowerCase())
//   })
// }
