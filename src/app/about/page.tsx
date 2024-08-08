"use client"

import { useState } from "react"
import EducationSection from "@/components/about/Education.cv"
import SkillsSection from "@/components/about/Skills.cv"
import ExperienceSection from "@/components/about/Experience.cv"
import IntrestsSection from "@/components/about/Intrests.cv"
import Image from "next/image"
import Link from "next/link"

const imageData = [
  {
    alt: "Selfie with MrBeast",
    src: "/mrbeast.png",
    className: "h-40",
  },
  {
    alt: "Ski in japan",
    src: "/japan2.jpg",
    className: "sm:row-span-2 row-span-1",
    objectPosition: "object-top sm:object-center",
  },
  {
    alt: "Vietnam scuba diving with a friend",
    src: "/vietnam4.jpg",
    className: "",
  },
  {
    alt: "Hicking in the mountains in Vietnam",
    src: "/vietnam3.jpg",
    className: "row-span-2",
  },
  {
    alt: "Mt. Fuji climb badge",
    src: "/japan.jpg",
    className: "row-span-2",
  },
  {
    alt: "Selfie with cool scenery in Vietnam",
    src: "/vietnam2.jpg",
    className: "h-40",
  },
]

function ImageGrid({ indexStart }: { indexStart: number }) {
  return (
    <div className="group my-8 grid grid-cols-2 grid-rows-4 gap-4 sm:grid-cols-3 sm:grid-rows-3">
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`${image.className} relative rounded-lg transition-all duration-300 hover:z-50 hover:scale-110 hover:cursor-pointer hover:!opacity-100 group-hover:opacity-70`}
          style={{ "--index": index + indexStart } as React.CSSProperties}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fetchPriority="high"
            decoding="async"
            className={`absolute size-full animate-in rounded-md bg-primary object-cover ${
              image.objectPosition || ""
            }`}
            width={0}
            height={0}
            sizes="(max-width: 768px) 213px, 33vw"
          />
        </div>
      ))}
    </div>
  )
}

function ContactButton() {
  const [emailText, setEmailText] = useState("Email")
  const email = "samuel.palmer@epitech.eu"

  async function handleCopyPlainText() {
    try {
      await navigator.clipboard.writeText(email)
    } catch (error) {
      console.error("Failed to copy email content:", error)
    }
  }

  function handleCopyEmail() {
    handleCopyPlainText()
    setEmailText("Copied!")
    setTimeout(() => setEmailText("Email"), 4000)
  }

  return (
    <section className="flex flex-wrap justify-between gap-5 text-primary">
      <ul className="animated-list flex flex-wrap gap-2">
        <li className="transition-opacity">
          <button
            className={`flex transform items-center gap-2 rounded-md bg-primary px-4 py-[3px] transition-all duration-300 ease-in-out hover:bg-secondary ${
              emailText === "Copied!" ? "bg-green-300 dark:bg-green-500" : "bg-primary"
            }`}
            onClick={() => handleCopyEmail()}
          >
            {emailText}
          </button>
        </li>
        <li>
          <Link
            className="flex transform items-center gap-2 rounded-md bg-primary px-4 py-[3px] transition-all duration-300 ease-in-out hover:bg-secondary"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-palmer1/"
          >
            LinkedIn/CV
          </Link>
        </li>
        <li className="transition-opacity">
          <Link
            className="flex transform items-center gap-2 rounded-md bg-primary px-4 py-[3px] transition-all duration-300 ease-in-out hover:bg-secondary"
            target="_blank"
            href="https://github.com/beamcode"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default function Page() {
  return (
    <div className="space-y-16">
      <div
        className="flex w-full animate-in flex-col gap-6 md:flex-row"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div className="h-fit w-full rounded-sm bg-primary px-2 md:w-32">
          <h1 className="text-xl">Whoami</h1>
        </div>

        <div className="flex-1 space-y-4">
          <p className="font-semibold text-primary">
            {"Hi there! I'm "}
            <span className="bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text font-extrabold text-transparent">
              Sam
            </span>
            {", a software engineer and student passionate about various tech fields."}
          </p>
          <p className="font-semibold text-primary">
            {
              "I'm currently in my fifth year at Epitech Paris finalizing my masters and working on BetterVoxel."
            }
          </p>
          <ContactButton />
        </div>
      </div>

      <ImageGrid indexStart={3} />

      <div className="animate-in space-y-12" style={{ "--index": 2 } as React.CSSProperties}>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <IntrestsSection />
      </div>
    </div>
  )
}
