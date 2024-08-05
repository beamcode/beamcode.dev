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
    image: "/bettervoxel.png",
    description:
      "A voxel-based game engine that aims to provide a better experience with voxel based games for developers and players.",
    demo_link: "https://bettervoxel.io/",
  },
  {
    title: "Personal Website",
    date: "07 / 2021",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/beamcodedev.png",
    description:
      "A vibrant and dynamic personal website that showcases the best of who I am, highlighting my incredible work, valuable experiences, and infectious enthusiasm.",
    demo_link: "https://beamcode.dev",
    github_link: "https://github.com/beamcode/beamcode.dev",
  },
  {
    title: "Bagnole",
    date: "In development",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "React Native"],
    image: "/bagnole.png",
    description:
      "Next generation car meet-up app. Find car events near you, meet new people and share your passion for cars",
    demo_link: "https://bagnoleapp.fr/",
  },
  {
    title: "BounceMaster",
    date: "04 / 2021",
    technologies: ["Unity", "C#"],
    image: "/bounceMaster.png",
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
    <section className="flex h-full w-full flex-col-reverse gap-2 overflow-hidden rounded-md bg-primary p-2 sm:gap-4">
      <div className="flex flex-1 flex-col justify-between space-y-3 p-2">
        <div className="flex w-full flex-wrap items-baseline justify-between">
          <VercelBox
            marginTopLeft={[10, 10]}
            marginTopRight={[60, 10]}
            marginBottomLeft={[10, 10]}
            marginBottomRight={[30, 10]}
            colorClass="bg-secondary"
          >
            <h1 className="mx-1 break-all text-lg">{title}</h1>
          </VercelBox>

          <VercelBox
            marginTopLeft={[50, 10]}
            marginTopRight={[10, 15]}
            marginBottomLeft={[20, 10]}
            marginBottomRight={[15, 80]}
            colorClass="bg-secondary"
          >
            <h2 className="mx-1 text-xs text-secondary">{date}</h2>
          </VercelBox>
        </div>

        <p className="z-10 text-sm text-secondary">{description}</p>

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

        <div className="flex flex-wrap gap-2 text-[11px] dark:text-black">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="h-fit whitespace-nowrap rounded-full bg-orange-200 px-2 dark:bg-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-40 cursor-pointer overflow-hidden rounded-md bg-secondary">
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
        className="mb-20 flex animate-in flex-col"
        style={{ "--index": 0 } as React.CSSProperties}
      >
        <div className="flex items-center">
          <h1 className="mr-2 text-2xl">{"hey, i'm sam"}</h1>
          <h1 className="origin-[70%_70%] animate-wave text-2xl hover:animate-wave-hover">👋</h1>
        </div>
        {/* <SpotifyWidget /> */}
      </div>
      <div
        className="flex animate-in flex-col gap-5"
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
