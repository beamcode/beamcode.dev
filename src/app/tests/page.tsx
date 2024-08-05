import VercelBox from "@/components/VercelBox"

export default function Page({}) {
  return (
    <VercelBox
      marginTopLeft={[10, 10]}
      marginTopRight={[60, 10]}
      marginBottomLeft={[10, 10]}
      marginBottomRight={[30, 10]}
      colorClass="bg-secondary"
    >
      <h1 className="mx-1 break-all text-lg">test</h1>
    </VercelBox>
  )
}
