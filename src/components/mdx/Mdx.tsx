import { MDXRemote } from "next-mdx-remote/rsc"
import { useMDXComponents } from "./MdxComponents"
import rehypePrettyCode from "rehype-pretty-code"
import remarkUnwrapImages from "remark-unwrap-images"
import remarkGfm from "remark-gfm"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"

const classes = {
  title: `bg-zinc-700 text-gray-300 text-sm pl-3 py-2 rounded-t-md`,
  line: `px-4`,
  lineHighlighted: `bg-teal-100/10 relative border-l-[0.3rem] pl-3 border-orange-500`,
  lineHighlightedChar: `box-border`,
}

const options = {
  theme: "one-dark-pro",
  onVisitTitle: (node: any) => {
    if (!node.properties.className) {
      node.properties.className = []
    }
    node.properties.className.push(classes.title)
  },
  onVisitHighlightedLine: (node: any) => {
    node.properties.className?.push(classes.lineHighlighted)
  },
  onVisitLine: (node: any) => {
    node.properties.className = [classes.line]

    // if (node.children.length === 0) {
    //   node.children = [{ type: "text", value: " " }]
    // }
  },
  onVisitHighlightedChars: (node: any) => {
    if (!node.properties.className) {
      node.properties.className = []
    }
    node.properties.className?.push(classes.lineHighlightedChar)
  },
}

export function MDX({ children }: { children: string }) {
  const Markdown = useMDXComponents({})

  return (
    <article className="prose max-w-full max-w-none text-primary dark:prose-invert prose-headings:text-primary prose-p:text-secondary">
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
            remarkPlugins: [remarkUnwrapImages, remarkGfm],
          },
          // scope: customData
        }}
        components={Markdown}
      />
    </article>
  )
}
