import { MDXRemote } from "next-mdx-remote/rsc"
import { useMDXComponents } from "./MdxComponents"
import rehypePrettyCode from "rehype-pretty-code"

const classes = {
  title: `bg-zinc-700 text-neutral-300 text-md pl-4 py-2 rounded-t-md`,
  line: `px-4`,
  lineHighlighted: `bg-teal-100/10 relative border-l-[5px] pl-[11px] border-orange-500`,
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
    <article className="prose dark:prose-invert text-primary prose-headings:text-primary">
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode as any, options]],
            remarkPlugins: [],
          },
          // scope: customData
        }}
        components={Markdown}
      />
    </article>
  )
}
