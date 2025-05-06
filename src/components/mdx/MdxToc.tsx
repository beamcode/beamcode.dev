import { compileMDX } from "next-mdx-remote/rsc"
import { useMDXComponents } from "@/components/mdx/MdxComponents"
import { Suspense } from "react"
import { cn } from "@/utils/utils"
import rehypeSlug from "rehype-slug"
import MdxTocLogic from "@/components/mdx/MdxTocLogic"

export default function MdxToc({
  children,
  enableMaxWidth = false,
}: {
  children: string
  enableMaxWidth?: boolean
}) {
  const Markdown = useMDXComponents({})

  const articleClassNames = cn(
    "prose dark:prose-invert",
    enableMaxWidth ? "lg:max-w-prose" : "max-w-none"
  )

  return (
    <article className={articleClassNames}>
      <Suspense fallback={<div>Loading...</div>}>
        <MDXTocContent components={Markdown}>{children}</MDXTocContent>
      </Suspense>
    </article>
  )
}

async function MDXTocContent({ children, components }: { children: string; components: any }) {
  const options: any = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  }
  const result = await compileMDX({ source: children, options, components })

  return result ? <MdxTocLogic content={result.content as any} /> : null
}
