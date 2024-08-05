export default function ThemeButtonEmoji({ clicked }: { clicked: () => void }) {
  return (
    <button
      onClick={() => clicked()}
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex h-fit w-fit items-center justify-center rounded-full p-2 px-3 transition-all hover:bg-gray-200 dark:hover:bg-[#444444]"
    >
      <div className="hidden dark:block">🌜</div>
      <div className="block dark:hidden">🌞</div>
    </button>
  )
}
