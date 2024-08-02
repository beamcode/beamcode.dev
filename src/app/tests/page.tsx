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
      <h1 className="text-lg break-all mx-1">test</h1>
    </VercelBox>
  )
}
