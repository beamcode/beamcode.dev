import { MDXComponents } from "mdx/types"
import Link from "next/link"
import Image from "next/image"
import Information from "./MdxComponents/Information"
import CodeBlock from "./MdxComponents/CodeBlock"
import React from "react"
import heading from "./MdxComponents/Anchors"

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
        className="rounded-md [&_strong]:rounded-[0.25rem] [&_strong]:bg-primary [&_strong]:px-1 [&_strong]:py-0.5 [&_strong]:text-accent-primary"
      >
        {children}
      </p>
    ),
    h1: heading("h1"),
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    h5: heading("h5"),
    h6: heading("h6"),
    img: ({ alt, title, src, width, height, ...props }) => (
      <>
        {title ? (
          <figure className="my-10">
            <div className="relative flex max-h-[80vh] min-h-[4rem] w-full justify-center overflow-hidden rounded-md bg-primary">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center blur-md filter"
                style={{
                  backgroundImage: `url(${src})`,
                }}
              />
              <Image
                alt={alt || ""}
                src={src || ""}
                width={width ? Number(width) : 0}
                height={height ? Number(height) : 0}
                sizes="100vw"
                className="z-10 m-0 grow object-contain"
                {...props}
              />
            </div>
            <figcaption className="mt-2 text-sm text-gray-500">{title}</figcaption>
          </figure>
        ) : (
          <div className="relative my-10 h-[30rem] w-full overflow-hidden rounded-md bg-primary">
            <div
              className="absolute inset-0 bg-cover bg-center blur-md filter"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
            <Image
              className="absolute m-0 h-full w-full rounded object-contain"
              alt={alt || ""}
              src={src || ""}
              width={width ? Number(width) : 0}
              height={height ? Number(height) : 0}
              sizes="100vw"
              {...props}
            />
          </div>
        )}
      </>
    ),
    pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
    Info: ({ children, ...props }) => <Information {...props}>{children}</Information>,
    Link: Link,
    ...components,
  }
}
