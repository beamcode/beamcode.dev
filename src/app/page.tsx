import { Fragment } from "react"
import Image from "next/image"
import VercelBox from "@/components/VercelBox"
import SpotifyWidget from "@/components/SpotifyWidget"
import MacTerminal from "@/components/Terminal"

const projects = [
  {
    title: "BetterVoxel",
    date: "In development",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Rust"],
    image: "/images/bettervoxel.png",
    description:
      "A voxel-based game engine that aims to provide a better experience with voxel based games for developers and players.",
    demo_link: "https://bettervoxel.io/",
  },
  {
    title: "Personal Website",
    date: "07 / 2021",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/images/beamcodedev.png",
    description:
      "A vibrant and dynamic personal website that showcases the best of who I am, highlighting my incredible work, valuable experiences, and infectious enthusiasm.",
    demo_link: "https://beamcode.dev",
    github_link: "https://github.com/beamcode/beamcode.dev",
  },
  {
    title: "Bagnole",
    date: "In development",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "React Native"],
    image: "/images/bagnole.png",
    description:
      "Next generation car meet-up app. Find car events near you, meet new people and share your passion for cars",
    demo_link: "https://bagnoleapp.fr/",
  },
  {
    title: "BounceMaster",
    date: "04 / 2021",
    technologies: ["Unity", "C#"],
    image: "/images/bounceMaster.png",
    description:
      "A 2D platformer game made in Unity. The player controls a ball and must reach the end of the level by bouncing off of platforms and avoiding obstacles.",
    github_link: "https://github.com/beamcode/bounce_master",
  },
]

function ProjectCard({
  project: { title, date, image, technologies, description, demo_link, github_link },
}: {
  project: {
    title: string
    date: string
    image: string
    technologies: string[]
    description: string
    demo_link?: string
    github_link?: string
  }
}) {
  return (
    <section className="bg-primary flex h-full w-full flex-col-reverse gap-2 overflow-hidden rounded-md p-1.5 sm:gap-4">
      <div className="flex flex-1 flex-col justify-between space-y-3 p-2 sm:pt-0">
        <div className="flex w-full flex-wrap items-center justify-between">
          <h1 className="text-lg break-all">{title}</h1>
          <h2 className="text-secondary text-xs">{date}</h2>
        </div>

        <p className="text-secondary z-10 text-sm">{description}</p>

        <div className="flex flex-wrap gap-5 text-sm">
          {demo_link && (
            <a
              href={demo_link}
              target="_blank"
              className="whitespace-nowrap underline underline-offset-4"
            >
              Live Demo ↗
            </a>
          )}
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              className="whitespace-nowrap underline underline-offset-4"
            >
              Github ↗
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-accent-primary h-fit rounded-full px-2 whitespace-nowrap text-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-secondary relative h-40 cursor-pointer overflow-hidden rounded-md">
        <Image
          src={image}
          alt="Project Image"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute inset-0 size-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <Fragment>
      <div
        className="animate-in mb-20 flex flex-col gap-4"
        style={{ "--index": 0 } as React.CSSProperties}
      >
        <div className="flex items-center">
          <h1 className="mr-2 text-2xl">{"hey, i'm sam"}</h1>
          <h1 className="animate-wave hover:animate-wave origin-[70%_70%] text-2xl">👋</h1>
        </div>

        <SpotifyWidget />
      </div>
      <div
        className="animate-in flex flex-col gap-5"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <h2 className="text-xl font-extralight">Projects</h2>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li
              key={index}
              className="animate-in"
              style={{ "--index": index + 3 } as React.CSSProperties}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}
