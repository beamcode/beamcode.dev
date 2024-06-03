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
      <div className="absolute right-1 top-1 z-20">
        <CopyCodeButtonIcon children={children} />
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

//flex absolute z-50 -top-[30px] right-2
