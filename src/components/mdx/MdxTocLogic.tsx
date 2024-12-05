"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Heading = {
  id: string
  text: string
  depth: number
}

function extractTOC(content: any): Heading[] {
  const headings: Heading[] = []

  function traverse(node: any) {
    if (node.type === "h1" || node.type === "h2" || node.type === "h3" || node.type === "h4") {
      headings.push({
        id: node.props.id,
        text: node.props.children,
        depth: parseInt(node.type.substring(1)),
      })
    }
    if (node.props && node.props.children) {
      if (Array.isArray(node.props.children)) {
        node.props.children.forEach(traverse)
      } else {
        traverse(node.props.children)
      }
    }
  }

  content.forEach(traverse)
  return headings
}

export default function MdxTocLogic({ content }: { content: any }) {
  const tocData: Heading[] = extractTOC(content)
  const [currentHeading, setCurrentHeading] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentHeading(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" } // Adjust the rootMargin to trigger earlier or later
    )

    tocData.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      tocData.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [tocData])

  return (
    <div className="flex flex-col gap-3 border-l border-primary">
      {tocData.map((heading) => (
        <Link
          key={heading.id}
          style={{ marginLeft: `${heading.depth - 1}rem` }}
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById(heading.id)
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          }}
          className={`block w-fit text-sm font-normal no-underline transition-colors ${
            currentHeading === heading.id
              ? "text-accent-primary"
              : "text-secondary hover:text-accent-primary"
          }`}
        >
          {heading.text}
        </Link>
      ))}
    </div>
  )
}
