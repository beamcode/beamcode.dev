import React from "react"

const experiences = [
  {
    company: "Sinotech",
    date: "Oct 2023 - Mar 2024 (6 mo)",
    description:
      "At Sinotech, I developed key features for an innovative iOS app using SwiftUI, focusing on critical functionalities for its release.",
  },
  {
    company: "Weel",
    date: "Mar - Aug 2022 (6 mo)",
    description:
      "Six-month internship working with React, React Native, and web development projects. I gained experience in teamwork and mobile development. Excellent learning opportunity that helped me grow as a developer.",
  },
  {
    company: "Denarius",
    date: "Sept - Dec 2020 (4 mo)",
    description:
      "Internship in cloud data management, use of Google cloud platform, development of tools in C# and development of dynamic SQL queries.",
  },
  {
    company: "Titan Fleet Training",
    date: "April 2017 (1 wk)",
    description:
      "Internship onboard private 50m motoryacht SIROCCO as an assistant engineer. Learned basic engineering and computer systems onboard.",
  },
]

export default function ExperienceSection() {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row">
      <div className="bg-primary-bg h-fit w-full rounded-xs px-2 md:w-32">
        <h1 className="text-xl">Experience</h1>
      </div>

      <ol className="relative flex-1 space-y-6 border-gray-200 dark:border-[gray]">
        {experiences.map((experience, index) => (
          <li key={index}>
            <h3 className="flex w-fit items-center text-lg font-semibold">{experience.company}</h3>
            <time className="text-primary-text mb-2 block w-fit text-sm leading-none font-normal dark:text-stone-400">
              {experience.date}
            </time>
            <p className="text-secondary text-base font-normal">{experience.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
