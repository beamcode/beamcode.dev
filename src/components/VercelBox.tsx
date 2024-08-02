import React from "react"

export default function VercelBox({
  marginTopLeft = [5, 5],
  marginTopRight = [5, 5],
  marginBottomLeft = [5, 5],
  marginBottomRight = [5, 5],
  colorClass = "bg-[black]",
  children,
}: {
  marginTopLeft?: [number, number]
  marginTopRight?: [number, number]
  marginBottomLeft?: [number, number]
  marginBottomRight?: [number, number]
  colorClass?: string
  children: React.ReactNode
}) {
  const thickness = 3

  return (
    <div className="relative">
      {/* Top Left */}
      <span className="absolute z-20 -translate-x-[calc(50%-0.5px)] w-2 h-px bg-tertiary" />
      <span className="absolute z-20 -translate-y-[calc(50%-0.5px)] h-2 w-px bg-tertiary" />
      {/* Top Right */}
      {/* <span className="absolute right-0 z-20 translate-x-[calc(50%-0.5px)] w-2 h-px bg-tertiary" />
      <span className="absolute right-0 z-20 -translate-y-[calc(50%-0.5px)] h-2 w-px bg-tertiary" /> */}
      {/* Bottom Left */}
      <span className="absolute bottom-0 right-0 z-20 translate-x-[calc(50%-0.5px)] w-2 h-px bg-tertiary" />
      <span className="absolute bottom-0 right-0 z-20 translate-y-[calc(50%-0.5px)] h-2 w-px bg-tertiary" />
      {/* Bottom Right */}
      {/* <span className="absolute bottom-0 z-20 -translate-x-[calc(50%-0.5px)] w-2 h-px bg-tertiary" />
      <span className="absolute bottom-0 z-20 translate-y-[calc(50%-0.5px)] h-2 w-px bg-tertiary" /> */}

      <span
        className={`absolute inset-x-0 h-px ${colorClass}`}
        style={{
          left: `-${marginTopLeft[0]}px`,
          right: `-${marginTopRight[0]}px`,
        }}
      />
      <span
        className={`absolute bottom-0 inset-x-0 h-px ${colorClass}`}
        style={{
          left: `-${marginBottomLeft[0]}px`,
          right: `-${marginBottomRight[0]}px`,
        }}
      />
      <span
        className={`absolute inset-y-0 w-px ${colorClass}`}
        style={{
          top: `-${marginTopLeft[1]}px`,
          bottom: `-${marginBottomLeft[1]}px`,
        }}
      />
      <span
        className={`absolute right-0 inset-y-0 w-px ${colorClass}`}
        style={{
          top: `-${marginTopRight[1]}px`,
          bottom: `-${marginBottomRight[1]}px`,
        }}
      />

      <div className="p-1">{children}</div>
    </div>
  )
}
