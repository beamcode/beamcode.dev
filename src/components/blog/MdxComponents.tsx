import { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"
import Information from "./MdxComponents/Information"
import CodeBlock from "./MdxComponents/CodeBlock"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => {
      return (
        <a {...props} className="underline duration-100 hover:text-blue-600" target="_blank">
          {children}
        </a>
      )
    },
    img: ({ ...props }) => (
      <img className="overflow-hidden rounded-md bg-gray-300 dark:bg-gray-500" {...props} />
    ),
    pre: ({ children, ...props }) => (
      <CodeBlock props={undefined} {...props}>
        {children}
      </CodeBlock>
    ),
    Info: ({ children, ...props }) => <Information {...props}>{children}</Information>,
    Link: Link,
    Image: ({ ...props }) => (
      <Image className="overflow-hidden rounded bg-gray-300 dark:bg-gray-500" {...props} />
    ),
    ...components,
  }
}
