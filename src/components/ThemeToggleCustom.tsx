export default function ThemeToggleCustom({
  size = 30,
  clicked,
}: {
  size?: number
  clicked: () => void
}) {
  // Optional border for the toggle, goes in first div
  // style={{ border: `${(10 / 100) * size}px solid #D1D5DB` }}
  return (
    <div className="h-fit w-fit rounded-full">
      <div
        onClick={() => clicked()}
        style={{
          height: size,
          width: size * 2,
          minHeight: size,
          minWidth: size * 2,
        }}
        className="relative flex cursor-pointer items-center rounded-full border-gray-600 bg-linear-to-b from-[#00ffff] to-[#87ceeb] dark:from-[#191970] dark:to-[#663399]"
      >
        <div className="absolute left-[5%] z-1 h-[80%] w-[40%] rounded-[50%] bg-[#ff0] shadow-[0_0_5px_#ff0] transition-all duration-[400ms] ease-in-out dark:left-[55%] dark:bg-[#f5f5f5] dark:shadow-[0_0_5px_#f5f5f5]">
          <div className="absolute top-[17.647%] left-[5.88%] h-[17.647%] w-[47.059%] -rotate-45 rounded-[50%] bg-[burlywood] opacity-0 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)] dark:opacity-40" />
          <div className="absolute top-[17.647%] right-[11.76%] h-[17.647%] w-[29.412%] rotate-45 rounded-[50%] bg-[[burlywood]] opacity-0 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)] dark:opacity-40" />
        </div>
        <div>
          <div className="absolute top-[50%] left-[60%] h-[10%] w-[25%] rounded-[50%] bg-[#f5f5f5] transition-all duration-[400ms] ease-in-out dark:top-[50%] dark:left-[40%] dark:h-[5%] dark:w-[2.5%] dark:shadow-[0_0_10px_2px_#ee82ee]" />
          <div className="absolute top-[50%] left-[60%] h-[10%] w-[25%] rounded-[50%] bg-[#f5f5f5] transition-all duration-[400ms] ease-in-out dark:top-[40%] dark:left-[20%] dark:h-[5%] dark:w-[2.5%] dark:shadow-[0_0_10px_2px_#ee82ee]" />
          <div className="absolute top-[25%] left-[25%] z-2 h-[10%] w-[37.5%] rounded-[50%] bg-[#f5f5f5] transition-all duration-[400ms] ease-in-out dark:top-[25%] dark:left-[30%] dark:h-[10%] dark:w-[5%] dark:shadow-[0_0_10px_2px_#ee82ee]" />
          <div className="absolute top-[65%] left-[25%] h-[15%] w-[50%] rounded-[50%] bg-[#f5f5f5] transition-all duration-[400ms] ease-in-out dark:top-[65%] dark:left-[20%] dark:h-[15%] dark:w-[7.5%] dark:shadow-[0_0_10px_2px_#ee82ee]" />
        </div>
      </div>
    </div>
  )
}
