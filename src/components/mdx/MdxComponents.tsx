import React from "react"
import { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"
import Information from "@/components/mdx/MdxComponents/Information"
import CodeBlock from "@/components/mdx/MdxComponents/CodeBlock"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => (
      <a
        {...props}
        className="text-blue-400 no-underline duration-100 hover:underline"
        target="_blank"
      >
        {children}
      </a>
    ),
    p: ({ children, ...props }) => (
      <p
        {...props}
        className="[&_strong]:bg-primary-bg [&_strong]:text-primary-accent rounded-md [&_strong]:rounded-[0.25rem] [&_strong]:px-1 [&_strong]:py-0.5"
      >
        {children}
      </p>
    ),
    img: ({ alt = "", title, src = "", width, height, ...props }) => {
      const imgElement = (
        <div className="bg-primary-bg relative flex w-full justify-center overflow-hidden rounded-md">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 z-10 backdrop-blur-xl" />
          <Image
            src={src}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAI8QfWZVQAAAABJRU5ErkJggg=="
            width={width ? Number(width) : 0}
            height={height ? Number(height) : 0}
            sizes="100vw"
            className="z-20 !m-0 h-auto max-h-[30rem] min-h-[30rem] w-auto object-contain"
            {...props}
          />
        </div>
      )

      return title ? (
        <figure>
          {imgElement}
          <figcaption className="mt-2 text-sm text-gray-500">{title}</figcaption>
        </figure>
      ) : (
        imgElement
      )
    },
    pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
    Info: ({ children, ...props }) => <Information {...props}>{children}</Information>,
    Link: Link,
    ...components,
  }
}
