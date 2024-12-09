import React from "react"

const educationData = [
  {
    institution: "Shibaura Institute of Technology (SIT), Tokyo Japan",
    date: "2022 - 2023",
    description:
      "International exchange program at a renowned private science and engineering university known for its innovation, excellence, and focus on hands-on IT training",
  },
  {
    institution: "Epitech, Paris France",
    date: "2019 - 2025",
    description: [
      "Information Technology Expert Title",
      "Master's Degree, learning by practice through projects",
      "1 year of studying in Tokyo as an exchange student",
    ],
  },
  {
    institution: "Leonardo Da Vinci High School of Architecture",
    date: "2016 - 2019",
    description: [
      "Graduated in STI2D (Science and technology of industry and sustainable development)",
      "Studies focused on general architecture and sustainable development",
    ],
  },
]

export default function EducationSection() {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row">
      <div className="h-fit w-full rounded-sm bg-primary px-2 md:w-32">
        <h1 className="text-xl">Education</h1>
      </div>

      <ol className="relative flex-1 space-y-6 border-gray-200 dark:border-[gray]">
        {educationData.map((education, index) => (
          <li key={index}>
            <h3 className="flex w-fit flex-wrap items-center text-lg font-semibold">
              {education.institution}
            </h3>
            <time className="mb-2 block w-fit text-sm font-normal leading-none text-primary dark:text-stone-400">
              {education.date}
            </time>
            <div className="text-base font-normal text-secondary">
              {Array.isArray(education.description) ? (
                <ul>
                  {education.description.map((desc, i) => (
                    <li key={i}>• {desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{education.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
