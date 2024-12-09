import {
  Unix,
  Linux,
  Macos,
  Nodejs,
  Expressjs,
  Python,
  Tailwindcss,
  NextJS,
  Arduino,
  Swift,
  SwiftUI,
  C,
  Cpp,
} from "@/components/about/tags"
import Link from "next/link"

export default function SkillsSection() {
  const size = 16
  const languages = [
    {
      name: "NextJS",
      component: <NextJS width={size} key="nextjs" className="fill-default-svg" />,
      url: "https://nextjs.org/",
    },
    {
      name: "Swift",
      component: <Swift width={size} key="swift" className="" />,
      url: "https://developer.apple.com/swift/",
    },
    {
      name: "SwiftUI",
      component: <SwiftUI width={size} key="swiftui" className="" />,
      url: "https://developer.apple.com/xcode/swiftui/",
    },
    {
      name: "TailwindCSS",
      component: <Tailwindcss width={size} key="tailwindcss" className="" />,
      url: "https://tailwindcss.com/",
    },
    {
      name: "NodeJS",
      component: <Nodejs width={size} key="nodejs" className="" />,
      url: "https://nodejs.org/",
    },
    {
      name: "ExpressJS",
      component: <Expressjs width={size} key="expressjs" className="fill-default-svg" />,
      url: "https://expressjs.com/",
    },
    {
      name: "Python",
      component: <Python width={size} key="python" className="" />,
      url: "https://www.python.org/",
    },
    {
      name: "Unix",
      component: <Unix width={size} key="unix" className="fill-default-svg" />,
      url: "https://en.wikipedia.org/wiki/Unix",
    },
    {
      name: "Linux",
      component: <Linux width={size} key="linux" className="fill-default-svg" />,
      url: "https://www.linux.org/",
    },
    {
      name: "macOS",
      component: <Macos width={size} key="macos" className="fill-default-svg" />,
      url: "https://www.apple.com/macos/",
    },
    {
      name: "Arduino",
      component: <Arduino width={size} key="arduino" className="" />,
      url: "https://www.arduino.cc/",
    },
    {
      name: "C",
      component: <C width={size} key="c" className="" />,
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C++",
      component: <Cpp width={size} key="cpp" className="" />,
      url: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
  ]

  return (
    <div className="flex w-full flex-col gap-6 md:flex-row">
      <div className="h-fit w-full rounded-sm bg-primary px-2 md:w-32">
        <h1 className="text-xl">Skills</h1>
      </div>

      <ul className="flex-1 space-y-6 border-gray-200 dark:border-[gray]">
        <li>
          <div className="mb-1 flex items-center gap-1">
            <svg width={20} viewBox="0 0 128 128">
              <g fill="#61DAFB">
                <circle cx="64" cy="64" r="11.4" />
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
              </g>
            </svg>
            <h3 className="flex items-center text-lg font-semibold">React/React Native</h3>
          </div>

          <p className="text-base font-normal text-secondary">
            Development of various projects including responsive web-apps (dashboards, landing
            pages) and mobile apps using the React library.
          </p>
        </li>

        <li>
          <div className="mb-1 flex items-center gap-1">
            <C width={20} />
            <Cpp width={20} />
          </div>

          <p className="text-base font-normal text-secondary">
            3 years of C and C++ development through various projects including algorithms and game
            development.
          </p>
        </li>

        <li>
          <div className="mb-1 flex flex-col gap-1">
            <h3 className="flex items-center whitespace-pre text-lg font-semibold">Languages</h3>

            <div className="flex gap-1 text-base font-normal text-secondary">
              <p>Bilingual proficiency in</p>

              <h3 className="font-semibold text-blue-500">French</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width={25}
                className="self-baseline"
              >
                <path
                  fill="#CFD8DC"
                  d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"
                />
                <path
                  fill="#546E7A"
                  d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"
                />
                <path
                  fill="#546E7A"
                  d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"
                />
                <path fill="#546E7A" d="M32 20H34V24H32z" />
                <path
                  fill="#2196F3"
                  d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"
                />
                <path fill="#3F51B5" d="M26 42L23 35 33 35z" />
                <path
                  fill="#FFF"
                  d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"
                />
              </svg>
              <h3 className="font-semibold text-blue-500">English</h3>
            </div>
          </div>
        </li>

        <li className="mb-1 flex flex-wrap items-center gap-2">
          {languages.map((language, index) => (
            <Link
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={language.url}
              className="group inline-flex cursor-pointer items-center rounded-[4px] bg-primary px-1.5 py-0.5 transition-all duration-300 hover:bg-secondary"
            >
              <span className="text-md mr-2 flex font-normal">{language.name}</span>
              {language.component}
              <span className="inline-block w-0 overflow-hidden text-xs font-normal transition-all duration-300 group-hover:ml-2 group-hover:w-4">
                ↗
              </span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}
