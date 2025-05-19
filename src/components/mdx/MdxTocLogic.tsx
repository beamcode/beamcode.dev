"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"

type Heading = {
  id: string
  text: string
  depth: number
}

type MdxTocProps = {
  content: any
}

/**
 * Custom hook to track which heading is currently visible in the viewport
 */
function useActiveHeading(headings: Heading[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Get the first entry that is intersecting
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      { rootMargin: "0px 0px -80% 0px" }
    )

    // Observe all heading elements
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean) as HTMLElement[]

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [headings])

  return activeId
}

/**
 * Extract headings from MDX content
 */
function extractHeadings(content: any): Heading[] {
  const headings: Heading[] = []

  const traverseNode = (node: any) => {
    // Check if the node is a heading (h1-h6)
    if (
      typeof node.type === "string" &&
      (node.type === "h1" ||
        node.type === "h2" ||
        node.type === "h3" ||
        node.type === "h4" ||
        node.type === "h5" ||
        node.type === "h6")
    ) {
      headings.push({
        id: node.props.id,
        text: node.props.children,
        depth: parseInt(node.type.substring(1)),
      })
    }

    // Check children recursively
    if (node.props?.children) {
      if (Array.isArray(node.props.children)) {
        node.props.children.forEach(traverseNode)
      } else {
        traverseNode(node.props.children)
      }
    }
  }

  if (Array.isArray(content)) {
    content.forEach(traverseNode)
  }

  return headings
}

/**
 * Table of Contents component for MDX content
 */
export default function MdxTocLogic({ content }: MdxTocProps) {
  const headings = extractHeadings(content)
  const activeHeadingId = useActiveHeading(headings)

  // Calculate the minimum heading depth for proper indentation
  const minDepth = headings.length > 0 ? Math.min(...headings.map((heading) => heading.depth)) : 1

  const handleScrollToHeading = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav
      aria-label="Table of contents"
      className="border-primary-border flex flex-col gap-2 border-l"
    >
      {headings.map((heading) => (
        <Link
          key={heading.id}
          href={`#${heading.id}`}
          style={{ paddingLeft: `${(heading.depth - minDepth + 1) * 0.75}rem` }}
          onClick={(e) => handleScrollToHeading(e, heading.id)}
          className={`block w-fit text-sm font-normal no-underline transition-colors ${
            activeHeadingId === heading.id
              ? "text-primary-accent"
              : "text-secondary hover:text-primary-accent"
          }`}
          aria-current={activeHeadingId === heading.id ? "location" : undefined}
        >
          {heading.text}
        </Link>
      ))}
    </nav>
  )
}
