import SpotifyWidget from "@/components/SpotifyWidget"
import MacTerminal from "@/components/Terminal"
import Image from "next/image"
import { Fragment } from "react"
import VercelBox from "@/components/VercelBox"

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

function LookingForWork() {
  return (
    <div className="flex flex-row gap-2 w-full text-secondary items-center">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 " />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 duration-500" />
      </span>
      <p>Software engineer</p>
    </div>
  )
}

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
    <section className="flex flex-col-reverse sm:flex-row w-full bg-primary rounded-md p-2 gap-2 sm:gap-4 overflow-hidden">
      <div className="flex-1 flex flex-col justify-between p-2 space-y-3">
        <div className="flex flex-wrap items-baseline justify-between w-full">
          {/* <h1 className="text-lg break-all">{title}</h1> */}

          <VercelBox
            marginTopLeft={[10, 10]}
            marginTopRight={[60, 10]}
            marginBottomLeft={[10, 10]}
            marginBottomRight={[30, 10]}
            colorClass="bg-secondary"
          >
            <h1 className="text-lg break-all mx-1">{title}</h1>
          </VercelBox>

          <VercelBox
            marginTopLeft={[50, 10]}
            marginTopRight={[10, 15]}
            marginBottomLeft={[20, 10]}
            marginBottomRight={[15, 80]}
            colorClass="bg-secondary"
          >
            <h2 className="text-secondary text-xs mx-1">{date}</h2>
          </VercelBox>
        </div>

        <p className="text-secondary text-sm z-10">{description}</p>

        <div className="flex flex-wrap gap-5 text-sm">
          {demo_link && (
            <a
              href={demo_link}
              target="_blank"
              className="underline underline-offset-4 whitespace-nowrap"
            >
              Live Demo ↗
            </a>
          )}
          {github_link && (
            <a
              href={github_link}
              target="_blank"
              className="underline underline-offset-4 whitespace-nowrap"
            >
              Github ↗
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] dark:text-black">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 bg-orange-200 dark:bg-orange-300 rounded-full h-fit whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-md cursor-pointer h-40 sm:h-auto sm:w-40 bg-secondary">
        <Image
          src={image}
          alt="Project Image"
          width="0"
          height="0"
          sizes="100vw"
          className="absolute inset-0 object-cover w-full h-full transition duration-300 hover:scale-105"
        />
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <Fragment>
      <div
        className="flex flex-col mb-10 animate-in"
        style={{ "--index": 0 } as React.CSSProperties}
      >
        <div className="flex items-center">
          <h1 className="font-bold text-3xl mr-2">Hi.</h1>
          <h1 className="font-bold text-3xl animate-wave origin-[70%_70%] hover:animate-wave-hover">
            👋
          </h1>
        </div>
        {/* <div className="animate-in" style={{ "--index": 1 } as React.CSSProperties}>
          <LookingForWork />
        </div> */}
        {/* <SpotifyWidget /> */}
      </div>
      <div
        className="flex flex-col gap-10 animate-in"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <h2 className="text-xl font-extralight">Projects</h2>

        <ul className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <li
              key={index}
              className="animate-in"
              style={{ "--index": index + 3 } as React.CSSProperties}
            >
              {/* <ProjectComponent project={project} /> */}
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  )
}
