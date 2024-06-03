import CopyCodeButtonIcon from "./CopyCodeButtonIcon"
import "@/styles/codeblocks.css"

export default function CodeBlock({
  children,
  ...props
}: {
  children: React.ReactNode
  props: any
}) {
  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-20">
        <CopyCodeButtonIcon>{children}</CopyCodeButtonIcon>
      </div>
      <pre
        {...props}
        className="relative text-[14px] overflow-x-scroll rounded-md py-[15px] not-prose"
      >
        {children}
      </pre>
    </div>
  )
}
