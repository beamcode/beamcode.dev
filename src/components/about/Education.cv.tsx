export default function EducationSection() {
  return (
    <div className="w-full">
      <div className="mb-3 flex w-full px-2 py-1 rounded-lg items-center gap-2 bg-primary-bg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width={30}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-[#50649c] dark:fill-[#809cbe]"
            d="m21.49 10.19l-1-.55l-9-5h-.11a1.06 1.06 0 0 0-.19-.06h-.37a1.17 1.17 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87ZM16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5l.15.06h.09a1 1 0 0 0 .25 0a1 1 0 0 0 .25 0h.09a.47.47 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5L11 6.64l6.94 3.86Z"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-[#50649c] dark:text-[#809cbe]">Education</h1>
      </div>

      <ol className="relative ml-2 border-l border-gray-200 dark:border-[gray]">
        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.5px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              SHIBAURA INSTITUTE OF TECHNOLOGY, TOKYO JAPAN
            </h3>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-[gray] dark:text-[white]">
              Latest
            </span>
          </div>
          <time className="text-md mb-2 block font-medium leading-none text-gray-600 dark:text-[#b1aaa0]">
            2022 - 2023
          </time>
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <p>
              International exchange program at a renowned private science and engineering
              university known for its innovation, excellence and focus on hands-on IT training
            </p>
          </div>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.5px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              Epitech (Nancy)
            </h3>
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-[gray] dark:text-[white]">
              Latest
            </span>
          </div>
          <time className="text-md mb-2 block font-medium leading-none text-gray-600 dark:text-[#b1aaa0]">
            2019 - 2024
          </time>
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li>• Information Technology Expert Title</li>
              <li>{"• Master's Degree, learning by practice through projects"}</li>
              <li>• 1 year of studying in Tokyo as an exchange student</li>
            </ul>
          </div>
        </li>

        <li className="mb-6 ml-4">
          <span className="absolute -left-[6.5px] mt-[7.5px] flex h-3 w-3 items-center justify-center rounded-full bg-zinc-200 dark:bg-[gray]" />
          <div className="mb-1 flex items-center gap-1">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-200">
              Leonardo Da Vinci High School of Architecture
            </h3>
          </div>
          <time className="text-md mb-2 block font-medium leading-none text-gray-600 dark:text-[#b1aaa0]">
            2016 - 2019
          </time>
          <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <ul>
              <li>
                • Graduated in STI2D (SCIENCE AND TECHNOLOGY OF INDUSTRY AND SUSTAINABLE
                DEVELOPMENT)
              </li>
              <li>• Studies focused on general architecture</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  )
}
