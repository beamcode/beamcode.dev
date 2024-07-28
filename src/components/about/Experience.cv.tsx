import React from "react"

const experiences = [
  {
    company: "Sinotech",
    date: "Oct 2023 - Mar 2024 (6mo)",
    description:
      "At Sinotech, I developed key features for an innovative iOS app using SwiftUI, focusing on critical functionalities for its release.",
  },
  {
    company: "Weel",
    date: "Apr - Aug 2022 (5mo)",
    description:
      "Four-month internship working with ReactJS, ReactNative, and web development projects. I gained experience in team work and mobile development. Excellent learning opportunity that helped me grow as a developer.",
  },
  {
    company: "Denarius",
    date: "Sept - Dec 2020 (4mo)",
    description:
      "Internship in cloud data management, use of Google cloud platform, development of tools in C# and development of dynamic SQL queries.",
  },
  {
    company: "Titan Fleet Training",
    date: "April 2017 (1wk)",
    description:
      "Internship onboard private 50m motoryacht SIROCCO as an assistant engineer. Learning of basic engineering and computer systems onboard.",
  },
]

export default function ExperienceSection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="w-full md:w-32 h-fit bg-primary rounded-sm px-2">
        <h1 className="text-xl">Experience</h1>
      </div>

      <ol className="relative border-gray-200 dark:border-[gray] space-y-6 flex-1">
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3 className="flex items-center text-lg font-semibold w-fit">{experience.company}</h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-[#b1aaa0] w-fit">
              {experience.date}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
