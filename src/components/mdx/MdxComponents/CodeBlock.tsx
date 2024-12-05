import CopyCodeButtonIcon from "./CopyCodeButtonIcon"
import "@/styles/codeblocks.css"

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode
}

export default function CodeBlock({ children, ...props }: CodeBlockProps) {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-20">
        <CopyCodeButtonIcon>{children}</CopyCodeButtonIcon>
      </div>
      <pre
        {...props}
        className={`not-prose relative overflow-x-scroll rounded-md py-[15px] text-sm ${props.className}`}
      >
        {children}
      </pre>
    </div>
  )
}
