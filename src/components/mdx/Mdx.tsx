import { MDXRemote } from "next-mdx-remote/rsc"
import { useMDXComponents } from "./MdxComponents"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeUnwrapImages from "rehype-unwrap-images"

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
    <article className="prose text-primary-text dark:prose-invert prose-headings:text-primary-text prose-p:text-secondary max-w-none">
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options], rehypeSlug, rehypeUnwrapImages],
            remarkPlugins: [remarkGfm],
          },
          // scope: customData
        }}
        components={Markdown}
      />
    </article>
  )
}
