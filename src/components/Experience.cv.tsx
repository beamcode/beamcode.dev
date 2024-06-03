export default function ExperienceSection() {
  return (
    <div className="w-full">
      <div className="mb-3 flex w-fit px-2 rounded-lg items-center gap-2 bg-zinc-100 dark:bg-zinc-800">
        <svg
          aria-hidden="true"
          width={25}
          className="h-10 fill-[#50649c] dark:fill-[#809cbe]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-[#50649c] dark:text-[#809cbe]">
          Experience
        </h1>
      </div>

      <ol className="relative ml-2 border-l border-gray-200 dark:border-[gray]">
        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.5px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              Weel
            </h3>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-[gray] dark:text-[white]">
              Latest
            </span>
          </div>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-[#b1aaa0]">
            Apr - Aug 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Four-month internship working with ReactJS, ReactNative, and web
            development projects. I gained experience in team work and mobile
            development. Excellent learning opportunity that helped me grow as a
            developer.
          </p>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.6px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              Denarius
            </h3>
          </div>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-[#b1aaa0]">
            Sept - Dec 2020
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Internship in cloud data management, use of Google cloud platform,
            development of tools in C# and development of dynamic SQL queries.
          </p>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.6px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center whitespace-nowrap text-lg font-semibold text-gray-900 dark:text-gray-200">
              Titan Fleet Training
            </h3>
          </div>

          <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-[#b1aaa0]">
            April 2017
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Internship onbroad private 50m motoryacht SIROCCO as an asistant
            engineer. Learning of basic engineering and computer systems
            onbroad.
          </p>
        </li>
      </ol>
    </div>
  )
}
