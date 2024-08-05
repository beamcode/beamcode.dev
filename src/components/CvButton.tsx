export default function CvButton({ mobile }: { mobile: boolean }) {
  return (
    <button
      type="button"
      onClick={() =>
        alert(
          "Please send me a LinkedIn message or email me at samuel.palmer@epitech.eu for a pdf copy of my CV with contact details! Thank you"
        )
      }
      className={` ${
        mobile && "h-full min-w-[230px] md:hidden"
      } flex h-full items-center justify-between gap-2 rounded-lg bg-[#C55300] px-3 py-1 pr-4 shadow-md transition duration-100 hover:scale-[0.98]`}
    >
      {!mobile && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={35}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      )}
      <span className="text-md w-full whitespace-nowrap text-center font-semibold text-white">
        CV
      </span>
    </button>
  )
}
