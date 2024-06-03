"use client"

import { useState } from "react"
import EducationSection from "@/components/about/Education.cv"
import SkillsSection from "@/components/about/Skills.cv"
import ExperienceSection from "@/components/about/Experience.cv"
import OtherSection from "@/components/about/Other.cv"
import Image from "next/image"

export default function AboutPage() {
  const [emailText, setEmailText] = useState("Email")
  const email = "samuel.palmer@epitech.eu"

  async function handleCopyPlainText() {
    try {
      await navigator.clipboard.writeText(email)
    } catch (error) {
      console.error("Failed to copy email content:", error)
    }
  }

  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-6 animate-in">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5">
            <Image
              src="/hero-about.gif"
              width={300}
              height={300}
              className="max-h-[300px] w-full rounded-lg object-cover animate-in"
              alt={""}
            />
            <div className="space-y-2">
              <h1 className="mb-3 text-5xl md:text-[40px] w-fit font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-yellow-600 from-red-400">
                Samuel Palmer
              </h1>

              <p className="mb-3 text-primary-light dark:text-primary-dark font-normal">
                {
                  "I'm currently in my fourth year at Epitech Paris, focusing on software development. My studies include emerging technologies like robotics and embedded systems, alongside software design. I also have a keen interest in travel and exploring new places."
                }
              </p>
            </div>
          </div>

          <section
            className="flex justify-between text-primary-light dark:text-primary-dark animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h2 className="text-secondary">[ Connect with me ]</h2>
            <ul className="flex gap-6 animated-list">
              <li className="transition-opacity">
                <button
                  className="hover:underline underline-offset-4"
                  onClick={() => {
                    handleCopyPlainText()
                    setEmailText("Copied!")
                    setTimeout(() => {
                      setEmailText("Email")
                    }, 1500)
                  }}
                >
                  {emailText}
                </button>
              </li>
              <li className="transition-opacity">
                <a
                  className="hover:underline underline-offset-4"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-palmer1/"
                >
                  LinkedIn/CV
                </a>
              </li>
              <li className="transition-opacity">
                <a
                  className="hover:underline underline-offset-4"
                  target="_blank"
                  href="https://github.com/beamcode"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div
        className="animate-in flex flex-col gap-10"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <OtherSection />
      </div>
    </div>
  )
}
