import React from "react"

const educationData = [
  {
    institution: "Shibaura Institute of Technology (SIT), Tokyo Japan",
    date: "2022 - 2023",
    description:
      "International exchange program at a renowned private science and engineering university known for its innovation, excellence and focus on hands-on IT training",
  },
  {
    institution: "Epitech, Paris France",
    date: "2019 - 2024",
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
    <div className="flex flex-col md:flex-row gap-6 w-full">
      <div className="w-full md:w-32 h-fit bg-primary rounded-sm px-2">
        <h1 className="text-xl">Education</h1>
      </div>

      <ol className="relative border-gray-200 dark:border-[gray] space-y-6 flex-1">
        {educationData.map((education, index) => (
          <li key={index}>
            <h3 className="flex flex-wrap items-center text-lg font-semibold w-fit">
              {education.institution}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-600 dark:text-[#b1aaa0] w-fit">
              {education.date}
            </time>
            <div className="text-base font-normal text-gray-500 dark:text-gray-400">
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
