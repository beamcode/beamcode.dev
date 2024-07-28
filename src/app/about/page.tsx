"use client"

import { useState } from "react"
import EducationSection from "@/components/about/Education.cv"
import SkillsSection from "@/components/about/Skills.cv"
import ExperienceSection from "@/components/about/Experience.cv"
import IntrestsSection from "@/components/about/Intrests.cv"
import Image from "next/image"
import Link from "next/link"
import LinkedinButton from "@/components/LinkedinButton"

const imageData = [
  {
    alt: "Me speaking on stage at React Summit about the future of Next.js",
    src: "/mrbeast.png",
    className: "h-40",
  },
  {
    alt: "Me standing on stage at Reactathon delivering the keynote",
    src: "/japan2.jpg",
    className: "sm:row-span-2 row-span-1",
    objectPosition: "object-top sm:object-center",
  },
  {
    alt: "Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community",
    src: "/vietnam4.jpg",
    className: "",
  },
  {
    alt: "Me, Lydia, and Delba filming the Next.js Conf keynote",
    src: "/vietnam3.jpg",
    className: "row-span-2",
  },
  {
    alt: "My badge on top of a pile of badges from a Vercel meetup we held",
    src: "/japan.jpg",
    className: "row-span-2",
  },
  {
    alt: "Me standing on stage at SmashingConf giving a talk about my optimism for the web",
    src: "/vietnam2.jpg",
    className: "h-40",
  },
]

function ImageGrid({ indexStart }: { indexStart: number }) {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 group">
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`${image.className} relative hover:z-50 hover:!opacity-100 hover:scale-110 group-hover:opacity-70 hover:cursor-pointer transition-all duration-300 rounded-lg`}
          style={{ "--index": index + indexStart } as React.CSSProperties}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fetchPriority="high"
            decoding="async"
            className={`animate-in w-full h-full rounded-md object-cover absolute bg-primary ${
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
    <section className="flex flex-wrap gap-5 justify-between text-primary">
      <ul className="flex flex-wrap gap-2 animated-list">
        <li className="transition-opacity">
          <button
            className={`flex items-center gap-1 px-3 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:bg-blue-400 ${
              emailText === "Copied!" ? "bg-green-300 dark:bg-green-500" : "bg-primary"
            }`}
            onClick={() => handleCopyEmail()}
          >
            <Image
              src="/mail.gif"
              alt="Email Logo"
              width={20}
              height={20}
              className="inline-block"
            />
            {emailText}
          </button>
        </li>
        <li>
          <Link
            className="flex items-center gap-1 bg-primary px-3 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:bg-blue-400"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-palmer1/"
          >
            <Image
              src="/linkedin.gif"
              alt="LinkedIn Logo"
              width={18}
              height={18}
              className="inline-block"
            />
            LinkedIn/CV
          </Link>
        </li>
        <li className="transition-opacity">
          <Link
            className="flex items-center gap-1 bg-primary px-3 py-1 rounded-sm transition-all duration-300 ease-in-out transform hover:bg-blue-400"
            target="_blank"
            href="https://github.com/beamcode"
          >
            <Image
              src="/github.gif"
              alt="GitHub Logo"
              width={20}
              height={20}
              className="inline-block"
            />
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
        className="flex flex-col md:flex-row gap-6 w-full animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <div className="w-full md:w-32 h-fit bg-primary rounded-sm px-2">
          <h1 className="text-xl">Whoami</h1>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-primary font-semibold">
            {"Hi there! I'm "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-red-400">
              Sam
            </span>
            {", a software engineer and student passionate about various tech fields."}
          </p>
          <p className="text-primary font-semibold">
            {
              "I'm currently in my fifth year at Epitech Paris finalizing my masters and working on BetterVoxel"
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
