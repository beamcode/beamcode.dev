export default function ThemeToggle({
  size = 30,
  clicked,
}: {
  size?: number
  clicked: () => void
}) {
  // Optional border for the toggle, goes in first div
  // style={{ border: `${(10 / 100) * size}px solid #D1D5DB` }}
  return (
    <div className="w-fit h-fit rounded-full">
      <div
        onClick={() => clicked()}
        style={{
          height: size,
          width: size * 2,
          minHeight: size,
          minWidth: size * 2,
        }}
        className="flex items-center bg-gradient-to-b from-[#00ffff] to-[#87ceeb] relative cursor-pointer rounded-full border-gray-600 dark:from-[#191970] dark:to-[#663399]"
      >
        <div className="h-[80%] w-[40%] absolute shadow-[0_0_5px_#ff0] z-[1] transition-all duration-[400ms] ease-in-out rounded-[50%] left-[5%] bg-[#ff0] dark:shadow-[0_0_5px_#f5f5f5] dark:left-[55%] dark:bg-[#f5f5f5]">
          <div className="absolute top-[17.647%] left-[5.88%] rounded-[50%] h-[17.647%] w-[47.059%] -rotate-45 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)] bg-[burlywood] opacity-0 dark:opacity-40" />
          <div className="absolute top-[17.647%] right-[11.76%] rounded-[50%] h-[17.647%] w-[29.412%] rotate-45 shadow-[inset_0_5px_5px_rgba(0,0,0,0.4)] bg-[[burlywood]] opacity-0 dark:opacity-40" />
        </div>
        <div>
          <div className="absolute transition-all duration-[400ms] ease-in-out rounded-[50%] bg-[#f5f5f5] h-[10%] w-[25%] left-[60%] top-[50%] dark:shadow-[0_0_10px_2px_#ee82ee] dark:h-[5%] dark:w-[2.5%] dark:left-[40%] dark:top-[50%]" />
          <div className="absolute transition-all duration-[400ms] ease-in-out rounded-[50%] bg-[#f5f5f5] h-[10%] w-[25%] left-[60%] top-[50%] dark:shadow-[0_0_10px_2px_#ee82ee] dark:h-[5%] dark:w-[2.5%] dark:left-[20%] dark:top-[40%]" />
          <div className="absolute transition-all duration-[400ms] ease-in-out rounded-[50%] bg-[#f5f5f5] h-[10%] w-[37.5%] left-[25%] top-[25%] z-[2] dark:shadow-[0_0_10px_2px_#ee82ee] dark:h-[10%] dark:w-[5%] dark:left-[30%] dark:top-[25%]" />
          <div className="absolute transition-all duration-[400ms] ease-in-out rounded-[50%] bg-[#f5f5f5] h-[15%] w-[50%] left-[25%] top-[65%] dark:shadow-[0_0_10px_2px_#ee82ee] dark:h-[15%] dark:w-[7.5%] dark:left-[20%] dark:top-[65%]" />
        </div>
      </div>
    </div>
  )
}
