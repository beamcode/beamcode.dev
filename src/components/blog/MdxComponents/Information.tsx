import { ReactNode } from "react"

export default function Information({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center w-full h-full p-2 gap-2 bg-orange-300 dark:bg-yellow-800 rounded-lg text-black dark:text-white not-prose">
      <div className="h-full">
        <svg
          className="dark:fill-white"
          height="22"
          viewBox="0 0 24 24"
          width="22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm0 6c.5522847 0 1 .4477153 1 1v6c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-6c0-.5522847.4477153-1 1-1zm0-4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
          />
        </svg>
      </div>
      <div>
        <p className="text-sm">
          This is a simple blog site built with Next.js and Tailwind CSS. The
          content is written in Markdown and rendered using the{" "}
        </p>
      </div>
    </div>
  )
}
